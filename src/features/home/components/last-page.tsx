"use client";

import { ArrowUpRight, Check, Copy, Undo2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { PROFILE, SOCIALS } from "../data";
import { markFound } from "../lib/eggs";
import { decodeEmail, scroller } from "../lib/lenis";
import { play } from "../lib/sound";
import { EggTally } from "./egg-hint";
import { RollText } from "./roll-text";

const EASE = [0.16, 1, 0.3, 1] as const;
const CORNER = 34; // resting dog-ear, px
const CURL = 230; // extra curl at full pull, px
const PULL_PX = 420; // how far past the end you pull to turn the page

// The real scroll position: Lenis's own progress can trail it by a frame or two.
function atEnd() {
  return (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 4
  );
}

/**
 * Turn the last page. A dog-eared corner fades in near the end of the page. Pulling
 * past the end (wheel or touch) curls it further, and far enough turns the page over
 * to its back: a printer's colophon with the contact details and how the site was
 * made. The corner is also a button, so a click, tap or Enter turns it too.
 */
export function LastPage() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [near, setNear] = useState(false);
  const [copied, setCopied] = useState(false);
  const corner = useRef<HTMLButtonElement>(null);
  const pull = useRef(0); // 0..1
  const lastInput = useRef(0);

  // Show the corner near the end of the page.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const l = scroller.lenis;
      const p = l
        ? l.progress
        : (window.scrollY + window.innerHeight) /
          document.documentElement.scrollHeight;
      setNear((n) => (n !== p > 0.9 ? p > 0.9 : n));

      // Let go and the corner relaxes back.
      if (performance.now() - lastInput.current > 160 && pull.current > 0) {
        pull.current = Math.max(0, pull.current - 0.04);
      }
      const el = corner.current;
      if (el) {
        const s = CORNER + CURL * pull.current;
        el.style.width = `${s}px`;
        el.style.height = `${s}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Pull past the end: wheel down, or drag up on touch.
  useEffect(() => {
    if (open) return;
    let touchY: number | null = null;
    const add = (px: number) => {
      lastInput.current = performance.now();
      pull.current = Math.min(1, pull.current + px / PULL_PX);
      if (pull.current >= 1) {
        pull.current = 0;
        setOpen(true);
      }
    };
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && atEnd()) add(Math.min(e.deltaY, 80));
    };
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY;
      if (touchY === null || y === undefined) return;
      const dy = touchY - y;
      touchY = y;
      if (dy > 0 && atEnd()) add(dy * 1.4);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    play("turn");
    markFound("page");
    scroller.lenis?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      scroller.lenis?.start();
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  // The fold sweeps diagonally from the bottom-right corner across the screen.
  const sweep = (x: string) =>
    `polygon(100% calc(100% - ${x}), 100% 100%, calc(100% - ${x}) 100%)`;
  const full = "300vmax";

  return (
    <>
      {/* The dog-ear: the page's corner folded over, showing what's beneath. */}
      <button
        ref={corner}
        type="button"
        aria-label="Turn the last page"
        onClick={() => setOpen(true)}
        className="fixed right-0 bottom-0 z-[57] cursor-pointer transition-opacity duration-500"
        style={{
          width: CORNER,
          height: CORNER,
          opacity: near && !open ? 1 : 0,
          pointerEvents: near && !open ? "auto" : "none",
        }}
      >
        {/* Beneath the sheet: the ink. */}
        <span
          aria-hidden
          className="absolute inset-0 bg-ink"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        />
        {/* The flap: the paper's back, darker in the fold, casting a shadow. */}
        <span
          aria-hidden
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 100%, 100% 0, 0 0)",
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--paper) 92%, #fff) 30%, color-mix(in oklab, var(--paper) 80%, #000) 100%)",
            filter: "drop-shadow(-3px -3px 6px rgba(0,0,0,0.25))",
            transformOrigin: "100% 100%",
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Colophon"
            data-lenis-prevent
            className="fixed inset-0 z-[67] overflow-y-auto text-ink"
            style={{
              background: "color-mix(in oklab, var(--paper) 94%, #000)",
            }}
            initial={{ clipPath: reduce ? sweep(full) : sweep(`${CORNER}px`) }}
            animate={{ clipPath: sweep(full) }}
            exit={{
              clipPath: reduce ? sweep(full) : sweep("0px"),
              opacity: reduce ? 0 : 1,
            }}
            transition={{
              duration: reduce ? 0.2 : 1.05,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            <motion.div
              className="mx-auto flex min-h-full max-w-[1440px] flex-col px-4 py-4 md:px-6 md:py-6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: reduce ? 0 : 0.6,
                  duration: 0.6,
                  ease: EASE,
                },
              }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center justify-between border-b border-ink pb-2 text-xs uppercase md:text-sm">
                <span>The back of the sheet</span>
                <button
                  type="button"
                  autoFocus
                  onClick={() => setOpen(false)}
                  className="group flex cursor-pointer items-center gap-2 rounded-full border border-ink px-4 py-1.5 uppercase"
                >
                  <RollText text="Turn back" />
                  <Undo2 className="size-4" strokeWidth={1.5} />
                </button>
              </div>

              <div className="grid flex-1 content-center gap-10 py-12 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-7">
                  <p className="text-xs uppercase md:text-sm">Colophon</p>
                  <h2 className="mt-3 text-[clamp(3rem,8vw,7.5rem)] leading-[0.86] font-light uppercase">
                    {PROFILE.name}
                  </h2>
                  <p className="mt-4 max-w-[46ch] text-lg leading-relaxed md:text-xl">
                    Full-stack, forward-deployed engineer. If you read this far,
                    we should probably talk.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `mailto:${decodeEmail(PROFILE.emailB64)}`;
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-paper uppercase"
                    >
                      Write to me
                      <ArrowUpRight className="size-4" strokeWidth={1.5} />
                    </a>
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(
                            decodeEmail(PROFILE.emailB64),
                          );
                          setCopied(true);
                        } catch {}
                      }}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink px-6 py-3 uppercase"
                    >
                      {copied ? "Copied" : "Copy email"}
                      {copied ? (
                        <Check className="size-4" strokeWidth={1.5} />
                      ) : (
                        <Copy className="size-4" strokeWidth={1.5} />
                      )}
                    </button>
                    <span className="sr-only" aria-live="polite">
                      {copied ? "Email address copied" : ""}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-6 text-sm uppercase">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group"
                      >
                        <RollText text={s.label} />
                      </a>
                    ))}
                    <a
                      href={PROFILE.resumeHref}
                      target="_blank"
                      className="group"
                    >
                      <RollText text="Résumé" />
                    </a>
                  </div>
                </div>

                {/* How the sheet was made, set like the colophon of a book. */}
                <dl className="grid content-start gap-4 border-t border-ink pt-4 text-sm md:col-span-4 md:col-start-9">
                  {[
                    ["Typeface", "Barlow, in 300, 400 and 500"],
                    ["Ink", "One: #1d3bd1. Riso blue and pink on request."],
                    ["Stock", "One: #f3efe6, warming through the day"],
                    ["Press", "Next.js, GSAP, three.js and a lot of Fridays"],
                    ["Run", "Printed fresh for every visit"],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[7rem_1fr] gap-3">
                      <dt className="uppercase text-ink-soft">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="border-t border-ink pt-2 text-xs uppercase">
                <EggTally />
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
