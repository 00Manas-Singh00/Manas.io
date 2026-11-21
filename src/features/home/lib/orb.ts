import { gsap } from "./gsap";

// Mutable, non-React store. GSAP tweens it; the R3F scene damps toward it every frame.
export type OrbState = {
  x: number; // -1..1, fraction of half the viewport width
  y: number; // -1..1, fraction of half the viewport height
  scale: number;
  amp: number; // noise displacement
  opacity: number;
};

export const orb: OrbState = {
  x: -0.72,
  y: -0.42,
  scale: 0.42,
  amp: 0.18,
  opacity: 0,
};

/**
 * Where the orb actually is on screen, in CSS pixels, after damping and the pointer
 * lean. Written every frame by whichever renderer is active (WebGL or CSS), read by
 * the ink effects so type can react to the real orb rather than its target.
 */
export const orbScreen = { cx: -9999, cy: -9999, r: 0, opacity: 0 };

// The WebGL camera (z = 5, fov 35deg) sees this many world units of height.
export const VIEW_H = 2 * 5 * Math.tan((35 / 2) * (Math.PI / 180));

export function moveOrb(to: Partial<OrbState>, duration = 1.8) {
  gsap.to(orb, { ...to, duration, ease: "expo.out", overwrite: "auto" });
}
