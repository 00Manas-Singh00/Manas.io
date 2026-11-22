"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  DepthOfField,
  EffectComposer,
  Noise,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction, ToneMappingMode } from "postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

import { PROFILE } from "../data";
import { markPressReady, pressState } from "../lib/press";

/**
 * The first-visit loader as a platen press, driven entirely by pressState.p (0..1):
 *
 *   0.00 - 0.30  Macro on the forme: the name set in mirrored movable type, locked in an
 *                iron chase with wooden furniture. Composition rollers cross and return,
 *                and every face turns wet, lacquer-glossy ink as they pass. The shot
 *                ends on the numbering machine, counting 000 -> 100.
 *   0.32 - 0.50  The camera pulls back; the hinged platen swings down and presses.
 *   0.50 - 0.57  Impact: a small bounce and shake; the counter reaches 100.
 *   0.58 - 0.72  The platen swings open towards you, carrying the printed sheet: the
 *                letters debossed into the paper, the ink slightly uneven.
 *   0.74 - 1.00  The sheet peels away, curls, and flies at the camera until paper fills
 *                the screen, which is where the hero (same paper) takes over.
 *
 * Realism comes from real soft shadows, bevelled edges that catch highlights, physically
 * based materials (brushed steel with anisotropic streaks and fine scratches, cast iron,
 * wood, clear-coated wet ink, fibrous paper), studio reflections, and a camera lens:
 * depth of field on the type in the macro shots, vignette and fine grain.
 * Everything is procedural; there are no image files.
 */

// Forme (type) and press dimensions, in world units. Bed top is y = 0.
const NAME = PROFILE.name.toUpperCase();
const TYPE_H = 0.42;
const TYPE_D = 0.6;
const LETTER_W = 0.46;
const SPACE_W = 0.26;
const BED_W = 7.4;
const BED_D = 3.1;
const PLATEN_W = 6.8;
const PLATEN_D = 2.7;
const PLATEN_T = 0.24;
const HINGE_Z = -BED_D / 2 + 0.08;
const OPEN = -1.85; // platen angle when open (radians, about the hinge)
const SHEET_W = 6.0;
const SHEET_H = 2.3;

const P_INK_END = 0.3;
const P_CLOSE = [0.32, 0.5] as const;
const P_OPEN = [0.58, 0.72] as const;
const P_FLY = [0.74, 1] as const;

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const span = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));
const easeInOut = (t: number) => t * t * (3 - 2 * t);
const easeIn = (t: number) => t * t * t;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function cssVar(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  return (
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() ||
    fallback
  );
}

function fontFamily() {
  return getComputedStyle(document.querySelector(".home") ?? document.body)
    .fontFamily;
}

function canvasTexture(
  w: number,
  h: number,
  draw: (g: CanvasRenderingContext2D) => void,
  srgb = true,
) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d")!);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** Fine grey noise, for roughness variation and paper tooth. */
function fillNoise(
  g: CanvasRenderingContext2D,
  w: number,
  h: number,
  base: number,
  amp: number,
) {
  const img = g.createImageData(w, h);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = base + (Math.random() - 0.5) * amp;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
}

/** Brushed metal: long streaks plus a few fine scratches, as a roughness map. */
function brushedRoughness() {
  const t = canvasTexture(
    512,
    512,
    (g) => {
      fillNoise(g, 512, 512, 118, 26);
      g.globalAlpha = 0.25;
      for (let i = 0; i < 900; i++) {
        const y = Math.random() * 512;
        const v = 90 + Math.random() * 70;
        g.strokeStyle = `rgb(${v},${v},${v})`;
        g.lineWidth = 0.6 + Math.random() * 1.4;
        g.beginPath();
        g.moveTo(0, y);
        g.lineTo(512, y + (Math.random() - 0.5) * 3);
        g.stroke();
      }
      g.globalAlpha = 0.5;
      g.strokeStyle = "rgb(200,200,200)";
      g.lineWidth = 0.5;
      for (let i = 0; i < 60; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const a = Math.random() * Math.PI;
        const l = 10 + Math.random() * 60;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
        g.stroke();
      }
    },
    false,
  );
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

/** Cast-iron mottle, for the bed and the platen. */
function castRoughness() {
  const t = canvasTexture(
    256,
    256,
    (g) => {
      fillNoise(g, 256, 256, 150, 60);
      g.globalAlpha = 0.18;
      for (let i = 0; i < 120; i++) {
        const v = 80 + Math.random() * 120;
        g.fillStyle = `rgb(${v},${v},${v})`;
        g.beginPath();
        g.arc(
          Math.random() * 256,
          Math.random() * 256,
          2 + Math.random() * 10,
          0,
          Math.PI * 2,
        );
        g.fill();
      }
    },
    false,
  );
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 2);
  return t;
}

/** Wooden furniture: warm grain along the length. */
function woodTexture() {
  const t = canvasTexture(512, 128, (g) => {
    g.fillStyle = "#8a6a48";
    g.fillRect(0, 0, 512, 128);
    for (let i = 0; i < 70; i++) {
      const y = Math.random() * 128;
      g.strokeStyle =
        Math.random() < 0.5 ? "rgba(60,38,20,0.35)" : "rgba(170,135,95,0.3)";
      g.lineWidth = 0.6 + Math.random() * 2.2;
      g.beginPath();
      g.moveTo(0, y);
      for (let x = 0; x <= 512; x += 32)
        g.lineTo(x, y + Math.sin(x * 0.02 + i) * 2.2 + (Math.random() - 0.5));
      g.stroke();
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

/** A letter's raised face, as an alpha mask (mirrored: type is cast in reverse). */
function letterMask(ch: string, family: string) {
  return canvasTexture(
    128,
    128,
    (g) => {
      g.fillStyle = "#000";
      g.fillRect(0, 0, 128, 128);
      g.translate(128, 0);
      g.scale(-1, 1);
      g.fillStyle = "#fff";
      g.font = `500 108px ${family}`;
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.fillText(ch, 64, 70);
    },
    false,
  );
}

/** Paper fibre, as colour. */
function paperTexture(paper: string) {
  const t = canvasTexture(512, 512, (g) => {
    g.fillStyle = paper;
    g.fillRect(0, 0, 512, 512);
    const img = g.getImageData(0, 0, 512, 512);
    for (let i = 0; i < img.data.length; i += 4) {
      const n = (Math.random() - 0.5) * 9;
      img.data[i] += n;
      img.data[i + 1] += n;
      img.data[i + 2] += n;
    }
    g.putImageData(img, 0, 0);
    g.globalAlpha = 0.06;
    g.strokeStyle = "#000";
    for (let i = 0; i < 300; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const a = Math.random() * Math.PI;
      const l = 6 + Math.random() * 22;
      g.lineWidth = 0.6 + Math.random() * 0.8;
      g.beginPath();
      g.moveTo(x, y);
      g.quadraticCurveTo(
        x + Math.cos(a) * l * 0.5 + (Math.random() - 0.5) * 6,
        y + Math.sin(a) * l * 0.5 + (Math.random() - 0.5) * 6,
        x + Math.cos(a) * l,
        y + Math.sin(a) * l,
      );
      g.stroke();
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 1.2);
  return t;
}

const PRINT_W = 2048;
const PRINT_H = Math.round((PRINT_W * SHEET_H) / SHEET_W);

/** The text of the impression, drawn into a canvas of the sheet's proportions. */
function drawImpression(g: CanvasRenderingContext2D, family: string) {
  let size = 400;
  g.font = `400 ${size}px ${family}`;
  size *= (PRINT_W * 0.82) / g.measureText(NAME).width;
  g.textBaseline = "middle";
  g.font = `400 ${size}px ${family}`;
  g.fillText(NAME, PRINT_W * 0.09, PRINT_H * 0.5);
  g.font = `400 ${Math.round(size * 0.1)}px ${family}`;
  g.fillText(
    `${PROFILE.tagline.toUpperCase()}   ·   IMPRESSION NO. 001`,
    PRINT_W * 0.09,
    PRINT_H * 0.86,
  );
  g.font = `500 ${Math.round(size * 0.14)}px ${family}`;
  g.textAlign = "right";
  g.fillText("No. 100", PRINT_W * 0.93, PRINT_H * 0.14);
  g.textAlign = "left";
}

/** The ink: slightly uneven and speckled, like a real letterpress impression. */
function inkTexture(ink: string, family: string) {
  return canvasTexture(PRINT_W, PRINT_H, (g) => {
    g.fillStyle = ink;
    g.shadowColor = ink;
    g.shadowBlur = 2; // a little squeeze at the edges
    drawImpression(g, family);
    g.shadowBlur = 0;
    g.globalCompositeOperation = "destination-out";
    // Tiny specks where the ink didn't take.
    for (let i = 0; i < 2600; i++) {
      g.globalAlpha = 0.12 + Math.random() * 0.35;
      g.beginPath();
      g.arc(
        Math.random() * PRINT_W,
        Math.random() * PRINT_H,
        0.6 + Math.random() * 1.4,
        0,
        Math.PI * 2,
      );
      g.fill();
    }
    // Slightly thinner ink in broad patches.
    g.globalAlpha = 0.035;
    for (let i = 0; i < 40; i++) {
      g.beginPath();
      g.ellipse(
        Math.random() * PRINT_W,
        Math.random() * PRINT_H,
        80 + Math.random() * 220,
        30 + Math.random() * 90,
        Math.random() * Math.PI,
        0,
        Math.PI * 2,
      );
      g.fill();
    }
  });
}

/** Height map of the impression: the type pressed into the paper (deboss). */
function debossTexture(family: string) {
  return canvasTexture(
    PRINT_W,
    PRINT_H,
    (g) => {
      fillNoise(g, PRINT_W, PRINT_H, 160, 18); // paper tooth
      g.filter = "blur(3px)";
      g.fillStyle = "rgb(40,40,40)";
      drawImpression(g, family);
      g.filter = "none";
    },
    false,
  );
}

function plainTooth() {
  return canvasTexture(256, 256, (g) => fillNoise(g, 256, 256, 160, 18), false);
}

// Camera keyframes: [p, position, target].
const SHOTS: [number, THREE.Vector3, THREE.Vector3][] = [
  [0.0, new THREE.Vector3(-2.7, 1.45, 2.35), new THREE.Vector3(-1.1, 0.3, 0)],
  [0.26, new THREE.Vector3(3.3, 1.45, 2.4), new THREE.Vector3(2.0, 0.28, 0)],
  [0.5, new THREE.Vector3(0, 3.1, 5.4), new THREE.Vector3(0, 0.45, 0)],
  [0.7, new THREE.Vector3(0, 2.35, 5.9), new THREE.Vector3(0, 1.25, -0.9)],
  [1.0, new THREE.Vector3(0, 2.35, 5.9), new THREE.Vector3(0, 1.25, -0.9)],
];

function shot(p: number, pos: THREE.Vector3, target: THREE.Vector3) {
  let i = 0;
  while (i < SHOTS.length - 2 && p > SHOTS[i + 1][0]) i++;
  const [p0, a0, t0] = SHOTS[i];
  const [p1, a1, t1] = SHOTS[i + 1];
  const k = easeInOut(span(p, p0, p1));
  pos.lerpVectors(a0, a1, k);
  target.lerpVectors(t0, t1, k);
}

const rounded = (w: number, h: number, d: number, r = 0.025) =>
  new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2.2, h / 2.2, d / 2.2));

type DofEffect = { target: THREE.Vector3 | null; bokehScale: number };

function Press() {
  const { camera, scene, gl, size } = useThree();
  const ink = cssVar("--ink", "#1d3bd1");
  const paper = cssVar("--paper", "#f3efe6");
  const family = useMemo(() => fontFamily(), []);

  // Studio reflections for the metal.
  useMemo(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
    scene.environmentIntensity = 0.85;
    pmrem.dispose();
  }, [gl, scene]);

  // The forme: one block per character, laid out along x and centred.
  const letters = useMemo(() => {
    const widths = [...NAME].map((ch) => (ch === " " ? SPACE_W : LETTER_W));
    const total = widths.reduce((s, w) => s + w, 0);
    let x = -total / 2;
    return [...NAME].map((ch, i) => {
      const w = widths[i];
      const cx = x + w / 2;
      x += w;
      return { ch, w, x: cx };
    });
  }, []);
  const formeStart = letters[0].x - LETTER_W / 2;
  const formeEnd = letters.at(-1)!.x + LETTER_W / 2;
  const counterX = formeEnd + 0.38;

  // Chase (iron frame) and furniture (wood) locking the type in place.
  const chaseX0 = formeStart - 0.55;
  const chaseX1 = counterX + 0.55;
  const chaseW = chaseX1 - chaseX0;
  const chaseCx = (chaseX0 + chaseX1) / 2;
  const chaseD = TYPE_D + 0.9;
  const furnD = (chaseD - TYPE_D) / 2 - 0.12;

  // --- Textures and materials ------------------------------------------------------
  const tex = useMemo(
    () => ({
      brushed: brushedRoughness(),
      cast: castRoughness(),
      wood: woodTexture(),
      paper: paperTexture(paper),
      tooth: plainTooth(),
      deboss: debossTexture(family),
      // Printed a little deeper than the page's ink, so it survives lighting and
      // tone mapping as a rich, fresh impression.
      ink: inkTexture(
        `#${new THREE.Color(ink).multiplyScalar(0.62).getHexString()}`,
        family,
      ),
    }),
    [ink, paper, family],
  );
  const mat = useMemo(() => {
    const steel = new THREE.MeshPhysicalMaterial({
      color: "#9aa0ac",
      metalness: 1,
      // Not quite mirror: tight highlights on small bevels sparkle otherwise.
      roughness: 0.42,
      roughnessMap: tex.brushed,
      anisotropy: 0.4,
    });
    const shoulder = new THREE.MeshPhysicalMaterial({
      color: "#4a505b",
      metalness: 0.9,
      roughness: 0.42,
      roughnessMap: tex.brushed,
    });
    const darkSteel = new THREE.MeshPhysicalMaterial({
      color: "#22262f",
      metalness: 0.85,
      roughness: 0.5,
      roughnessMap: tex.cast,
    });
    const castIron = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#1b1e26").lerp(new THREE.Color(ink), 0.12),
      metalness: 0.55,
      roughness: 0.6,
      roughnessMap: tex.cast,
      clearcoat: 0.25,
      clearcoatRoughness: 0.55,
    });
    const wood = new THREE.MeshStandardMaterial({
      map: tex.wood,
      roughness: 0.78,
      metalness: 0,
    });
    // Composition (rubber) rollers, coated in ink: dark, wet, glossy.
    const roller = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(ink).multiplyScalar(0.14),
      roughness: 0.5,
      metalness: 0,
      clearcoat: 0.7,
      clearcoatRoughness: 0.18,
    });
    const paperBase = new THREE.MeshStandardMaterial({
      map: tex.paper,
      bumpMap: tex.tooth,
      bumpScale: 0.4,
      roughness: 0.92,
      metalness: 0,
      side: THREE.DoubleSide,
    });
    // Unlit: ink absorbs light, it doesn't brighten under the lamp the way the paper
    // does. Lit ink washed out to pale lavender against the bright sheet.
    const print = new THREE.MeshBasicMaterial({
      map: tex.ink,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
    return {
      steel,
      shoulder,
      darkSteel,
      castIron,
      wood,
      roller,
      paperBase,
      print,
    };
  }, [tex, ink]);

  // One face material per letter, so each can take ink as the rollers pass.
  const faces = useMemo(
    () =>
      letters.map(
        (l) =>
          new THREE.MeshPhysicalMaterial({
            alphaMap: l.ch === " " ? null : letterMask(l.ch, family),
            transparent: true,
            color: "#d6d9e0",
            metalness: 0.9,
            roughness: 0.3,
            clearcoat: 0,
            clearcoatRoughness: 0.06,
            depthWrite: false,
          }),
      ),
    [letters, family],
  );
  // Wet ink reads darker than the page's ink: deepen it so it survives tone mapping.
  const inkColor = useMemo(
    () => new THREE.Color(ink).multiplyScalar(0.55),
    [ink],
  );
  const bare = useMemo(() => new THREE.Color("#d6d9e0"), []);

  // The numbering machine's readable drum, redrawn when the number changes.
  const counter = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 128;
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const draw = (n: number) => {
      const g = c.getContext("2d")!;
      const grad = g.createLinearGradient(0, 0, 0, 128);
      grad.addColorStop(0, "#0d0f14");
      grad.addColorStop(0.5, "#22262f");
      grad.addColorStop(1, "#0d0f14");
      g.fillStyle = grad;
      g.fillRect(0, 0, 256, 128);
      g.fillStyle = "#eef0f4";
      g.font = `400 88px ${family}`;
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.fillText(String(n).padStart(3, "0"), 128, 70);
      t.needsUpdate = true;
    };
    draw(0);
    return { draw, t, last: 0 };
  }, [family]);
  const counterMats = useMemo(() => {
    const drum = new THREE.MeshPhysicalMaterial({
      map: counter.t,
      metalness: 0.2,
      roughness: 0.35,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
    });
    return [
      mat.darkSteel,
      mat.darkSteel,
      mat.steel,
      mat.darkSteel,
      drum,
      mat.darkSteel,
    ];
  }, [counter, mat]);

  // --- Geometry ----------------------------------------------------------------------
  const geo = useMemo(() => {
    const cache = new Map<string, THREE.BufferGeometry>();
    const box = (w: number, h: number, d: number, r?: number) => {
      const key = [w, h, d, r].map((v) => (v ?? 0).toFixed(3)).join(",");
      if (!cache.has(key)) cache.set(key, rounded(w, h, d, r));
      return cache.get(key)!;
    };
    return {
      box,
      sheet: new THREE.PlaneGeometry(SHEET_W, SHEET_H, 32, 6),
    };
  }, []);
  const sheetRest = useMemo(
    () => Float32Array.from(geo.sheet.attributes.position.array),
    [geo],
  );

  const platen = useRef<THREE.Group>(null);
  const sheet = useRef<THREE.Group>(null);
  const rollers = useRef<THREE.Group>(null);
  const rollerA = useRef<THREE.Mesh>(null);
  const rollerB = useRef<THREE.Mesh>(null);
  const dof = useRef<DofEffect>(null);
  const reported = useRef(false);
  const debossed = useRef(false);

  const tmp = useMemo(
    () => ({
      pos: new THREE.Vector3(),
      target: new THREE.Vector3(),
      focus: new THREE.Vector3(),
      local: new THREE.Matrix4().compose(
        new THREE.Vector3(0, -PLATEN_T / 2 - 0.006, PLATEN_D / 2),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)),
        new THREE.Vector3(1, 1, 1),
      ),
      m: new THREE.Matrix4(),
      aPos: new THREE.Vector3(),
      aQuat: new THREE.Quaternion(),
      aScale: new THREE.Vector3(),
      bPos: new THREE.Vector3(),
      bQuat: new THREE.Quaternion(),
      bScale: new THREE.Vector3(),
      fwd: new THREE.Vector3(),
    }),
    [],
  );

  useFrame((state) => {
    const p = pressState.p;
    const cam = camera as THREE.PerspectiveCamera;
    const t = state.clock.elapsedTime;

    // Camera: keyframed shots, a breath of handheld drift, and a shake on impact.
    shot(p, tmp.pos, tmp.target);
    const hit = span(p, P_CLOSE[1], P_CLOSE[1] + 0.07);
    const shake =
      hit > 0 && hit < 1 ? Math.sin(hit * 40) * (1 - hit) * 0.035 : 0;
    const drift = 0.012 * (1 - span(p, 0.72, 0.8));
    cam.position.set(
      tmp.pos.x + Math.sin(t * 0.7) * drift,
      tmp.pos.y + shake + Math.sin(t * 0.9 + 1) * drift,
      tmp.pos.z,
    );
    cam.lookAt(tmp.target);

    // Depth of field: shallow on the type in the macro shots, opening up for the press
    // and the reveal so the print reads sharp, then softening as the sheet flies in.
    if (dof.current) {
      tmp.focus.copy(tmp.target);
      dof.current.target = tmp.focus;
      dof.current.bokehScale =
        THREE.MathUtils.lerp(5.5, 0, span(p, 0.28, 0.46)) +
        THREE.MathUtils.lerp(0, 2.2, span(p, 0.8, 0.92));
    }

    // Ink rollers: across and back over the forme, then off to the side.
    const pass = span(p, 0, P_INK_END);
    const rx =
      pass < 0.5
        ? THREE.MathUtils.lerp(-4.6, 4.6, easeInOut(pass / 0.5))
        : THREE.MathUtils.lerp(4.6, -5.8, easeInOut((pass - 0.5) / 0.5));
    if (rollers.current) {
      rollers.current.position.x = rx;
      // A hair of bob as the carriage rides over the letters.
      rollers.current.position.y = Math.abs(Math.sin(rx * 6.8)) * 0.006;
    }
    if (rollerA.current) rollerA.current.rotation.y = -rx / 0.17;
    if (rollerB.current) rollerB.current.rotation.y = rx / 0.14;

    // Each letter inks as the rollers first pass it: lacquer-wet, glossy ink.
    const reach = span(p, 0, P_INK_END * 0.5) * 9.2 - 4.6;
    letters.forEach((l, i) => {
      const k = clamp01((reach - l.x + 0.2) / 0.4);
      const m = faces[i];
      m.color.copy(bare).lerp(inkColor, k * 0.94);
      m.roughness = 0.3 - k * 0.2;
      m.metalness = 0.9 - k * 0.85;
      m.clearcoat = k;
    });

    // Platen: open, swing down and press, bounce, then swing open again.
    const close = easeIn(span(p, P_CLOSE[0], P_CLOSE[1]));
    const open = easeOut(span(p, P_OPEN[0], P_OPEN[1]));
    let angle = p < P_OPEN[0] ? OPEN * (1 - close) : OPEN * open;
    if (hit > 0 && hit < 1)
      angle += -0.05 * Math.sin(hit * Math.PI) * (1 - hit);
    if (platen.current) {
      platen.current.rotation.x = angle;
      platen.current.updateMatrixWorld();
    }

    // Numbering machine: counts with the whole press, reaching 100 on impact.
    const n = Math.round(clamp01(p / P_CLOSE[1]) * 100);
    if (n !== counter.last) {
      counter.last = n;
      counter.draw(n);
    }

    // The impression: ink and deboss appear on impact.
    const printed = p >= P_CLOSE[1];
    if (printed !== debossed.current) {
      debossed.current = printed;
      mat.paperBase.bumpMap = printed ? tex.deboss : tex.tooth;
      mat.paperBase.bumpScale = printed ? 2.2 : 0.4;
      mat.paperBase.needsUpdate = true;
    }
    mat.print.opacity = printed ? 1 - span(p, 0.86, 0.97) : 0;

    // The sheet: on the platen until it peels away and flies at the camera.
    const fly = easeInOut(span(p, P_FLY[0], P_FLY[1]));
    if (sheet.current && platen.current) {
      tmp.m.multiplyMatrices(platen.current.matrixWorld, tmp.local);
      tmp.m.decompose(tmp.aPos, tmp.aQuat, tmp.aScale);
      const d = 0.55;
      cam.getWorldDirection(tmp.fwd);
      tmp.bPos.copy(cam.position).addScaledVector(tmp.fwd, d);
      tmp.bQuat.copy(cam.quaternion);
      const visH = 2 * d * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
      const visW = visH * (size.width / size.height);
      tmp.bScale.setScalar(Math.max(visH / SHEET_H, visW / SHEET_W) * 1.6);
      sheet.current.position.lerpVectors(tmp.aPos, tmp.bPos, fly);
      sheet.current.quaternion.slerpQuaternions(tmp.aQuat, tmp.bQuat, fly);
      sheet.current.scale.lerpVectors(tmp.aScale, tmp.bScale, fly);

      // Curl as it peels: lift the free edge, strongest mid-flight.
      const curl = Math.sin(fly * Math.PI) * 0.55;
      const pos = geo.sheet.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = sheetRest[i * 3];
        const y = sheetRest[i * 3 + 1];
        const u = (y + SHEET_H / 2) / SHEET_H;
        pos.setXYZ(i, x, y, curl * u * u + 0.04 * curl * Math.sin(x * 1.3));
      }
      pos.needsUpdate = true;
      geo.sheet.computeVertexNormals();
    }

    if (!reported.current) {
      reported.current = true;
      markPressReady();
    }
  });

  const shadowed = { castShadow: true, receiveShadow: true } as const;

  return (
    <>
      <color attach="background" args={[ink]} />
      <hemisphereLight args={["#ffffff", "#1a1f33", 0.35]} />
      {/* Key light: soft shadows from high front-left. */}
      <directionalLight
        position={[-4.5, 8, 5.5]}
        intensity={2.6}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.025}
        shadow-camera-left={-5.5}
        shadow-camera-right={5.5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-camera-near={1}
        shadow-camera-far={25}
      />
      {/* Rim light from behind, to separate the press from the background. */}
      <directionalLight position={[3, 4, -6]} intensity={1.1} color="#dfe6ff" />
      {/* A warm work lamp over the bed. */}
      <spotLight
        position={[0, 6, 3]}
        angle={0.6}
        penumbra={0.9}
        intensity={18}
        distance={16}
        color="#fff6e8"
      />

      {/* Ground: only the shadow shows, so the background stays the page's ink. */}
      <mesh rotation-x={-Math.PI / 2} position-y={-0.37} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <shadowMaterial opacity={0.45} />
      </mesh>

      {/* Bed. */}
      <mesh
        geometry={geo.box(BED_W, 0.36, BED_D, 0.05)}
        material={mat.darkSteel}
        position={[0, -0.18, 0]}
        {...shadowed}
      />

      {/* Chase: an iron frame around the forme. */}
      {[-1, 1].map((s) => (
        <mesh
          key={`cz${s}`}
          geometry={geo.box(chaseW, 0.3, 0.14, 0.03)}
          material={mat.steel}
          position={[chaseCx, 0.15, (s * chaseD) / 2]}
          {...shadowed}
        />
      ))}
      {[chaseX0, chaseX1].map((x, i) => (
        <mesh
          key={`cx${i}`}
          geometry={geo.box(0.14, 0.3, chaseD, 0.03)}
          material={mat.steel}
          position={[x, 0.15, 0]}
          {...shadowed}
        />
      ))}
      {/* Furniture: wooden blocks filling the chase around the type. */}
      {[-1, 1].map((s) => (
        <mesh
          key={`fz${s}`}
          geometry={geo.box(chaseW - 0.32, TYPE_H * 0.8, furnD, 0.02)}
          material={mat.wood}
          position={[
            chaseCx,
            (TYPE_H * 0.8) / 2,
            s * (TYPE_D / 2 + furnD / 2 + 0.01),
          ]}
          {...shadowed}
        />
      ))}
      <mesh
        geometry={geo.box(
          formeStart - chaseX0 - 0.16,
          TYPE_H * 0.8,
          TYPE_D,
          0.02,
        )}
        material={mat.wood}
        position={[(chaseX0 + formeStart) / 2 + 0.03, (TYPE_H * 0.8) / 2, 0]}
        {...shadowed}
      />
      {/* Quoins: the steel wedges that lock it all tight. */}
      {[-1, 1].map((s) => (
        <mesh
          key={`q${s}`}
          geometry={geo.box(0.5, 0.16, 0.12, 0.02)}
          material={mat.steel}
          position={[chaseX1 - 0.35, 0.08, s * 0.55]}
          rotation-y={s * 0.12}
          {...shadowed}
        />
      ))}

      {/* The forme: the name in mirrored movable type. */}
      {letters.map((l, i) => {
        const h = l.ch === " " ? TYPE_H * 0.7 : TYPE_H;
        return (
          <group key={i}>
            <mesh
              geometry={geo.box(l.w - 0.02, h, TYPE_D, 0.018)}
              material={mat.shoulder}
              position={[l.x, h / 2, 0]}
              {...shadowed}
            />
            {/* The raised face: the only part that takes ink. */}
            {l.ch !== " " && (
              <mesh
                position={[l.x, h + 0.003, 0]}
                rotation-x={-Math.PI / 2}
                material={faces[i]}
                receiveShadow
              >
                <planeGeometry args={[l.w - 0.04, TYPE_D - 0.06]} />
              </mesh>
            )}
          </group>
        );
      })}
      {/* Numbering machine at the end of the forme, drum facing you. */}
      <mesh
        geometry={geo.box(0.56, TYPE_H, TYPE_D, 0.02)}
        material={counterMats}
        position={[counterX, TYPE_H / 2, 0]}
        {...shadowed}
      />

      {/* Ink rollers on their carriage. */}
      <group ref={rollers} position={[-4.6, 0, 0]}>
        <group position-y={TYPE_H + 0.17} rotation-x={Math.PI / 2}>
          <mesh ref={rollerA} material={mat.roller} castShadow>
            <cylinderGeometry args={[0.17, 0.17, TYPE_D + 0.5, 48]} />
          </mesh>
          {/* Steel cores showing at the ends. */}
          {[-1, 1].map((s) => (
            <mesh
              key={s}
              material={mat.steel}
              position-y={s * ((TYPE_D + 0.5) / 2 + 0.06)}
              castShadow
            >
              <cylinderGeometry args={[0.05, 0.05, 0.12, 20]} />
            </mesh>
          ))}
        </group>
        <group position={[0.34, TYPE_H + 0.42, 0]} rotation-x={Math.PI / 2}>
          <mesh ref={rollerB} material={mat.steel} castShadow>
            <cylinderGeometry args={[0.14, 0.14, TYPE_D + 0.4, 40]} />
          </mesh>
        </group>
        <mesh
          geometry={geo.box(0.72, 0.64, 0.06, 0.02)}
          material={mat.darkSteel}
          position={[0.17, TYPE_H + 0.3, -(TYPE_D / 2 + 0.32)]}
          castShadow
        />
      </group>

      {/* Platen, hinged at the back of the bed. */}
      <group
        ref={platen}
        position={[0, TYPE_H + PLATEN_T / 2, HINGE_Z]}
        rotation-x={OPEN}
      >
        <mesh
          geometry={geo.box(PLATEN_W, PLATEN_T, PLATEN_D, 0.05)}
          material={mat.castIron}
          position={[0, 0, PLATEN_D / 2]}
          {...shadowed}
        />
        {[-2, -1, 0, 1, 2].map((k) => (
          <mesh
            key={k}
            geometry={geo.box(0.1, 0.16, PLATEN_D * 0.9, 0.03)}
            material={mat.castIron}
            position={[k * 1.3, PLATEN_T / 2 + 0.07, PLATEN_D / 2]}
            castShadow
          />
        ))}
        {/* Gripper bar along the free edge. */}
        <mesh
          geometry={geo.box(PLATEN_W - 0.3, 0.06, 0.08, 0.02)}
          material={mat.steel}
          position={[0, -PLATEN_T / 2 + 0.01, PLATEN_D - 0.08]}
          castShadow
        />
      </group>
      {/* Hinge drum. */}
      <group
        position={[0, TYPE_H + PLATEN_T / 2, HINGE_Z]}
        rotation-z={Math.PI / 2}
      >
        <mesh material={mat.steel} castShadow>
          <cylinderGeometry args={[0.14, 0.14, PLATEN_W + 0.3, 40]} />
        </mesh>
      </group>

      {/* The sheet (paper and impression), posed every frame. */}
      <group ref={sheet}>
        <mesh
          geometry={geo.sheet}
          material={mat.paperBase}
          castShadow
          receiveShadow
        />
        <mesh geometry={geo.sheet} material={mat.print} />
      </group>

      <EffectComposer multisampling={4}>
        <DepthOfField
          ref={dof as never}
          focalLength={0.02}
          bokehScale={5}
          height={540}
        />
        <Vignette
          offset={0.28}
          darkness={0.55}
          blendFunction={BlendFunction.NORMAL}
        />
        <Noise
          opacity={0.045}
          premultiply
          blendFunction={BlendFunction.SOFT_LIGHT}
        />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </>
  );
}

export default function PressScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      shadows="soft"
      camera={{ position: [-2.7, 1.45, 2.35], fov: 32, near: 0.05, far: 60 }}
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.NoToneMapping; // the composer tone-maps
      }}
    >
      <Press />
    </Canvas>
  );
}
