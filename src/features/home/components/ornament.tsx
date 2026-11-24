"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

/**
 * Printer's ornaments between sections, set in the page's one ink. Each draws itself
 * stroke by stroke the first time it comes into view: the rules run out from the
 * centre, then the device in the middle is drawn.
 */
const SHAPES = {
  // A lozenge with a dot, on a rule.
  lozenge: [
    "M100 20 H12",
    "M100 20 H188",
    "M100 6 L114 20 L100 34 L86 20 Z",
    "M100 17.5 a2.5 2.5 0 1 0 0.01 0",
  ],
  // A four-petal flower, between short rules.
  flower: [
    "M78 20 H28",
    "M122 20 H172",
    "M100 20 C94 13 95 5 100 2 C105 5 106 13 100 20",
    "M100 20 C107 14 115 15 118 20 C115 25 107 26 100 20",
    "M100 20 C106 27 105 35 100 38 C95 35 94 27 100 20",
    "M100 20 C93 26 85 25 82 20 C85 15 93 14 100 20",
  ],
  // An asterism: three stars set as a triangle.
  asterism: [
    "M70 20 H24",
    "M130 20 H176",
    "M100 6 V18 M94.8 9 L105.2 15 M94.8 15 L105.2 9",
    "M90 22 V34 M84.8 25 L95.2 31 M84.8 31 L95.2 25",
    "M110 22 V34 M104.8 25 L115.2 31 M104.8 31 L115.2 25",
  ],
} as const;

export function Ornament({ kind }: { kind: keyof typeof SHAPES }) {
  const ref = useRef<SVGSVGElement>(null);
  const reduce = useReducedMotion();
  const seen = useInView(ref, { once: true, amount: 1 });
  const drawn = seen || reduce;

  return (
    <div aria-hidden className="relative z-10 flex justify-center px-4 py-2">
      <svg
        ref={ref}
        viewBox="0 0 200 40"
        className="h-8 w-[200px] overflow-visible text-ink md:h-10 md:w-[260px]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {SHAPES[kind].map((d, i) => (
          <path
            key={i}
            d={d}
            pathLength={1}
            vectorEffect="non-scaling-stroke"
            style={{
              strokeDasharray: 1,
              strokeDashoffset: drawn ? 0 : 1,
              transition: reduce
                ? "none"
                : `stroke-dashoffset ${i < 2 ? 0.9 : 0.7}s cubic-bezier(0.65, 0, 0.35, 1) ${i < 2 ? 0 : 0.5 + (i - 2) * 0.18}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
