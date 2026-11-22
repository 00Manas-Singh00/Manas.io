"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import { scroller } from "../lib/lenis";
import { orb, orbScreen, VIEW_H } from "../lib/orb";
import { useRiso } from "./riso";

/**
 * Liquid ink. A full-screen metaball field: one main body that follows the `orb` store
 * (so every section's moveOrb still lands), and droplets on springs around it. At rest
 * the droplets circle inside the body and it reads as one wobbling drop of ink. A fast
 * scroll flings them against the scroll direction, they string out into a trail, then
 * the springs pull them back and the ink re-merges.
 *
 * Everything is in CSS pixels with y pointing down, matching orbScreen.
 */

const DROPS = 4;
const BLOBS = DROPS + 1;
// Droplet size as a fraction of the main radius, and how stiff each one's spring is.
// Small, loose droplets travel furthest on a flick, which is what makes the trail.
const SIZE = [0.46, 0.38, 0.3, 0.24];
const STIFF = [26, 18, 12, 8];
const DAMP = [7, 6, 5, 4.2];

const vertexShader = /* glsl */ `
void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const fragmentShader = /* glsl */ `
precision highp float;
uniform vec2 uRes;      // canvas size in CSS px
uniform float uDpr;
uniform vec3 uBlobs[${BLOBS}]; // x, y (CSS px, y down), radius
uniform vec3 uColor; uniform vec3 uCore;
uniform float uOpacity; uniform float uTime; uniform float uAmp;
uniform vec2 uLight;    // pointer, CSS px
uniform float uDark;    // 0 light theme .. 1 dark theme

void main(){
  vec2 p = vec2(gl_FragCoord.x, uRes.y * uDpr - gl_FragCoord.y) / uDpr;
  float field = 0.0;
  vec2 grad = vec2(0.0); // d(field)/dp, for the wet-ink highlight
  for (int i = 0; i < ${BLOBS}; i++) {
    vec3 b = uBlobs[i];
    vec2 d = p - b.xy;
    // A slow wobble on the outline, so the body never reads as a perfect circle.
    float a = atan(d.y, d.x);
    float wob = 1.0 + uAmp * 0.35 * (sin(a * 3.0 + uTime * 0.9 + float(i)) * 0.6
                                   + sin(a * 5.0 - uTime * 1.3) * 0.4);
    float r = b.z * wob;
    float dd = max(dot(d, d), 1.0);
    field += (r * r) / dd;
    grad += -2.0 * r * r * d / (dd * dd);
  }
  // Surface at field = 1, soft enough for the CSS blur to finish the edge.
  float ink = smoothstep(0.55, 1.15, field);
  vec3 col = mix(uColor, uCore, smoothstep(1.0, 3.0, field));

  // Dark theme: the ink is wet and catches the lamp that follows the pointer. Treat
  // the ink as a surface whose height rises with the field; its slope gives a normal,
  // and a Blinn-Phong glint slides over the rim facing the light.
  if (uDark > 0.001) {
    float R = max(uBlobs[0].z, 1.0);
    float hs = smoothstep(0.6, 2.6, field);
    float dh = hs * (1.0 - hs) * 6.0 / 2.0; // d(height)/d(field), roughly
    vec3 N = normalize(vec3(-grad * dh * R * 0.9, 1.0));
    vec3 L = normalize(vec3(uLight - p, 240.0));
    vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
    // Only curved rims glint; a flat pool would mirror the lamp as a big white disc.
    float slope = smoothstep(0.05, 0.3, length(N.xy));
    float spec = pow(max(dot(N, H), 0.0), 14.0) * slope;
    vec2 toLamp = uLight - p;
    float lamp = exp(-dot(toLamp, toLamp) / (2.0 * 320.0 * 320.0));
    col = mix(col, vec3(0.92, 0.94, 1.0), clamp(spec * 1.6 * lamp, 0.0, 0.85) * uDark);
    col += uColor * 0.25 * lamp * uDark;
  }

  gl_FragColor = vec4(col, ink * uOpacity);
}`;

type Drop = { x: number; y: number; vx: number; vy: number };

function Ink({
  ink,
  core,
  dark,
}: {
  ink: string;
  core: string;
  dark: boolean;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uRes: { value: new THREE.Vector2(1, 1) },
      uDpr: { value: 1 },
      uBlobs: {
        value: Array.from({ length: BLOBS }, () => new THREE.Vector3()),
      },
      uColor: { value: new THREE.Color(ink) },
      uCore: { value: new THREE.Color(core) },
      uOpacity: { value: 0 },
      uTime: { value: 0 },
      uAmp: { value: orb.amp },
      uLight: { value: new THREE.Vector2(-9999, -9999) },
      uDark: { value: 0 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // Main body state (px) and the droplets, kept outside React.
  const body = useRef({ x: NaN, y: NaN, r: 0 });
  const drops = useRef<Drop[]>([]);

  useEffect(() => {
    const u = material.current?.uniforms;
    u?.uColor.value.set(ink);
    u?.uCore.value.set(core);
  }, [ink, core]);

  useFrame((state, delta) => {
    // Always write through the live material: under StrictMode the memoised object and
    // the one R3F attached can differ.
    const u = material.current?.uniforms;
    if (!u) return;
    const d = Math.min(delta, 1 / 30);
    const t = (u.uTime.value += d);
    const w = state.size.width;
    const h = state.size.height;
    const k = (rate: number) => 1 - Math.exp(-rate * d);

    // Main body: section target plus a gentle lean toward the pointer.
    const tx = w / 2 + orb.x * (w / 2) + state.pointer.x * 24;
    const ty = h / 2 - orb.y * (h / 2) - state.pointer.y * 16;
    const tr = (orb.scale * (1 + Math.sin(t * 0.6) * 0.025) * h) / VIEW_H;
    const b = body.current;
    if (Number.isNaN(b.x)) Object.assign(b, { x: tx, y: ty, r: tr });
    b.x += (tx - b.x) * k(2.4);
    b.y += (ty - b.y) * k(2.4);
    b.r += (tr - b.r) * k(2.2);

    if (!drops.current.length)
      drops.current = SIZE.map(() => ({ x: b.x, y: b.y, vx: 0, vy: 0 }));

    // Lenis velocity is px per frame at 60fps. Content moves up when scrolling down,
    // so the ink is flung the other way, like liquid left behind.
    const flick = (scroller.lenis?.velocity ?? 0) * 60;

    drops.current.forEach((p, i) => {
      // Rest position: a slow orbit inside the body.
      const a = t * (0.35 + i * 0.11) + i * 1.9;
      const ox = b.x + Math.cos(a) * b.r * 0.42;
      const oy = b.y + Math.sin(a * 1.3) * b.r * 0.34;
      p.vx += ((ox - p.x) * STIFF[i] - p.vx * DAMP[i]) * d;
      p.vy += ((oy - p.y) * STIFF[i] - p.vy * DAMP[i]) * d;
      // Scroll flick, stronger for the loose droplets, plus a slight drip.
      p.vy += flick * (0.9 + i * 0.35) * d;
      p.vy += 40 * d;
      p.x += p.vx * d;
      p.y += p.vy * d;
      // Never let a hard flick throw ink off into the page: cap the stretch.
      const dx = p.x - b.x;
      const dy = p.y - b.y;
      const dist = Math.hypot(dx, dy);
      const max = b.r * 2.6;
      if (dist > max) {
        p.x = b.x + (dx / dist) * max;
        p.y = b.y + (dy / dist) * max;
      }
    });

    u.uRes.value.set(w, h);
    u.uDpr.value = state.viewport.dpr;
    u.uBlobs.value[0].set(b.x, b.y, b.r * 0.78);
    drops.current.forEach((p, i) =>
      u.uBlobs.value[i + 1].set(p.x, p.y, b.r * SIZE[i] * 0.78),
    );
    u.uAmp.value += (orb.amp - u.uAmp.value) * k(2);
    u.uOpacity.value += (orb.opacity - u.uOpacity.value) * k(1.6);
    // The lamp: pointer in CSS px (R3F pointer is -1..1, y up), faded in with the theme.
    u.uLight.value.set(
      ((state.pointer.x + 1) / 2) * w,
      ((1 - state.pointer.y) / 2) * h,
    );
    u.uDark.value += ((dark ? 1 : 0) - u.uDark.value) * k(3);

    // Publish the main body for the ink-through-type effect.
    orbScreen.cx = b.x;
    orbScreen.cy = b.y;
    orbScreen.r = b.r;
    orbScreen.opacity = u.uOpacity.value;
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export default function OrbCanvas() {
  const riso = useRiso();
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <>
      <Lamp on={dark} />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        // Lighter than the old orb's blur, so the liquid edge and droplets still read.
        style={{ filter: "blur(clamp(6px, 0.9vw, 14px))" }}
      >
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
          eventSource={
            typeof document !== "undefined" ? document.body : undefined
          }
          eventPrefix="client"
        >
          <Ink
            ink={riso ? "#ff48b0" : dark ? "#4a5ef0" : "#1d3bd1"}
            core={riso ? "#ff2a9d" : dark ? "#1c2fc9" : "#1530c4"}
            dark={dark}
          />
        </Canvas>
      </div>
    </>
  );
}

/**
 * Dark theme only: a soft pool of light that follows the pointer across the page, like
 * a desk lamp over a dark sheet. The ink catches the same lamp in the shader above.
 */
function Lamp({ on }: { on: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--lx", `${e.clientX}px`);
      el.style.setProperty("--ly", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
      style={{
        opacity: on ? 1 : 0,
        background:
          "radial-gradient(circle 420px at var(--lx, 50%) var(--ly, 40%), rgba(255, 255, 255, 0.07), transparent 70%)",
      }}
    />
  );
}
