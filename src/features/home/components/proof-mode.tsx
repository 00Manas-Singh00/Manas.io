"use client";

import { useEffect, useRef, useState } from "react";

import { orbScreen } from "../lib/orb";

const RED = "#e5322d"; // proofreader's red pencil
const OPEN_EVENT = "proof:toggle";

/** Toggles proof mode from elsewhere (the command palette). */
export function toggleProof() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

type Mark = {
  key: string;
  note: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

function isTyping(t: EventTarget | null) {
  const el = t as HTMLElement | null;
  return (
    !!el &&
    (el.isContentEditable || /^(input|textarea|select)$/i.test(el.tagName))
  );
}

/**
 * Proof mode: hold Shift (or toggle it from the palette) and a proofreader's layer
 * covers the page: crop and registration marks, the 12-column grid, a baseline grid,
 * and red-pencil notes pinned to what's on screen, read from each element's
 * `data-proof`, plus one that follows the liquid ink. Release Shift and it's gone.
 */
export function ProofMode() {
  const [on, setOn] = useState(false);
  const [marks, setMarks] = useState<Mark[]>([]);
  const orbNote = useRef<HTMLDivElement>(null);
  const sticky = useRef(false);

  // Hold Shift to proof; the palette toggles a sticky proof that Esc closes.
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape" && sticky.current) {
        sticky.current = false;
        setOn(false);
        return;
      }
      if (e.key !== "Shift" || e.repeat || isTyping(e.target)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      setOn(true);
    };
    const up = (e: KeyboardEvent) => {
      if (e.key === "Shift" && !sticky.current) setOn(false);
    };
    const blur = () => !sticky.current && setOn(false);
    const toggle = () => {
      sticky.current = !sticky.current;
      setOn(sticky.current);
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    window.addEventListener(OPEN_EVENT, toggle);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
      window.removeEventListener(OPEN_EVENT, toggle);
    };
  }, []);

  // While open, follow the page: re-measure the annotated elements every frame.
  useEffect(() => {
    if (!on) return;
    let raf = 0;
    const measure = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const seen = new Set<string>();
      const next: Mark[] = [];
      document
        .querySelectorAll<HTMLElement>("[data-proof]")
        .forEach((el, i) => {
          const note = el.dataset.proof!;
          if (seen.has(note)) return; // repeated elements (the four plates) get one note
          const r = el.getBoundingClientRect();
          if (r.bottom < 40 || r.top > vh - 40 || r.width === 0) return;
          if (r.right < 0 || r.left > vw) return;
          seen.add(note);
          next.push({
            key: `${i}`,
            note,
            x: r.left,
            y: r.top,
            w: r.width,
            h: r.height,
          });
        });
      setMarks(next);

      // The liquid ink, wherever it is right now.
      const n = orbNote.current;
      if (n) {
        const visible = orbScreen.opacity > 0.2 && orbScreen.r > 4;
        n.style.opacity = visible ? "1" : "0";
        n.style.transform = `translate(${orbScreen.cx}px, ${orbScreen.cy}px)`;
        n.style.setProperty("--r", `${orbScreen.r * 0.9}px`);
      }
      raf = requestAnimationFrame(measure);
    };
    measure();
    return () => cancelAnimationFrame(raf);
  }, [on]);

  if (!on) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[63] select-none"
      style={{ color: RED, fontFamily: "var(--font-barlow), ui-sans-serif" }}
    >
      {/* Baseline grid. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(to bottom, transparent 0 23px, ${RED}1f 23px 24px)`,
        }}
      />
      {/* 12 columns, matching the page container. */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-[1440px] -translate-x-1/2 px-4 md:px-6">
        <div className="grid h-full grid-cols-12 gap-6">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              style={{
                background: `${RED}0d`,
                borderInline: `1px solid ${RED}2e`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Crop marks and registration marks. */}
      {(
        [
          "left-3 top-3",
          "right-3 top-3",
          "bottom-3 left-3",
          "right-3 bottom-3",
        ] as const
      ).map((pos, i) => (
        <svg
          key={pos}
          className={`absolute size-6 ${pos}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke={RED}
          strokeWidth="1"
        >
          <path
            d={
              [
                "M0 8H8M8 0V8",
                "M24 8H16M16 0V8",
                "M0 16H8M8 24V16",
                "M24 16H16M16 24V16",
              ][i]
            }
          />
        </svg>
      ))}
      {(
        [
          "left-1/2 top-2 -translate-x-1/2",
          "bottom-2 left-1/2 -translate-x-1/2",
          "left-2 top-1/2 -translate-y-1/2",
          "right-2 top-1/2 -translate-y-1/2",
        ] as const
      ).map((pos) => (
        <svg
          key={pos}
          className={`absolute size-5 ${pos}`}
          viewBox="0 0 20 20"
          fill="none"
          stroke={RED}
          strokeWidth="1"
        >
          <circle cx="10" cy="10" r="5" />
          <path d="M10 0V20M0 10H20" />
        </svg>
      ))}

      {/* Slug line: the job, like the edge of a press proof. */}
      <p className="absolute bottom-3 left-12 hidden text-[10px] tracking-widest uppercase md:block">
        Proof · manas-io · one ink #1d3bd1 on #f3efe6 · Barlow 300 / 400 / 500 ·
        12 col, 24px gutter, 24px baseline
      </p>

      {/* Notes pinned to what's on screen. */}
      {marks.map((m, i) => {
        const labelX = Math.max(12, Math.min(m.x, window.innerWidth - 300));
        const above = m.y > 70;
        const labelY = above ? m.y - 30 : m.y + m.h + 10;
        return (
          <div key={m.key}>
            <div
              className="absolute"
              style={{
                left: m.x - 4,
                top: m.y - 4,
                width: m.w + 8,
                height: m.h + 8,
                border: `1px dashed ${RED}`,
              }}
            />
            <div
              className="absolute max-w-[290px] origin-left text-[11px] leading-tight tracking-wide uppercase"
              style={{
                left: labelX,
                top: labelY,
                transform: `rotate(${i % 2 ? -1.2 : 0.8}deg)`,
                background: "var(--paper)",
                padding: "2px 6px",
                border: `1px solid ${RED}`,
              }}
            >
              <span className="mr-1 font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              {m.note}
            </div>
          </div>
        );
      })}

      {/* The liquid ink gets its own circle and note. */}
      <div
        ref={orbNote}
        className="absolute top-0 left-0 transition-opacity duration-300"
      >
        <div
          className="absolute rounded-full"
          style={{
            width: "calc(var(--r) * 2)",
            height: "calc(var(--r) * 2)",
            left: "calc(var(--r) * -1)",
            top: "calc(var(--r) * -1)",
            border: `1px dashed ${RED}`,
          }}
        />
        <p
          className="absolute w-[230px] text-[11px] leading-tight tracking-wide uppercase"
          style={{
            left: "calc(var(--r) * 0.7)",
            top: "calc(var(--r) * -1 - 26px)",
            background: "var(--paper)",
            padding: "2px 6px",
            border: `1px solid ${RED}`,
            transform: "rotate(-1.5deg)",
          }}
        >
          Liquid ink · metaball shader, a body and four droplets on springs
        </p>
      </div>
    </div>
  );
}
