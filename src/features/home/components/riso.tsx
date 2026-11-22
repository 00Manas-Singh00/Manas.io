"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { play } from "../lib/sound";

const CODE = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

/** True while riso mode is on (html.riso). For components that colour in JS. */
export function useRiso() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const read = () =>
      setOn(document.documentElement.classList.contains("riso"));
    read();
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => mo.disconnect();
  }, []);
  return on;
}

/**
 * Easter egg: the Konami code turns the site into a two-ink risograph print (riso blue
 * plus fluorescent pink, off-white stock, heavy grain, the pink plate slightly out of
 * register). The same code, the stamp's button, or a reload turns it off.
 */
export function RisoMode() {
  const reduce = useReducedMotion();
  const on = useRiso();

  useEffect(() => {
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (
        t?.isContentEditable ||
        /^(input|textarea|select)$/i.test(t?.tagName ?? "")
      )
        return;
      const key = e.key.toLowerCase();
      i = key === CODE[i] ? i + 1 : key === CODE[0] ? 1 : 0;
      if (i === CODE.length) {
        i = 0;
        document.documentElement.classList.toggle("riso");
        play("turn");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {on && (
        <motion.div
          role="status"
          className="fixed bottom-6 left-1/2 z-[58] flex -translate-x-1/2 items-center gap-3 rounded-full border border-ink bg-paper px-4 py-1.5 text-xs uppercase"
          initial={{ y: 30, opacity: 0, rotate: reduce ? 0 : -6 }}
          animate={{ y: 0, opacity: 1, rotate: reduce ? 0 : -2 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-medium tracking-wider">Riso mode</span>
          <span aria-hidden>·</span>
          <button
            type="button"
            onClick={() => document.documentElement.classList.remove("riso")}
            className="cursor-pointer underline underline-offset-2"
          >
            Back to one ink
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
