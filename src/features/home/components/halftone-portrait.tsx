"use client";

import { useEffect, useRef } from "react";

/**
 * The portrait as a halftone, in the same language as the project plates: the photo is
 * sampled on a grid and each cell becomes an ink dot sized by how dark it is. A loupe
 * follows the pointer and reveals the real photo underneath (the <img> it sits on).
 * Dark mode prints it as a negative. As the hero scrolls away, the dots shrink and the
 * print dissolves (--hero-p on the hero, set by its scroll timeline).
 *
 * Redraws only when something changes: pointer, scroll progress, size or theme.
 */
// Matches the <img>'s object-[50%_30%]. A constant, so the effect doesn't re-run.
const DEFAULT_POS: [number, number] = [0.5, 0.3];

export function HalftonePortrait({
  src,
  objectPosition = DEFAULT_POS,
}: {
  src: string;
  objectPosition?: [number, number];
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const host = canvas.parentElement!;
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const img = new Image();
    img.decoding = "async";
    img.src = src;

    let w = 0;
    let h = 0;
    let cell = 7;
    let lum: Float32Array | null = null; // 0 = white .. 1 = black, per cell
    let cols = 0;
    let rows = 0;
    let raf = 0;
    const pointer = { x: -1, y: -1, on: false, lens: 0 };
    let progress = 0;

    const colors = () => {
      const s = getComputedStyle(canvas);
      return {
        ink: s.getPropertyValue("--ink").trim() || "#1d3bd1",
        paper: s.getPropertyValue("--paper").trim() || "#f3efe6",
        dark: document.documentElement.classList.contains("dark"),
      };
    };

    // Sample the photo with the same cover crop as the <img> underneath.
    const sample = () => {
      if (!img.complete || !img.naturalWidth || !w || !h) return;
      cell = Math.max(5, Math.round(Math.min(w, h) / 64));
      cols = Math.ceil(w / cell);
      rows = Math.ceil(h / cell);
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const g = off.getContext("2d", { willReadFrequently: true })!;
      const scale = Math.max(cols / img.naturalWidth, rows / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      g.drawImage(
        img,
        (cols - dw) * objectPosition[0],
        (rows - dh) * objectPosition[1],
        dw,
        dh,
      );
      const data = g.getImageData(0, 0, cols, rows).data;
      lum = new Float32Array(cols * rows);
      for (let i = 0; i < cols * rows; i++) {
        const y =
          (0.2126 * data[i * 4] +
            0.7152 * data[i * 4 + 1] +
            0.0722 * data[i * 4 + 2]) /
          255;
        // Contrast curve so the face reads as print rather than mush.
        const d = 1 - y;
        lum[i] = Math.min(1, Math.max(0, (d - 0.12) * 1.35));
      }
    };

    const draw = () => {
      raf = 0;
      if (!lum) return;
      const { ink, paper, dark } = colors();
      const bg = dark ? ink : paper;
      const fg = dark ? paper : ink;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const dissolve = 1 - progress * 0.85;
      const maxR = (cell / 2) * 1.05 * dissolve;
      ctx.fillStyle = fg;
      ctx.beginPath();
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const r = maxR * Math.sqrt(lum[j * cols + i]);
          if (r < 0.35) continue;
          const x = i * cell + cell / 2;
          const y = j * cell + cell / 2;
          ctx.moveTo(x + r, y);
          ctx.arc(x, y, r, 0, Math.PI * 2);
        }
      }
      ctx.fill();

      // Loupe: clear a soft-edged circle so the real photo shows through.
      if (pointer.lens > 0.01) {
        const L = Math.min(w, h) * 0.17 * pointer.lens;
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        const grad = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          L * 0.82,
          pointer.x,
          pointer.y,
          L,
        );
        grad.addColorStop(0, "rgba(0,0,0,1)");
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, L, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        ctx.strokeStyle = fg;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, L, 0, Math.PI * 2);
        ctx.stroke();
      }
    };
    const request = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    // Ease the loupe in and out over a few frames.
    let lensRaf = 0;
    const easeLens = () => {
      const target = pointer.on ? 1 : 0;
      pointer.lens += (target - pointer.lens) * 0.25;
      if (Math.abs(target - pointer.lens) < 0.01) pointer.lens = target;
      draw();
      lensRaf = pointer.lens !== target ? requestAnimationFrame(easeLens) : 0;
    };
    const startLens = () => {
      if (!lensRaf) lensRaf = requestAnimationFrame(easeLens);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = host.clientWidth;
      h = host.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sample();
      request();
    };

    img.onload = () => {
      sample();
      request();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    // Theme and riso switches change the inks.
    const mo = new MutationObserver(request);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Scroll dissolve: the hero writes its scroll progress to --hero-p.
    const hero = canvas.closest<HTMLElement>("#top");
    const po = hero
      ? new MutationObserver(() => {
          const p = parseFloat(hero.style.getPropertyValue("--hero-p")) || 0;
          if (Math.abs(p - progress) > 0.005) {
            progress = p;
            request();
          }
        })
      : null;
    if (hero)
      po!.observe(hero, { attributes: true, attributeFilter: ["style"] });

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      // Undo any scale on the canvas (the hero pans and zooms it).
      pointer.x = ((e.clientX - r.left) / r.width) * w;
      pointer.y = ((e.clientY - r.top) / r.height) * h;
      if (!pointer.on) {
        pointer.on = true;
        startLens();
      } else request();
    };
    const onLeave = () => {
      pointer.on = false;
      startLens();
    };
    const target = canvas.closest<HTMLElement>(".hero-portrait") ?? host;
    if (fine) {
      target.addEventListener("pointermove", onMove);
      target.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(lensRaf);
      ro.disconnect();
      mo.disconnect();
      po?.disconnect();
      target.removeEventListener("pointermove", onMove);
      target.removeEventListener("pointerleave", onLeave);
    };
  }, [src, objectPosition]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 size-full [@media(hover:hover)_and_(pointer:fine)]:cursor-none"
    />
  );
}
