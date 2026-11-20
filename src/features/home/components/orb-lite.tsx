"use client";

import { useEffect, useRef } from "react";

import { gsap } from "../lib/gsap";
import { orb } from "../lib/orb";

// Matches the WebGL camera (z = 5, fov 35deg): visible height in world units.
const VIEW_H = 2 * 5 * Math.tan((35 / 2) * (Math.PI / 180));

/**
 * The orb without three.js, for phones and low-power devices. A blurred radial disc
 * that follows the same `orb` store as the WebGL version, damped on the GSAP ticker,
 * so every section's moveOrb call still lands.
 */
export default function OrbLite() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    const cur = { x: orb.x, y: orb.y, s: orb.scale, o: 0 };
    let t = 0;

    const tick = (_time: number, deltaMs: number) => {
      const d = Math.min(deltaMs / 1000, 0.1);
      t += d;
      const k = (rate: number) => 1 - Math.exp(-rate * d);
      cur.x += (orb.x - cur.x) * k(2.4);
      cur.y += (orb.y - cur.y) * k(2.4);
      cur.s += (orb.scale - cur.s) * k(2.2);
      cur.o += (orb.opacity - cur.o) * k(1.6);

      const w = window.innerWidth;
      const h = window.innerHeight;
      const breathe = 1 + Math.sin(t * 0.6) * 0.025;
      // Diameter in px: sphere radius (scale) in world units, mapped to the viewport.
      // Capped at the viewport width: on a tall, narrow phone the height-based size
      // would otherwise swallow the whole screen.
      const dia = Math.min(((cur.s * breathe * 2) / VIEW_H) * h, w * 1.05);
      const cx = w / 2 + cur.x * (w / 2);
      const cy = h / 2 - cur.y * (h / 2);

      node.style.width = `${dia}px`;
      node.style.height = `${dia}px`;
      node.style.transform = `translate3d(${cx - dia / 2}px, ${cy - dia / 2}px, 0)`;
      node.style.opacity = String(cur.o);
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        ref={el}
        className="absolute top-0 left-0 rounded-full opacity-0 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, var(--orb-core) 0%, color-mix(in oklab, var(--orb) 82%, transparent) 26%, color-mix(in oklab, var(--orb) 32%, transparent) 50%, transparent 70%)",
          filter: "blur(clamp(12px, 3vw, 28px))",
        }}
      />
    </div>
  );
}
