"use client";

import { useEffect, useRef } from "react";

const SPACING = 9; // px between dots along the path
const LIFE = 0.55; // seconds a dot lasts
const MAX_R = 2.6;

type Dot = { x: number; y: number; t: number; r: number };

/**
 * The pointer as a print head: moving the mouse lays a short trail of halftone dots
 * that shrink and fade within about half a second. The system cursor stays as it is.
 * Desktop pointers only, off under reduced motion, and idle when nothing is fading.
 */
export function PrintHead() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const canvas = ref.current;
    if (!fine || reduce || !canvas) return;
    const ctx = canvas.getContext("2d")!;

    let dots: Dot[] = [];
    let last: { x: number; y: number } | null = null;
    let raf = 0;
    let ink = "#1d3bd1";

    const readInk = () => {
      ink = getComputedStyle(canvas).getPropertyValue("--ink").trim() || ink;
    };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const now = performance.now() / 1000;
      dots = dots.filter((d) => now - d.t < LIFE);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = ink;
      ctx.beginPath();
      for (const d of dots) {
        const k = 1 - (now - d.t) / LIFE;
        const r = d.r * k;
        ctx.moveTo(d.x + r, d.y);
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
      }
      ctx.globalAlpha = 0.55;
      ctx.fill();
      ctx.globalAlpha = 1;
      raf = dots.length ? requestAnimationFrame(draw) : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const p = { x: e.clientX, y: e.clientY };
      const now = performance.now() / 1000;
      if (!last) last = p;
      const dx = p.x - last.x;
      const dy = p.y - last.y;
      const dist = Math.hypot(dx, dy);
      // Lay dots evenly along the path, sized by speed like a printer's dot gain.
      const steps = Math.floor(dist / SPACING);
      const size = Math.min(MAX_R, 1.4 + dist / 30);
      for (let i = 1; i <= steps; i++) {
        dots.push({
          x: last.x + (dx * i) / steps,
          y: last.y + (dy * i) / steps,
          t: now,
          r: size,
        });
      }
      if (steps) last = p;
      if (dots.length > 160) dots = dots.slice(-160);
      if (!raf && dots.length) raf = requestAnimationFrame(draw);
    };
    const onLeave = () => (last = null);

    readInk();
    resize();
    const mo = new MutationObserver(readInk);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[54] size-full"
    />
  );
}
