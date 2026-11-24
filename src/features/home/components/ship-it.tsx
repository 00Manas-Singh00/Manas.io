"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { PROJECTS } from "../data";
import { markFound } from "../lib/eggs";
import { scroller } from "../lib/lenis";
import { play } from "../lib/sound";

const EASE = [0.16, 1, 0.3, 1] as const;
const SECRET = "shipit";

function isTyping(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  return (
    !!el &&
    (el.isContentEditable || /^(input|textarea|select)$/i.test(el.tagName))
  );
}

/**
 * Easter egg: type "ship it" anywhere and the page becomes a release log for a moment,
 * tagging a version, shipping every project in turn, then stamping SHIPPED.
 */
export function ShipIt() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let buffer = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setOpen(false);
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      if (!/^[a-z]$/i.test(e.key)) return; // spaces and punctuation are ignored
      buffer = (buffer + e.key.toLowerCase()).slice(-SECRET.length);
      if (buffer === SECRET) {
        buffer = "";
        markFound("ship");
        setOpen(true);
      }
    };
    // The command palette can trigger it too.
    const onShip = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("ship-it", onShip);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("ship-it", onShip);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    scroller.lenis?.stop();
    const t = window.setTimeout(() => setOpen(false), reduce ? 4000 : 6200);
    // A tick as each log line lands (only if sound is on).
    const ticks = Array.from({ length: PROJECTS.length + 3 }, (_, i) =>
      window.setTimeout(
        () => play("tick"),
        (0.5 + i * (reduce ? 0 : 0.32)) * 1000,
      ),
    );
    return () => {
      window.clearTimeout(t);
      ticks.forEach(window.clearTimeout);
      scroller.lenis?.start();
    };
  }, [open, reduce]);

  const now = new Date();
  const tag = `v${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}`;
  const lines = [
    `$ git tag -a ${tag} -m "everything, end to end"`,
    ...PROJECTS.map(
      (p, i) =>
        `  [${i + 1}/${PROJECTS.length}] ${p.title} ... shipped (${p.year})`,
    ),
    "$ git push --follow-tags",
    "  deployed. no rollbacks needed.",
  ];
  const step = reduce ? 0 : 0.32;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Release notes"
          className="fixed inset-0 z-[67] flex cursor-pointer flex-col justify-between bg-paper p-4 text-ink md:p-6"
          onClick={() => setOpen(false)}
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
          transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
        >
          <div className="flex justify-between border-b border-ink pb-2 text-xs uppercase md:text-sm">
            <span>Release notes</span>
            <span>Esc to close</span>
          </div>

          <ol className="font-mono text-sm leading-relaxed md:text-lg">
            {lines.map((line, i) => (
              <motion.li
                key={line}
                className="whitespace-pre-wrap"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5 + i * step,
                  duration: 0.4,
                  ease: EASE,
                }}
              >
                {line}
              </motion.li>
            ))}
          </ol>

          <div className="overflow-hidden">
            <motion.p
              className="text-[clamp(4.5rem,18vw,17rem)] leading-[0.8] font-light uppercase"
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: 0.6 + lines.length * step,
                duration: 0.9,
                ease: EASE,
              }}
            >
              Shipped.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
