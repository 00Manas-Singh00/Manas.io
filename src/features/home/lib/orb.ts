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

export function moveOrb(to: Partial<OrbState>, duration = 1.8) {
  gsap.to(orb, { ...to, duration, ease: "expo.out", overwrite: "auto" });
}
