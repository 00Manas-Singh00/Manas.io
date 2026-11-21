"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

import { ScrollTrigger, useGSAP } from "../lib/gsap";

const EASE = [0.16, 1, 0.3, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The visit as one print run: a counter of sections printed so far, bottom left, and a
 * registration mark that travels down the right edge with overall reading progress.
 */
export function Press({
  visible,
  index,
  total,
}: {
  visible: boolean;
  index: number;
  total: number;
}) {
  const reduce = useReducedMotion();
  const mark = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const el = mark.current;
        if (!el) return;
        const travel = window.innerHeight - el.offsetHeight - 32;
        el.style.transform = `translateY(${16 + self.progress * travel}px)`;
      },
    });
    return () => st.kill();
  });

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-[55] hidden transition-opacity duration-700 md:block",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="absolute bottom-6 left-6 flex items-end gap-2 text-xs uppercase">
        <span>Printed</span>
        <span className="relative inline-block h-[1.2em] w-[2ch] overflow-hidden leading-[1.2] tabular-nums">
          <AnimatePresence initial={false}>
            <motion.span
              key={index}
              className="absolute inset-0"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-110%" }}
              transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
            >
              {pad(index)}
            </motion.span>
          </AnimatePresence>
        </span>
        <span>/ {pad(total)}</span>
      </div>

      {/* Registration mark: a crosshair in a circle, as on a press sheet. */}
      <div
        ref={mark}
        className="absolute top-0 right-3 size-5 will-change-transform"
      >
        <svg viewBox="0 0 20 20" className="size-full" fill="none">
          <circle
            cx="10"
            cy="10"
            r="5.5"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M10 0v20M0 10h20" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
