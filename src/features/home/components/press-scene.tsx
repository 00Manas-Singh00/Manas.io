"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { PROFILE } from "../data";
import { markPressReady, pressState } from "../lib/press";

/**
 * The loader as a printing press. A sheet lies on the bed; an inked impression roller in
 * its carriage, with two ink rollers turning above it, rolls across and prints the name
 * onto the sheet as it passes (the print is clipped to just behind the roller). Driven
 * entirely by pressState.p, which the loader's timeline tweens.
 */

const SHEET_W = 6.2;
const SHEET_D = 1.9;
const R = 0.34; // impression roller radius
const LEN = 2.5; // roller length (along z)
const START = -SHEET_W / 2 - 0.9;
const END = SHEET_W / 2 + 1.8;

function cssColor(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  return (
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() ||
    fallback
  );
}

function printTexture(ink: string) {
  const c = document.createElement("canvas");
  c.width = 2048;
  c.height = Math.round((2048 * SHEET_D) / SHEET_W);
  const g = c.getContext("2d")!;
  const family = getComputedStyle(
    document.querySelector(".home") ?? document.body,
  ).fontFamily;
  g.fillStyle = ink;
  g.textBaseline = "middle";
  // The name, fitted to the sheet's measure, with a small imprint line below.
  let size = 400;
  g.font = `300 ${size}px ${family}`;
  const name = PROFILE.name.toUpperCase();
  size *= (c.width * 0.86) / g.measureText(name).width;
  g.font = `300 ${size}px ${family}`;
  g.fillText(name, c.width * 0.07, c.height * 0.46);
  g.font = `400 ${Math.round(size * 0.11)}px ${family}`;
  g.fillText(
    `${PROFILE.tagline.toUpperCase()}   ·   IMPRESSION NO. 001`,
    c.width * 0.07,
    c.height * 0.86,
  );
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function shadowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grad.addColorStop(0, "rgba(0,0,0,0.55)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function Press() {
  const { viewport } = useThree();
  const carriage = useRef<THREE.Group>(null);
  const roller = useRef<THREE.Mesh>(null);
  const feedA = useRef<THREE.Mesh>(null);
  const feedB = useRef<THREE.Mesh>(null);
  const reported = useRef(false);

  const ink = cssColor("--ink", "#1d3bd1");
  const paper = cssColor("--paper", "#f3efe6");

  // Everything left of this plane is printed; it travels with the roller.
  const clip = useMemo(
    () => new THREE.Plane(new THREE.Vector3(-1, 0, 0), START),
    [],
  );
  const print = useMemo(() => printTexture(ink), [ink]);
  const shadow = useMemo(() => shadowTexture(), []);
  const metal = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(ink).multiplyScalar(0.55),
        metalness: 0.7,
        roughness: 0.32,
      }),
    [ink],
  );
  const frame = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(paper).multiplyScalar(0.92),
        metalness: 0.2,
        roughness: 0.6,
      }),
    [paper],
  );

  // Fit the sheet to the viewport width.
  const fit = Math.min(1, viewport.width / (SHEET_W + 1.2));

  useFrame(() => {
    const p = pressState.p;
    // The roller rolls (no slip): rotation follows distance travelled.
    const x = THREE.MathUtils.lerp(
      START,
      END,
      THREE.MathUtils.smoothstep(p, 0.02, 0.92),
    );
    if (carriage.current) carriage.current.position.x = x;
    if (roller.current) roller.current.rotation.y = -(x - START) / R;
    if (feedA.current) feedA.current.rotation.y = (x - START) / 0.15;
    if (feedB.current) feedB.current.rotation.y = -(x - START) / 0.13;
    clip.constant = x; // keep points with x <= roller
    if (!reported.current) {
      reported.current = true;
      markPressReady();
    }
  });

  return (
    <group scale={fit}>
      <hemisphereLight args={["#ffffff", "#30364d", 1.1]} />
      <directionalLight position={[-3, 6, 4]} intensity={1.6} />
      <directionalLight position={[4, 2, -3]} intensity={0.4} />

      {/* The bed and the sheet. */}
      <mesh rotation-x={-Math.PI / 2} position-y={-0.02}>
        <planeGeometry args={[SHEET_W + 0.5, SHEET_D + 0.5]} />
        <meshStandardMaterial
          color={new THREE.Color(ink).multiplyScalar(0.45)}
          roughness={0.9}
        />
      </mesh>
      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[SHEET_W, SHEET_D]} />
        <meshStandardMaterial color={paper} roughness={0.95} />
      </mesh>
      {/* The impression, clipped to the part the roller has passed. */}
      <mesh rotation-x={-Math.PI / 2} position-y={0.003}>
        <planeGeometry args={[SHEET_W, SHEET_D]} />
        <meshBasicMaterial
          map={print}
          transparent
          clippingPlanes={[clip]}
          depthWrite={false}
        />
      </mesh>

      {/* The carriage: impression roller, two ink rollers, side frames. */}
      <group ref={carriage} position-x={START}>
        <mesh
          rotation-x={-Math.PI / 2}
          position-y={0.004}
          scale={[1.4, 3.4, 1]}
        >
          <planeGeometry args={[R * 2, R * 2]} />
          <meshBasicMaterial map={shadow} transparent depthWrite={false} />
        </mesh>
        <group position-y={R} rotation-x={Math.PI / 2}>
          <mesh ref={roller} material={metal}>
            <cylinderGeometry args={[R, R, LEN, 48]} />
          </mesh>
        </group>
        <group position={[-0.22, R * 2 + 0.16, 0]} rotation-x={Math.PI / 2}>
          <mesh ref={feedA} material={metal}>
            <cylinderGeometry args={[0.15, 0.15, LEN * 0.92, 32]} />
          </mesh>
        </group>
        <group position={[0.2, R * 2 + 0.42, 0]} rotation-x={Math.PI / 2}>
          <mesh ref={feedB} material={metal}>
            <cylinderGeometry args={[0.13, 0.13, LEN * 0.88, 32]} />
          </mesh>
        </group>
        {/* Only the far side frame: a near one would stand between the camera and
            the rollers and hide them. A slim axle bar caps the near ends instead. */}
        <mesh material={frame} position={[0, R + 0.26, -(LEN / 2 + 0.06)]}>
          <boxGeometry args={[0.8, 1.15, 0.06]} />
        </mesh>
        <mesh material={frame} position={[0, R, LEN / 2 + 0.04]}>
          <boxGeometry args={[0.16, 0.16, 0.05]} />
        </mesh>
      </group>
    </group>
  );
}

export default function PressScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 4.1, 4.4], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ camera, gl }) => {
        gl.localClippingEnabled = true;
        camera.lookAt(0, 0.15, 0);
      }}
    >
      <Press />
    </Canvas>
  );
}
