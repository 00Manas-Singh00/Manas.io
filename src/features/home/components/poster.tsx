"use client";

import { Download, Share2, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { PROFILE } from "../data";
import { scroller } from "../lib/lenis";
import { visit } from "../lib/visit";
import { RollText } from "./roll-text";

const W = 1080;
const H = 1350;
const M = 64;
const OPEN_EVENT = "poster:open";
const SITE = "manas-io.vercel.app";

export function openPoster() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function cssVar(name: string, fallback: string) {
  return (
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() ||
    fallback
  );
}

function duration(ms: number) {
  const s = Math.max(1, Math.round(ms / 1000));
  const m = Math.floor(s / 60);
  return m ? `${m}m ${String(s % 60).padStart(2, "0")}s` : `${s}s`;
}

/** Draws the visit poster: the page's paper, ink and type, stamped with this visit. */
async function drawPoster(): Promise<HTMLCanvasElement> {
  const paper = cssVar("--paper", "#f3efe6");
  const ink = cssVar("--ink", "#1d3bd1");
  const family =
    getComputedStyle(document.querySelector(".home") ?? document.body)
      .fontFamily || "sans-serif";
  await document.fonts?.ready;

  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d")!;
  const font = (weight: number, size: number) =>
    `${weight} ${size}px ${family}`;

  g.fillStyle = paper;
  g.fillRect(0, 0, W, H);
  g.fillStyle = ink;
  g.strokeStyle = ink;
  g.lineWidth = 1.5;
  g.textBaseline = "alphabetic";

  // The ink, as a halftone screen: a soft drop rendered in dots.
  const cell = 15;
  const cx = W * 0.78;
  const cy = H * 0.47;
  const R = 330;
  g.beginPath();
  for (let y = cell / 2; y < H; y += cell) {
    for (let x = cell / 2; x < W; x += cell) {
      const d = Math.hypot(x - cx, (y - cy) * 1.08);
      const wob = 1 + 0.06 * Math.sin(Math.atan2(y - cy, x - cx) * 3 + 1);
      const f = Math.max(0, 1 - d / (R * wob));
      const r = (cell / 2) * Math.min(1, Math.pow(f, 0.55) * 1.15);
      if (r < 0.6) continue;
      g.moveTo(x + r, y);
      g.arc(x, y, r, 0, Math.PI * 2);
    }
  }
  g.globalAlpha = 0.9;
  g.fill();
  g.globalAlpha = 1;

  const rule = (y: number) => {
    g.beginPath();
    g.moveTo(M, y);
    g.lineTo(W - M, y);
    g.stroke();
  };

  // Top band.
  g.font = font(400, 26);
  g.fillText("MANAS SINGH", M, M + 26);
  const tag = PROFILE.tagline.toUpperCase();
  g.fillText(tag, W - M - g.measureText(tag).width, M + 26);
  rule(M + 46);

  // Headline, fitted to the measure.
  const lines = ["HAND ME THE", "MESSY PROBLEM.", "I'LL SHIP IT."];
  g.font = font(300, 100);
  const widest = Math.max(...lines.map((l) => g.measureText(l).width));
  const size = Math.min(132, (100 * (W - 2 * M)) / widest);
  g.font = font(300, size);
  lines.forEach((l, i) => g.fillText(l, M, 250 + i * size * 0.96));

  // The stamp: when this copy was printed, and for whom.
  const top = 760;
  rule(top);
  g.font = font(400, 22);
  g.fillText("PRINTED FOR YOU", M, top + 40);
  const now = new Date();
  const date = now
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  g.font = font(300, 64);
  g.fillText(`${date} · ${time}`, M, top + 112);

  // What was read.
  const listTop = top + 180;
  g.font = font(400, 22);
  g.fillText("SECTIONS READ", M, listTop);
  const all = visit.all.length ? visit.all : [...visit.seen];
  const colW = (W - 2 * M) / 2;
  all.forEach((label, i) => {
    const x = M + (i % 2) * colW;
    const y = listTop + 52 + Math.floor(i / 2) * 46;
    const read = visit.seen.has(label);
    g.beginPath();
    g.arc(x + 9, y - 9, 9, 0, Math.PI * 2);
    if (read) g.fill();
    else g.stroke();
    g.font = font(read ? 400 : 300, 30);
    g.globalAlpha = read ? 1 : 0.45;
    g.fillText(label.toUpperCase(), x + 34, y);
    g.globalAlpha = 1;
  });

  // Footer.
  rule(H - M - 46);
  g.font = font(400, 24);
  const read = `${String(visit.seen.size).padStart(2, "0")} / ${String(all.length).padStart(2, "0")} READ · ${duration(performance.now() - visit.start).toUpperCase()} ON PAGE`;
  g.fillText(SITE.toUpperCase(), M, H - M);
  g.fillText(read, W - M - g.measureText(read).width, H - M);

  return c;
}

/**
 * "Print my visit": a one-off poster of this visit in the site's style, to download or
 * share. Generated in the browser; nothing is uploaded.
 */
export function Poster() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    let url: string | null = null;
    let cancelled = false;
    scroller.lenis?.stop();
    drawPoster().then((c) =>
      c.toBlob((b) => {
        if (!b || cancelled) return;
        url = URL.createObjectURL(b);
        setBlob(b);
        setSrc(url);
        const file = new File([b], "manas-singh-visit.png", {
          type: "image/png",
        });
        setCanShare(!!navigator.canShare?.({ files: [file] }));
      }, "image/png"),
    );
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      cancelled = true;
      window.removeEventListener("keydown", onKey);
      scroller.lenis?.start();
      if (url) URL.revokeObjectURL(url);
      setSrc(null);
      setBlob(null);
    };
  }, [open]);

  const share = async () => {
    if (!blob) return;
    const file = new File([blob], "manas-singh-visit.png", {
      type: "image/png",
    });
    try {
      await navigator.share({
        files: [file],
        title: "Manas Singh",
        text: `Printed at ${SITE}`,
      });
    } catch {
      // Cancelled share sheets reject; nothing to do.
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Your visit, printed"
          data-lenis-prevent
          className="fixed inset-0 z-[66] flex flex-col items-center justify-center gap-5 overflow-y-auto bg-ink/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.3 }}
          onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <motion.div
            className="relative aspect-[4/5] w-[min(88vw,58vh*0.8,460px)] bg-paper shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]"
            initial={{ y: reduce ? 0 : "-60vh", rotate: reduce ? 0 : -4 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: reduce ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt="A poster of this visit: the headline, the time it was printed, and the sections read"
                className="size-full"
              />
            ) : (
              <p className="grid size-full place-items-center text-sm text-ink uppercase">
                Printing…
              </p>
            )}
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-paper">
            <a
              href={src ?? undefined}
              download="manas-singh-visit.png"
              aria-disabled={!src}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-ink uppercase",
                !src && "pointer-events-none opacity-50",
              )}
            >
              <RollText text="Download" />
              <Download className="size-4" strokeWidth={1.5} />
            </a>
            {canShare && (
              <button
                type="button"
                onClick={share}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-paper px-6 py-3 uppercase"
              >
                <RollText text="Share" />
                <Share2 className="size-4" strokeWidth={1.5} />
              </button>
            )}
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(false)}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-paper px-6 py-3 uppercase"
            >
              <RollText text="Close" />
              <X className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** The footer trigger. */
export function PosterButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openPoster}
      className={cn("group cursor-pointer uppercase", className)}
    >
      <RollText text="Print my visit" />
    </button>
  );
}
