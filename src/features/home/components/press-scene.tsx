"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

import { PROFILE } from "../data";
import { markPressReady, pressState } from "../lib/press";

/**
 * The first-visit loader as a platen press, driven entirely by pressState.p (0..1):
 *
 *   0.00 - 0.30  Macro on the forme: the name set in mirrored movable type. Ink rollers
 *                run over it and every letter turns wet and glossy as they pass.
 *   0.32 - 0.50  The camera pulls back; the hinged platen swings down and presses.
 *   0.50 - 0.57  Impact: a small bounce and shake; the numbering machine (counting
 *                000 -> 100 all along) stamps its number.
 *   0.58 - 0.72  The platen swings open towards you, carrying the printed sheet.
 *   0.74 - 1.00  The sheet peels away, curls, and flies at the camera until paper fills
 *                the screen, which is where the hero (same paper) takes over.
 *
 * Materials are procedural: studio-environment reflections on brushed steel, paper with
 * fibre, soft contact shadows. No image files.
 */

// Forme (type) and press dimensions, in world units. Bed top is y = 0.
const NAME = PROFILE.name.toUpperCase();
const TYPE_H = 0.42;
const TYPE_D = 0.6;
const LETTER_W = 0.46;
const SPACE_W = 0.26;
const BED_W = 7.2;
const BED_D = 2.9;
const PLATEN_W = 6.6;
const PLATEN_D = 2.6;
const PLATEN_T = 0.22;
const HINGE_Z = -BED_D / 2 + 0.06;
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

/**
 * A letter's raised face, as an alpha mask: white where the glyph stands proud of the
 * shoulder. Mirrored, because type is cast in reverse.
 */
function letterTexture(ch: string, family: string) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000000";
  g.fillRect(0, 0, 128, 128);
  g.translate(128, 0);
  g.scale(-1, 1);
  g.fillStyle = "#ffffff";
  g.font = `500 108px ${family}`;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(ch, 64, 70);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/** Paper with fibre: used as the sheet's colour map and bump map. */
function paperTexture(paper: string) {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = paper;
  g.fillRect(0, 0, 512, 512);
  const img = g.getImageData(0, 0, 512, 512);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 10;
    img.data[i] += n;
    img.data[i + 1] += n;
    img.data[i + 2] += n;
  }
  g.putImageData(img, 0, 0);
  g.globalAlpha = 0.07;
  g.strokeStyle = "#000";
  for (let i = 0; i < 260; i++) {
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
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 1.2);
  return t;
}

/** The impression: the name, an imprint line, and the numbering machine's stamp. */
function printTexture(ink: string, family: string) {
  const c = document.createElement("canvas");
  c.width = 2048;
  c.height = Math.round((2048 * SHEET_H) / SHEET_W);
  const g = c.getContext("2d")!;
  g.fillStyle = ink;
  g.textBaseline = "middle";
  let size = 400;
  g.font = `400 ${size}px ${family}`;
  size *= (c.width * 0.82) / g.measureText(NAME).width;
  g.font = `400 ${size}px ${family}`;
  // A touch of ink spread at the edges, like an impression rather than a screen font.
  g.shadowColor = ink;
  g.shadowBlur = 3;
  g.fillText(NAME, c.width * 0.09, c.height * 0.5);
  g.shadowBlur = 0;
  g.font = `400 ${Math.round(size * 0.1)}px ${family}`;
  g.fillText(
    `${PROFILE.tagline.toUpperCase()}   ·   IMPRESSION NO. 001`,
    c.width * 0.09,
    c.height * 0.86,
  );
  g.font = `500 ${Math.round(size * 0.14)}px ${family}`;
  g.textAlign = "right";
  g.fillText("No. 100", c.width * 0.93, c.height * 0.14);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function blobTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grad.addColorStop(0, "rgba(0,0,0,0.6)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// Camera keyframes: [p, position, target].
const SHOTS: [number, THREE.Vector3, THREE.Vector3][] = [
  [0.0, new THREE.Vector3(-2.7, 1.45, 2.35), new THREE.Vector3(-1.1, 0.3, 0)],
  [0.26, new THREE.Vector3(3.3, 1.45, 2.4), new THREE.Vector3(2.0, 0.28, 0)],
  [0.5, new THREE.Vector3(0, 3.0, 5.2), new THREE.Vector3(0, 0.45, 0)],
  [0.7, new THREE.Vector3(0, 2.3, 5.8), new THREE.Vector3(0, 1.25, -0.9)],
  [1.0, new THREE.Vector3(0, 2.3, 5.8), new THREE.Vector3(0, 1.25, -0.9)],
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

function Press() {
  const { camera, scene, gl, size } = useThree();
  const ink = cssVar("--ink", "#1d3bd1");
  const paper = cssVar("--paper", "#f3efe6");

  // Studio reflections for the metal.
  useMemo(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
  }, [gl, scene]);

  const family = useMemo(() => fontFamily(), []);

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
  const formeEnd = letters.at(-1)!.x + LETTER_W / 2;

  const steel = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#8a909e",
        metalness: 0.9,
        roughness: 0.32,
      }),
    [],
  );
  // The type's shoulder: darker than the face, so the letters stand out.
  const shoulder = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#5d636f",
        metalness: 0.85,
        roughness: 0.4,
      }),
    [],
  );
  const darkSteel = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#2b2f3a",
        metalness: 0.85,
        roughness: 0.42,
      }),
    [],
  );
  const castIron = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(ink).multiplyScalar(0.42),
        metalness: 0.65,
        roughness: 0.48,
      }),
    [ink],
  );
  const rollerInk = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(ink).multiplyScalar(0.55),
        metalness: 0.2,
        roughness: 0.12,
      }),
    [ink],
  );
  // One face material per letter, so each can take ink as the rollers pass.
  const faces = useMemo(
    () =>
      letters.map(
        (l) =>
          new THREE.MeshStandardMaterial({
            alphaMap: l.ch === " " ? null : letterTexture(l.ch, family),
            transparent: true,
            color: "#d9dce3",
            metalness: 0.8,
            roughness: 0.35,
            depthWrite: false,
          }),
      ),
    [letters, family],
  );
  const inkColor = useMemo(() => new THREE.Color(ink), [ink]);
  const bare = useMemo(() => new THREE.Color("#d9dce3"), []);

  // The numbering machine's readable drum, redrawn when the number changes.
  const counter = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 128;
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const draw = (n: number) => {
      const g = c.getContext("2d")!;
      g.fillStyle = "#1b1e26";
      g.fillRect(0, 0, 256, 128);
      g.fillStyle = "#eceef3";
      g.font = `400 92px ${family}`;
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.fillText(String(n).padStart(3, "0"), 128, 70);
      t.needsUpdate = true;
    };
    draw(0);
    return { draw, t, last: 0 };
  }, [family]);
  const counterMats = useMemo(() => {
    const drum = new THREE.MeshStandardMaterial({
      map: counter.t,
      metalness: 0.3,
      roughness: 0.4,
    });
    return [darkSteel, darkSteel, darkSteel, darkSteel, drum, darkSteel];
  }, [counter, darkSteel]);

  const paperMap = useMemo(() => paperTexture(paper), [paper]);
  const sheetMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: paperMap,
        bumpMap: paperMap,
        bumpScale: 0.6,
        roughness: 0.95,
        metalness: 0,
        side: THREE.DoubleSide,
      }),
    [paperMap],
  );
  const printMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: printTexture(ink, family),
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [ink, family],
  );
  const blob = useMemo(() => blobTexture(), []);

  // Sheet geometry with enough segments to curl.
  const sheetGeo = useMemo(
    () => new THREE.PlaneGeometry(SHEET_W, SHEET_H, 28, 4),
    [],
  );
  const sheetRest = useMemo(
    () => Float32Array.from(sheetGeo.attributes.position.array),
    [sheetGeo],
  );

  const platen = useRef<THREE.Group>(null);
  const sheet = useRef<THREE.Group>(null);
  const rollers = useRef<THREE.Group>(null);
  const rollerA = useRef<THREE.Mesh>(null);
  const rollerB = useRef<THREE.Mesh>(null);
  const shade = useRef<THREE.Mesh>(null);
  const reported = useRef(false);

  // Scratch objects, reused every frame.
  const tmp = useMemo(
    () => ({
      pos: new THREE.Vector3(),
      target: new THREE.Vector3(),
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

  useFrame(() => {
    const p = pressState.p;
    const cam = camera as THREE.PerspectiveCamera;

    // Camera, with a small shake on impact.
    shot(p, tmp.pos, tmp.target);
    const hit = span(p, P_CLOSE[1], P_CLOSE[1] + 0.07);
    const shake =
      hit > 0 && hit < 1 ? Math.sin(hit * 40) * (1 - hit) * 0.035 : 0;
    cam.position.set(tmp.pos.x, tmp.pos.y + shake, tmp.pos.z);
    cam.lookAt(tmp.target);

    // Ink rollers: across and back over the forme, then off to the side.
    const pass = span(p, 0, P_INK_END);
    const rx =
      pass < 0.5
        ? THREE.MathUtils.lerp(-4.4, 4.4, easeInOut(pass / 0.5))
        : THREE.MathUtils.lerp(4.4, -5.2, easeInOut((pass - 0.5) / 0.5));
    if (rollers.current) rollers.current.position.x = rx;
    if (rollerA.current) rollerA.current.rotation.y = -rx / 0.17;
    if (rollerB.current) rollerB.current.rotation.y = rx / 0.14;

    // Each letter inks as the rollers first pass it: darker, wetter, glossier.
    letters.forEach((l, i) => {
      const reach = span(p, 0, P_INK_END * 0.5) * 8.8 - 4.4;
      const k = clamp01((reach - l.x + 0.2) / 0.4);
      const m = faces[i];
      m.color.copy(bare).lerp(inkColor, k * 0.92);
      m.roughness = 0.35 - k * 0.28;
      m.metalness = 0.8 - k * 0.7;
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
    // Contact shadow on the forme as the platen comes down.
    if (shade.current)
      (shade.current.material as THREE.MeshBasicMaterial).opacity =
        0.55 * (1 - Math.abs(angle / OPEN));

    // Numbering machine: counts with the whole press, and stamps 100 on impact.
    const n = Math.round(clamp01(p / P_CLOSE[1]) * 100);
    if (n !== counter.last) {
      counter.last = n;
      counter.draw(n);
    }

    // The sheet: on the platen until it peels away and flies at the camera.
    const fly = easeInOut(span(p, P_FLY[0], P_FLY[1]));
    if (sheet.current && platen.current) {
      tmp.m.multiplyMatrices(platen.current.matrixWorld, tmp.local);
      tmp.m.decompose(tmp.aPos, tmp.aQuat, tmp.aScale);
      // Target: square to the camera, near enough that paper covers the screen.
      const d = 0.55;
      cam.getWorldDirection(tmp.fwd);
      tmp.bPos.copy(cam.position).addScaledVector(tmp.fwd, d);
      tmp.bQuat.copy(cam.quaternion);
      const visH = 2 * d * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
      const visW = visH * (size.width / size.height);
      const cover = Math.max(visH / SHEET_H, visW / SHEET_W) * 1.6;
      tmp.bScale.setScalar(cover);
      sheet.current.position.lerpVectors(tmp.aPos, tmp.bPos, fly);
      sheet.current.quaternion.slerpQuaternions(tmp.aQuat, tmp.bQuat, fly);
      sheet.current.scale.lerpVectors(tmp.aScale, tmp.bScale, fly);

      // Curl as it peels: lift the free edge, strongest mid-flight.
      const curl = Math.sin(fly * Math.PI) * 0.55;
      const pos = sheetGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = sheetRest[i * 3];
        const y = sheetRest[i * 3 + 1];
        const u = (y + SHEET_H / 2) / SHEET_H; // 0 at the hinge side
        pos.setXYZ(i, x, y, curl * u * u + 0.04 * curl * Math.sin(x * 1.3));
      }
      pos.needsUpdate = true;
      sheetGeo.computeVertexNormals();
    }
    // The impression appears on impact, and fades as the sheet fills the screen.
    printMat.opacity = p < P_CLOSE[1] ? 0 : 1 - span(p, 0.86, 0.97);

    if (!reported.current) {
      reported.current = true;
      markPressReady();
    }
  });

  return (
    <>
      <hemisphereLight args={["#ffffff", "#2a2f45", 0.6]} />
      <directionalLight position={[-4, 7, 5]} intensity={2.2} />
      <directionalLight position={[5, 3, -4]} intensity={0.6} />

      {/* Bed, with a soft shadow beneath it. */}
      <mesh material={darkSteel} position={[0, -0.18, 0]}>
        <boxGeometry args={[BED_W, 0.36, BED_D]} />
      </mesh>
      <mesh
        rotation-x={-Math.PI / 2}
        position-y={-0.38}
        scale={[BED_W * 1.4, BED_D * 1.8, 1]}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={blob} transparent depthWrite={false} />
      </mesh>
      {/* Chase rails along the forme. */}
      {[-1, 1].map((s) => (
        <mesh
          key={s}
          material={steel}
          position={[0, 0.08, s * (TYPE_D / 2 + 0.12)]}
        >
          <boxGeometry args={[BED_W - 0.6, 0.16, 0.1]} />
        </mesh>
      ))}

      {/* The forme: the name in mirrored movable type. */}
      {letters.map((l, i) => {
        const h = l.ch === " " ? TYPE_H * 0.7 : TYPE_H;
        return (
          <group key={i}>
            <mesh position={[l.x, h / 2, 0]} material={shoulder}>
              <boxGeometry args={[l.w - 0.02, h, TYPE_D]} />
            </mesh>
            {/* The raised face: the only part that takes ink. */}
            {l.ch !== " " && (
              <mesh
                position={[l.x, h + 0.003, 0]}
                rotation-x={-Math.PI / 2}
                material={faces[i]}
              >
                <planeGeometry args={[l.w - 0.04, TYPE_D - 0.06]} />
              </mesh>
            )}
          </group>
        );
      })}
      {/* Numbering machine at the end of the forme, drum facing you. */}
      <mesh position={[formeEnd + 0.38, TYPE_H / 2, 0]} material={counterMats}>
        <boxGeometry args={[0.56, TYPE_H, TYPE_D]} />
      </mesh>
      {/* Contact shadow over the forme as the platen closes. */}
      <mesh ref={shade} rotation-x={-Math.PI / 2} position-y={TYPE_H + 0.004}>
        <planeGeometry args={[PLATEN_W, TYPE_D + 0.3]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* Ink rollers on their carriage. */}
      <group ref={rollers} position={[-4.4, 0, 0]}>
        <group position-y={TYPE_H + 0.17} rotation-x={Math.PI / 2}>
          <mesh ref={rollerA} material={rollerInk}>
            <cylinderGeometry args={[0.17, 0.17, TYPE_D + 0.5, 40]} />
          </mesh>
        </group>
        <group position={[0.34, TYPE_H + 0.42, 0]} rotation-x={Math.PI / 2}>
          <mesh ref={rollerB} material={steel}>
            <cylinderGeometry args={[0.14, 0.14, TYPE_D + 0.4, 32]} />
          </mesh>
        </group>
        <mesh
          material={darkSteel}
          position={[0.17, TYPE_H + 0.3, -(TYPE_D / 2 + 0.3)]}
        >
          <boxGeometry args={[0.7, 0.62, 0.06]} />
        </mesh>
      </group>

      {/* Platen, hinged at the back of the bed. */}
      <group
        ref={platen}
        position={[0, TYPE_H + PLATEN_T / 2, HINGE_Z]}
        rotation-x={OPEN}
      >
        <mesh material={castIron} position={[0, 0, PLATEN_D / 2]}>
          <boxGeometry args={[PLATEN_W, PLATEN_T, PLATEN_D]} />
        </mesh>
        {/* Ribs on the back of the platen. */}
        {[-2, -1, 0, 1, 2].map((k) => (
          <mesh
            key={k}
            material={castIron}
            position={[k * 1.25, PLATEN_T / 2 + 0.07, PLATEN_D / 2]}
          >
            <boxGeometry args={[0.1, 0.14, PLATEN_D * 0.9]} />
          </mesh>
        ))}
      </group>
      {/* Hinge drum. */}
      <group
        position={[0, TYPE_H + PLATEN_T / 2, HINGE_Z]}
        rotation-z={Math.PI / 2}
      >
        <mesh material={steel}>
          <cylinderGeometry args={[0.13, 0.13, PLATEN_W + 0.3, 32]} />
        </mesh>
      </group>

      {/* The sheet (paper and impression), posed every frame. */}
      <group ref={sheet}>
        <mesh geometry={sheetGeo} material={sheetMat} />
        <mesh geometry={sheetGeo} material={printMat} position-z={0.002} />
      </group>
    </>
  );
}

export default function PressScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [-2.7, 1.45, 2.35], fov: 32, near: 0.05, far: 60 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.localClippingEnabled = false;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <Press />
    </Canvas>
  );
}
