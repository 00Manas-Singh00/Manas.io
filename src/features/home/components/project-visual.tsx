"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Live halftone "plates" instead of photographs. Each project gets a small simulation
 * that says what it does, printed as a dot screen in the page's one ink:
 *
 *  - margin: bouncing physics bodies (a physics puzzle game). The pointer shoves them.
 *  - graph:  a drifting knowledge graph, nodes and edges (Curiosity Engine).
 *  - tide:   two tides crossing and trading water (TradeTide, skill bartering).
 *  - voice:  a speech spectrogram scored against an agenda line (Meet Genius).
 *
 * Hovering the card inverts the plate (paper dots on ink) and swells the dots around
 * the pointer. Rendering pauses off-screen and draws one still frame under reduced motion.
 */
export type VisualKind = "margin" | "graph" | "tide" | "voice";

type Ball = { x: number; y: number; vx: number; vy: number; r: number };
type GraphNode = {
  ax: number;
  ay: number;
  px: number;
  py: number;
  s: number;
  x: number;
  y: number;
};

type Sim = {
  balls: Ball[];
  nodes: GraphNode[];
  edges: [number, number][];
};

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);
const smooth = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.trim().replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/./g, "$&$&") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function mix(
  a: [number, number, number],
  b: [number, number, number],
  t: number,
) {
  const c = (i: number) => Math.round(a[i] + (b[i] - a[i]) * t);
  return `rgb(${c(0)}, ${c(1)}, ${c(2)})`;
}

function makeSim(): Sim {
  // Deterministic layout so server and client agree and every visit looks the same.
  const balls: Ball[] = [
    { x: 0.3, y: 0.2, vx: 0.18, vy: 0, r: 0.13 },
    { x: 0.62, y: 0.05, vx: -0.12, vy: 0.1, r: 0.1 },
    { x: 0.45, y: 0.45, vx: 0.06, vy: -0.2, r: 0.075 },
  ];
  const seeds = [
    [0.22, 0.2],
    [0.68, 0.16],
    [0.46, 0.38],
    [0.18, 0.58],
    [0.8, 0.46],
    [0.52, 0.66],
    [0.3, 0.84],
    [0.74, 0.82],
    [0.9, 0.24],
  ];
  const nodes: GraphNode[] = seeds.map(([ax, ay], i) => ({
    ax,
    ay,
    x: ax,
    y: ay,
    px: i * 1.7,
    py: i * 2.3,
    s: i % 3 === 0 ? 1.4 : 1,
  }));
  const edges: [number, number][] = [
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 7],
    [1, 8],
    [4, 8],
    [0, 3],
  ];
  return { balls, nodes, edges };
}

function segDist(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
) {
  const dx = bx - ax;
  const dy = by - ay;
  const t = clamp01(
    ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1),
  );
  const x = ax + dx * t - px;
  const y = ay + dy * t - py;
  return Math.sqrt(x * x + y * y);
}

export function ProjectVisual({
  kind,
  large = false,
  peel = false,
  className,
}: {
  kind: VisualKind;
  large?: boolean;
  /** Let the sheet's corner lift on hover. Needs an ancestor marked `data-sheet`. */
  peel?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const host = canvas.parentElement!;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const sim = makeSim();

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = false;
    let last = performance.now();
    let time = kind === "tide" ? 2 : 0;
    let invert = 0; // eased 0..1
    let hovering = false;
    // The loupe needs a hovering pointer; touch keeps the plain plate.
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const pointer = { x: -1, y: -1, on: 0 };
    // The bordered frame that the peel clips, and the current fold size in px.
    const frame = peel ? canvas.closest<HTMLElement>("[data-sheet]") : null;
    let curl = 0;
    let clipped = 0;
    let ink: [number, number, number] = [42, 77, 245];
    let paper: [number, number, number] = [251, 251, 248];

    const readColors = () => {
      const s = getComputedStyle(canvas);
      const i = s.getPropertyValue("--ink");
      const p = s.getPropertyValue("--paper");
      if (i) ink = hexToRgb(i);
      if (p) paper = hexToRgb(p);
    };

    const resize = () => {
      const r = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!raf) draw(0);
    };

    // ---- per-kind fields, all in 0..1 -----------------------------------------
    const step = (dt: number) => {
      if (kind !== "margin") return;
      const aspect = w / h || 1;
      for (const b of sim.balls) {
        b.vy += 1.15 * dt; // gravity (in heights per s^2)
        // The pointer is a soft obstacle: bodies get pushed away from it.
        if (pointer.on > 0.01) {
          const dx = (b.x - pointer.x) * aspect;
          const dy = b.y - pointer.y;
          const d2 = dx * dx + dy * dy + 0.002;
          const f = (0.05 * pointer.on) / d2;
          b.vx += (dx / aspect) * f * dt * 6;
          b.vy += dy * f * dt * 6;
        }
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        const rx = b.r / aspect;
        if (b.y + b.r > 0.9) {
          b.y = 0.9 - b.r;
          b.vy *= -0.82;
          // Never let the scene go to sleep: a tiny kick when a body comes to rest.
          if (Math.abs(b.vy) < 0.25) b.vy = -0.9 - Math.random() * 0.4;
        }
        if (b.y - b.r < 0) {
          b.y = b.r;
          b.vy = Math.abs(b.vy);
        }
        if (b.x - rx < 0) {
          b.x = rx;
          b.vx = Math.abs(b.vx);
        }
        if (b.x + rx > 1) {
          b.x = 1 - rx;
          b.vx = -Math.abs(b.vx);
        }
        b.vx *= 0.999;
      }
    };

    const field = (u: number, v: number, t: number, aspect: number): number => {
      switch (kind) {
        case "margin": {
          let sum = 0;
          for (const b of sim.balls) {
            const dx = (u - b.x) * aspect;
            const dy = v - b.y;
            sum += (b.r * b.r) / (dx * dx + dy * dy + 1e-4);
          }
          const body = smooth(0.55, 1.25, sum);
          const floor = v > 0.9 ? 0.32 + 0.1 * Math.sin(u * 40) : 0;
          return Math.max(body, floor);
        }
        case "graph": {
          let edge = 0;
          for (const [a, b] of sim.edges) {
            const A = sim.nodes[a];
            const B = sim.nodes[b];
            const d = segDist(
              u * aspect,
              v,
              A.x * aspect,
              A.y,
              B.x * aspect,
              B.y,
            );
            edge = Math.max(edge, 1 - smooth(0.004, 0.022, d));
          }
          let node = 0;
          for (const n of sim.nodes) {
            const dx = (u - n.x) * aspect;
            const dy = v - n.y;
            const r = 0.045 * n.s;
            node = Math.max(
              node,
              1 - smooth(r * 0.55, r, Math.sqrt(dx * dx + dy * dy)),
            );
          }
          return Math.max(edge * 0.5, node);
        }
        case "tide": {
          const a =
            0.46 +
            0.11 * Math.sin(u * 7 - t * 1.3) +
            0.04 * Math.sin(u * 17 - t * 2.1);
          const b =
            0.58 +
            0.1 * Math.sin(u * 5.5 + t * 1.05 + 1.2) +
            0.035 * Math.sin(u * 13 + t * 1.7);
          const ta = smooth(a - 0.015, a + 0.015, v) * (0.35 + 0.35 * u);
          const tb = smooth(b - 0.015, b + 0.015, v) * (0.7 - 0.35 * u);
          return clamp01(ta + tb);
        }
        case "voice": {
          // Columns of speech energy, mirrored around the centre line.
          const col = Math.floor(u * 28);
          const c = col / 28;
          const energy =
            0.5 +
            0.5 * Math.sin(c * 9.1 + t * 2.2) * Math.sin(c * 3.3 - t * 1.3) +
            0.25 * Math.sin(c * 21 + t * 3.1);
          const amp =
            0.06 + 0.3 * clamp01(energy) * (0.55 + 0.45 * Math.sin(c * 3.14));
          const bar = 1 - smooth(amp * 0.85, amp, Math.abs(v - 0.45));
          // Agenda track: how much of the meeting stayed on topic, filling over time.
          const progress = (t * 0.06) % 1;
          const track =
            Math.abs(v - 0.88) < 0.012 ? (u < progress ? 0.9 : 0.25) : 0;
          return Math.max(bar, track);
        }
      }
    };

    const draw = (dt: number) => {
      if (!w || !h) return;
      time += dt;

      const target = hovering ? 1 : 0;
      invert += (target - invert) * Math.min(1, dt * 6);
      pointer.on += ((hovering ? 1 : 0) - pointer.on) * Math.min(1, dt * 5);

      step(dt);
      if (kind === "graph") {
        for (const n of sim.nodes) {
          n.x = n.ax + 0.035 * Math.sin(time * 0.5 + n.px);
          n.y = n.ay + 0.03 * Math.cos(time * 0.43 + n.py);
        }
      }

      const bg = mix(paper, ink, invert);
      const fg = mix(ink, paper, invert);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const cell = large ? 11 : 7.5;
      const cols = Math.ceil(w / cell);
      const rows = Math.ceil(h / cell);
      const aspect = w / h;
      const maxR = cell * 0.52;
      // A faint base screen keeps the plate reading as print, even where empty.
      const dot = (f: number) => maxR * Math.max(0.09, Math.min(1, f));

      // The loupe: a printer's magnifier that follows the pointer over the plate.
      const px = pointer.x * w;
      const py = pointer.y * h;
      const inside = px >= 0 && px <= w && py >= 0 && py <= h;
      const lens = inside && fine ? pointer.on : 0;
      const L = (large ? 96 : 64) * (0.6 + 0.4 * lens);
      const M = 2.6;

      ctx.fillStyle = fg;
      ctx.beginPath();
      for (let j = 0; j < rows; j++) {
        const y = j * cell + cell / 2;
        const v = y / h;
        for (let i = 0; i < cols; i++) {
          const x = i * cell + cell / 2;
          // Leave a clean ring around the lens so its edge reads.
          if (lens > 0.02 && Math.hypot(x - px, y - py) < L + cell * 0.6)
            continue;
          const r = dot(field(x / w, v, time, aspect));
          ctx.moveTo(x + r, y);
          ctx.arc(x, y, r, 0, Math.PI * 2);
        }
      }
      ctx.fill();

      if (lens > 0.02) {
        // Magnify the real screen about the pointer: the dot at p is drawn at
        // pointer + (p - pointer) * M, M times larger, clipped to the lens.
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, L, 0, Math.PI * 2);
        ctx.clip();
        ctx.globalAlpha = Math.min(1, lens * 1.4);
        ctx.beginPath();
        const reach = L / M + cell;
        const i0 = Math.max(0, Math.floor((px - reach) / cell));
        const i1 = Math.min(cols - 1, Math.ceil((px + reach) / cell));
        const j0 = Math.max(0, Math.floor((py - reach) / cell));
        const j1 = Math.min(rows - 1, Math.ceil((py + reach) / cell));
        for (let j = j0; j <= j1; j++) {
          const y = j * cell + cell / 2;
          for (let i = i0; i <= i1; i++) {
            const x = i * cell + cell / 2;
            const sx = px + (x - px) * M;
            const sy = py + (y - py) * M;
            const r = dot(field(x / w, y / h, time, aspect)) * M;
            ctx.moveTo(sx + r, sy);
            ctx.arc(sx, sy, r, 0, Math.PI * 2);
          }
        }
        ctx.fill();
        ctx.restore();

        // Rim and a fine crosshair, like the reticle in a print loupe.
        ctx.save();
        ctx.globalAlpha = Math.min(1, lens * 1.4);
        ctx.strokeStyle = fg;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(px, py, L, 0, Math.PI * 2);
        ctx.moveTo(px - 6, py);
        ctx.lineTo(px + 6, py);
        ctx.moveTo(px, py - 6);
        ctx.lineTo(px, py + 6);
        ctx.stroke();
        ctx.restore();
      }

      // Peel: the sheet's bottom-right corner lifts along a 45° fold, more as the
      // pointer nears it. The frame is clipped so the page shows through the corner,
      // and the flap (the paper's back) is drawn folded over onto the plate.
      if (frame) {
        const m = Math.min(w, h);
        let target = 0;
        if (hovering && fine) {
          const near = Math.hypot((1 - pointer.x) * w, (1 - pointer.y) * h);
          const prox = clamp01(1 - near / (m * 0.75));
          target = m * (0.09 + 0.17 * prox * prox);
        }
        curl += (target - curl) * Math.min(1, dt * 8);
        const c = curl < 0.4 ? 0 : curl;

        if (c !== clipped) {
          clipped = c;
          // +1 covers the frame's 1px border around the canvas.
          frame.style.clipPath = c
            ? `polygon(0 0, 100% 0, 100% calc(100% - ${c + 1}px), calc(100% - ${c + 1}px) 100%, 0 100%)`
            : "";
        }

        if (c) {
          const fold = { x: w - c / 2, y: h - c / 2 };
          const tip = { x: w - c, y: h - c };
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(w - c, h);
          ctx.lineTo(w, h - c);
          ctx.lineTo(tip.x, tip.y);
          ctx.closePath();
          // Shadow the flap casts back onto the print.
          ctx.shadowColor = "rgba(0, 0, 0, 0.28)";
          ctx.shadowBlur = c * 0.35;
          ctx.shadowOffsetX = -c * 0.05;
          ctx.shadowOffsetY = -c * 0.05;
          // The back of the sheet: plain paper, darker in the crease.
          const g = ctx.createLinearGradient(fold.x, fold.y, tip.x, tip.y);
          g.addColorStop(0, mix(paper, [0, 0, 0], 0.16));
          g.addColorStop(0.45, mix(paper, [0, 0, 0], 0.03));
          g.addColorStop(1, mix(paper, [255, 255, 255], 0.35));
          ctx.fillStyle = g;
          ctx.fill();
          ctx.shadowColor = "transparent";
          // The sheet's edge, so the flap reads as the same bordered print.
          ctx.strokeStyle = mix(ink, paper, 0.25);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(w - c, h);
          ctx.lineTo(tip.x, tip.y);
          ctx.lineTo(w, h - c);
          ctx.stroke();
          ctx.restore();
        }
      }
    };

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      draw(dt);
      raf = visible && !reduce ? requestAnimationFrame(loop) : 0;
    };

    const start = () => {
      if (raf || reduce) return;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    readColors();
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
    });
    io.observe(canvas);
    // Theme switches flip the `dark` class on <html>.
    const mo = new MutationObserver(() => {
      readColors();
      if (!raf) draw(0);
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Hover is tracked on the whole card (the nearest `.group`), not just the plate.
    const card = (canvas.closest(".group") as HTMLElement | null) ?? host;
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      pointer.x = (e.clientX - r.left) / r.width;
      pointer.y = (e.clientY - r.top) / r.height;
    };
    const onEnter = (e: PointerEvent) => {
      hovering = true;
      onMove(e);
      start();
    };
    const onLeave = () => {
      hovering = false;
    };
    card.addEventListener("pointerenter", onEnter);
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      raf = 0;
      if (frame) frame.style.clipPath = "";
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      card.removeEventListener("pointerenter", onEnter);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
    };
  }, [kind, large, peel]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={cn(
        "absolute inset-0 size-full [@media(hover:hover)_and_(pointer:fine)]:cursor-none",
        className,
      )}
    />
  );
}
