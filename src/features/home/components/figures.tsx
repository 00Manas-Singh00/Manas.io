"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { play } from "../lib/sound";

const NUM = /\d[\d,.]*/g;
const SPINS = 2; // full turns each wheel makes before it lands
const DIGITS = "0123456789".repeat(SPINS + 1).split("");
const REEL = DIGITS.join("\n");

/**
 * Text whose figures roll into place like a numbering machine: each digit is a wheel
 * that spins twice and lands, left to right, the first time it comes into view. The
 * wheels rest on the right digit before and after, so nothing is ever wrong on screen.
 * The real digits stay in the text (transparent, under the wheels), so screen readers,
 * selection and copy all get the plain sentence.
 */
export function Figures({ text }: { text: string }) {
  const parts: (string | { n: string })[] = [];
  let last = 0;
  for (const m of text.matchAll(NUM)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push({ n: m[0] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? p : <Wheels key={i} value={p.n} />,
      )}
    </>
  );
}

// The real digit: holds the width and baseline, and is what gets read and copied.
const HIDDEN_INK = {
  color: "transparent",
  WebkitTextFillColor: "transparent",
  backgroundImage: "none",
} as const;

function Wheels({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const seen = useInView(ref, { once: true, amount: 1 });
  const [rolled, setRolled] = useState(false);

  useEffect(() => {
    if (!seen || reduce) return;
    // One frame at rest first, so the transition has somewhere to start from.
    const id = requestAnimationFrame(() => setRolled(true));
    return () => cancelAnimationFrame(id);
  }, [seen, reduce]);

  const chars = value.split("");
  const digitCount = chars.filter((c) => /\d/.test(c)).length;
  let d = -1;

  return (
    <span ref={ref} className="tabular-nums whitespace-nowrap">
      {chars.map((c, i) => {
        if (!/\d/.test(c)) return <span key={i}>{c}</span>;
        d++;
        const n = Number(c);
        const at = rolled ? SPINS * 10 + n : n;
        const isLast = d === digitCount - 1;
        return (
          // The wheel is the ::before of .reel (globals.css), drawn from data-reel:
          // generated content, so it is never selected, copied or read out.
          <span
            key={i}
            className="reel"
            data-reel={REEL}
            style={
              {
                "--at": at,
                "--reel-t": rolled
                  ? `transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${d * 0.09}s`
                  : "none",
              } as React.CSSProperties
            }
            onTransitionEnd={isLast ? () => play("tick") : undefined}
          >
            <span style={HIDDEN_INK}>{c}</span>
          </span>
        );
      })}
    </span>
  );
}
