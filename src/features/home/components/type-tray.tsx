"use client";

import {
  Canvas,
  type ThreeEvent,
  useFrame,
  useThree,
} from "@react-three/fiber";
import Matter from "matter-js";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { CAPABILITY_WORDS } from "../data";
import { gsap } from "../lib/gsap";
import { play } from "../lib/sound";

/**
 * Skills as movable type. Each word is a 3D block of type with its face toward you;
 * they drop into a printer's tray, collide and settle under 2D physics (the tray is a
 * plane, as a real one is), and can be grabbed and tossed. "Set the type" slides them
 * back into neat rows. Loaded lazily, desktop only; phones keep the marquee.
 */

const S = 100; // physics units per world unit
const DEPTH = 0.55;
const H = 0.82;
// Headroom above the visible tray, and the fastest a block may travel (units/step).
const CEIL = 4.2;
const MAX_SPEED = 38;

const widthOf = (word: string) => 0.7 + word.length * 0.34;

type Block = { word: string; w: number; body: Matter.Body };

function faceTexture(word: string, ink: string, paper: string, family: string) {
  const w = widthOf(word);
  const c = document.createElement("canvas");
  c.height = 192;
  c.width = Math.round((192 * w) / H);
  const g = c.getContext("2d")!;
  g.fillStyle = ink;
  g.fillRect(0, 0, c.width, c.height);
  // A hairline inset, like the shoulder of a piece of type.
  g.strokeStyle = paper;
  g.globalAlpha = 0.35;
  g.lineWidth = 3;
  g.strokeRect(10, 10, c.width - 20, c.height - 20);
  g.globalAlpha = 1;
  g.fillStyle = paper;
  g.font = `400 ${Math.round(c.height * 0.5)}px ${family}`;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(word.toUpperCase(), c.width / 2, c.height * 0.54);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/** Grid slots for "Set the type": centred rows that fit the tray width. */
function gridSlots(blocks: Block[], trayW: number, floorY: number) {
  const gap = 0.18;
  const rows: Block[][] = [[]];
  let x = 0;
  for (const b of blocks) {
    if (x + b.w > trayW - 0.6 && rows.at(-1)!.length) {
      rows.push([]);
      x = 0;
    }
    rows.at(-1)!.push(b);
    x += b.w + gap;
  }
  const slots = new Map<Block, { x: number; y: number }>();
  rows.forEach((row, r) => {
    const total = row.reduce((s, b) => s + b.w, 0) + gap * (row.length - 1);
    let cx = -total / 2;
    const y = floorY + H / 2 + 0.02 + (rows.length - 1 - r) * (H + gap);
    for (const b of row) {
      slots.set(b, { x: cx + b.w / 2, y });
      cx += b.w + gap;
    }
  });
  return slots;
}

function Tray({ dropped, tidyTick }: { dropped: boolean; tidyTick: number }) {
  const { viewport, camera } = useThree();
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const [blocks, setBlocks] = useState<Block[]>([]);
  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const engine = useMemo(
    () => Matter.Engine.create({ enableSleeping: true }),
    [],
  );
  const drag = useRef<{ c: Matter.Constraint; plane: THREE.Plane } | null>(
    null,
  );

  // World bounds at the z = 0 plane.
  const vw = viewport.width;
  const vh = viewport.height;
  const floorY = -vh / 2 + 0.25;

  // Walls and the type itself.
  useEffect(() => {
    const world = engine.world;
    const wall = (x: number, y: number, w: number, h: number) =>
      Matter.Bodies.rectangle(x * S, -y * S, w * S, h * S, { isStatic: true });
    Matter.Composite.add(world, [
      wall(0, floorY - 1, vw * 3, 2), // floor
      wall(-vw / 2 - 1, 0, 2, vh * 6), // left
      wall(vw / 2 + 1, 0, 2, vh * 6), // right
      // Ceiling: thrown type stays in the case.
      wall(0, vh / 2 + CEIL + 1, vw * 3, 2),
    ]);
    const made = CAPABILITY_WORDS.map((word, i) => {
      const w = widthOf(word);
      const x = (Math.random() - 0.5) * (vw - w - 1);
      // Staggered just above the top, out of view and under the ceiling.
      const y = vh / 2 + 1.1 + (i % 3) * 1.05;
      const body = Matter.Bodies.rectangle(x * S, -y * S, w * S, H * S, {
        angle: (Math.random() - 0.5) * 0.8,
        friction: 0.6,
        frictionAir: 0.012,
        restitution: 0.18,
        density: 0.0024,
      });
      Matter.Body.setStatic(body, true); // held until the section comes into view
      return { word, w, body };
    });
    Matter.Composite.add(
      world,
      made.map((b) => b.body),
    );
    setBlocks(made);

    // A soft knock when type lands hard, if sound is on.
    let last = 0;
    Matter.Events.on(engine, "collisionStart", (e) => {
      const hard = e.pairs.some(
        (p) =>
          Math.abs(p.bodyA.velocity.y - p.bodyB.velocity.y) > 6 ||
          Math.abs(p.bodyA.velocity.x - p.bodyB.velocity.x) > 6,
      );
      if (hard && performance.now() - last > 70) {
        last = performance.now();
        play("tick");
      }
    });

    return () => {
      Matter.Events.off(engine, "collisionStart");
      Matter.Composite.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, [engine, vw, vh, floorY]);

  // Release the type when the tray scrolls into view.
  useEffect(() => {
    if (!dropped) return;
    blocks.forEach((b, i) =>
      window.setTimeout(() => Matter.Body.setStatic(b.body, false), i * 90),
    );
  }, [dropped, blocks]);

  // "Set the type": slide every block into neat rows, then hold them there.
  useEffect(() => {
    if (!tidyTick || !blocks.length) return;
    const slots = gridSlots(blocks, vw, floorY);
    blocks.forEach((b, i) => {
      const to = slots.get(b)!;
      const from = {
        x: b.body.position.x / S,
        y: -b.body.position.y / S,
        a: b.body.angle,
      };
      Matter.Body.setStatic(b.body, true);
      gsap.to(from, {
        x: to.x,
        y: to.y,
        a: 0,
        duration: 0.9,
        delay: i * 0.04,
        ease: "expo.inOut",
        onUpdate: () => {
          Matter.Body.setPosition(b.body, { x: from.x * S, y: -from.y * S });
          Matter.Body.setAngle(b.body, from.a);
        },
      });
    });
  }, [tidyTick, blocks, vw, floorY]);

  const ink = dark ? "#8b9dff" : "#1d3bd1";
  const paper = dark ? "#0c0e16" : "#f3efe6";
  const family = useMemo(
    () =>
      typeof document === "undefined"
        ? "sans-serif"
        : getComputedStyle(document.querySelector(".home") ?? document.body)
            .fontFamily,
    [],
  );
  const materials = useMemo(() => {
    const side = new THREE.MeshStandardMaterial({
      color: new THREE.Color(ink).multiplyScalar(0.72),
      roughness: 0.45,
      metalness: 0.35,
    });
    return blocks.map((b) => {
      const face = new THREE.MeshStandardMaterial({
        map: faceTexture(b.word, ink, paper, family),
        roughness: 0.55,
        metalness: 0.1,
      });
      // Box faces: +x, -x, +y, -y, +z (toward you), -z.
      return [side, side, side, side, face, side];
    });
  }, [blocks, ink, paper, family]);

  useFrame((_, delta) => {
    Matter.Engine.update(engine, Math.min(delta, 1 / 30) * 1000);
    // Speed limit, so a hard flick tosses type rather than firing it.
    for (const b of blocks) {
      const v = b.body.velocity;
      const speed = Math.hypot(v.x, v.y);
      if (speed > MAX_SPEED)
        Matter.Body.setVelocity(b.body, {
          x: (v.x / speed) * MAX_SPEED,
          y: (v.y / speed) * MAX_SPEED,
        });
      if (Math.abs(b.body.angularVelocity) > 0.35)
        Matter.Body.setAngularVelocity(
          b.body,
          Math.sign(b.body.angularVelocity) * 0.35,
        );
    }
    blocks.forEach((b, i) => {
      const m = meshes.current[i];
      if (!m) return;
      m.position.set(b.body.position.x / S, -b.body.position.y / S, 0);
      m.rotation.z = -b.body.angle;
    });
  });

  // Grab and toss: a spring from the grabbed point on the block to the pointer.
  const grab = (b: Block) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    (e.target as Element | null)?.setPointerCapture?.(e.pointerId);
    Matter.Body.setStatic(b.body, false);
    const px = e.point.x * S;
    const py = -e.point.y * S;
    const c = Matter.Constraint.create({
      bodyA: b.body,
      pointA: Matter.Vector.rotate(
        { x: px - b.body.position.x, y: py - b.body.position.y },
        -b.body.angle,
      ),
      pointB: { x: px, y: py },
      stiffness: 0.08,
      damping: 0.1,
      length: 0,
    });
    Matter.Composite.add(engine.world, c);
    drag.current = {
      c,
      plane: new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
    };
    document.body.style.cursor = "grabbing";
    play("click");
  };

  useEffect(() => {
    const ray = new THREE.Raycaster();
    const hit = new THREE.Vector3();
    const onMove = (e: PointerEvent) => {
      const d = drag.current;
      const canvas = document.querySelector<HTMLCanvasElement>(
        "[data-type-tray] canvas",
      );
      if (!d || !canvas) return;
      const r = canvas.getBoundingClientRect();
      ray.setFromCamera(
        new THREE.Vector2(
          ((e.clientX - r.left) / r.width) * 2 - 1,
          -((e.clientY - r.top) / r.height) * 2 + 1,
        ),
        camera,
      );
      if (ray.ray.intersectPlane(d.plane, hit))
        d.c.pointB = { x: hit.x * S, y: -hit.y * S };
    };
    const onUp = () => {
      if (!drag.current) return;
      Matter.Composite.remove(engine.world, drag.current.c);
      drag.current = null;
      document.body.style.cursor = "";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [camera, engine]);

  return (
    <>
      <ambientLight intensity={dark ? 0.5 : 0.9} />
      <directionalLight position={[-4, 6, 8]} intensity={dark ? 1.6 : 1.4} />
      <directionalLight position={[6, -2, 4]} intensity={0.35} />
      {blocks.map((b, i) => (
        <mesh
          key={b.word}
          ref={(m) => void (meshes.current[i] = m)}
          material={materials[i]}
          position={[b.body.position.x / S, -b.body.position.y / S, 0]}
          onPointerDown={grab(b)}
          onPointerOver={() => (document.body.style.cursor = "grab")}
          onPointerOut={() =>
            !drag.current && (document.body.style.cursor = "")
          }
        >
          <boxGeometry args={[b.w, H, DEPTH]} />
        </mesh>
      ))}
    </>
  );
}

export default function TypeTray() {
  const ref = useRef<HTMLDivElement>(null);
  const [dropped, setDropped] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tidyTick, setTidyTick] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Drop the type once a third of the tray is on screen; run the scene only while
    // any of it is, so physics and rendering stop when you scroll away.
    const io = new IntersectionObserver(
      ([e]) => {
        setVisible(e.isIntersecting);
        if (e.intersectionRatio >= 0.35) setDropped(true);
      },
      { threshold: [0, 0.35] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-type-tray
      className="relative h-[clamp(300px,42vh,440px)] border-y border-ink"
    >
      <Canvas
        frameloop={visible ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.6, 9], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      >
        <Tray dropped={dropped} tidyTick={tidyTick} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-3 text-xs uppercase">
        <span>The type case /drag, toss/</span>
        <button
          type="button"
          onClick={() => setTidyTick((t) => t + 1)}
          className="group pointer-events-auto cursor-pointer rounded-full border border-ink px-3 py-1 uppercase"
        >
          Set the type
        </button>
      </div>
    </div>
  );
}
