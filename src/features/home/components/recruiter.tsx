"use client";

import { ArrowUpRight, Check, Copy, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  CAPABILITY_WORDS,
  HIGHLIGHTS,
  PROFILE,
  PROJECTS,
  SOCIALS,
} from "../data";
import { decodeEmail, scroller } from "../lib/lenis";
import {
  isRecruiterOpen,
  onRecruiterChange,
  readRecruiterFromUrl,
  setRecruiter,
} from "../lib/recruiter";
import { Figures } from "./figures";
import { InkLink } from "./ink-link";
import { RollText } from "./roll-text";

const EASE = [0.16, 1, 0.3, 1] as const;

/** The toggle, for the hero band and the compact bar. */
export function RecruiterSwitch({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => setRecruiter(true)}
      className={cn("group cursor-pointer text-sm uppercase", className)}
    >
      <RollText text="Recruiter view" />
    </button>
  );
}

/**
 * Everything a recruiter needs on one calm screen: who, the proof in four numbers, the
 * projects with links to their case studies, the stack, and every way to get in touch.
 * No scroll effects, no animation beyond the sheet arriving.
 */
export function RecruiterView() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const off = onRecruiterChange(setOpen);
    readRecruiterFromUrl();
    setOpen(isRecruiterOpen());
    return off;
  }, []);

  useEffect(() => {
    if (!open) return;
    scroller.lenis?.stop();
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setRecruiter(false);
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

  const github = SOCIALS.find((s) => s.label === "GitHub");
  const linkedin = SOCIALS.find((s) => s.label === "LinkedIn");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Recruiter view"
          data-lenis-prevent
          className="fixed inset-0 z-[64] overflow-y-auto bg-paper text-ink"
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
        >
          <div className="mx-auto flex min-h-full max-w-[1440px] flex-col px-4 py-4 md:px-6 md:py-6">
            <div className="flex items-center justify-between border-b border-ink pb-2 text-xs uppercase md:text-sm">
              <span>Recruiter view /10 seconds/</span>
              <button
                type="button"
                autoFocus
                onClick={() => setRecruiter(false)}
                className="group flex cursor-pointer items-center gap-2 rounded-full border border-ink px-4 py-1.5 uppercase"
              >
                <RollText text="Full site" />
                <X className="size-4" strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-8 grid flex-1 gap-10 md:mt-10 md:grid-cols-12 md:gap-6">
              {/* Who */}
              <div className="md:col-span-5">
                <h2 className="text-[clamp(3rem,7vw,6.5rem)] leading-[0.88] font-light uppercase">
                  {PROFILE.name}
                </h2>
                <p className="mt-4 text-lg md:text-xl">
                  {PROFILE.role}, {PROFILE.company}
                </p>
                <p className="mt-3 max-w-[44ch] text-base leading-relaxed text-ink-soft">
                  Full-stack, forward-deployed engineer. I sit with the problem,
                  then ship the fix.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={PROFILE.resumeHref}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-base text-paper uppercase transition-transform active:scale-[0.97]"
                  >
                    Résumé (PDF)
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
                      } catch {
                        window.location.href = `mailto:${decodeEmail(PROFILE.emailB64)}`;
                      }
                    }}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink px-6 py-3 text-base uppercase transition-colors duration-500 hover:bg-ink hover:text-paper"
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
                <div className="mt-4 flex gap-6 text-sm uppercase">
                  {[linkedin, github].map(
                    (s) =>
                      s && (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group"
                        >
                          <RollText text={s.label} />
                        </a>
                      ),
                  )}
                </div>
              </div>

              {/* Proof */}
              <div className="md:col-span-7">
                <ul>
                  {HIGHLIGHTS.map((h) => (
                    <li
                      key={h.value}
                      className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1 border-t border-ink py-3"
                    >
                      <span className="text-[clamp(2rem,4.2vw,3.75rem)] leading-none font-light tabular-nums">
                        <Figures text={h.value} />
                      </span>
                      <span className="max-w-[34ch] pb-1 text-right text-sm text-ink-soft">
                        {h.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-10 border-b border-ink pb-2 text-xs uppercase md:text-sm">
                  Case studies
                </h3>
                <ul>
                  {PROJECTS.map((p) => (
                    <li key={p.id} className="border-b border-ink/30">
                      <InkLink
                        href={`/projects/${p.id}`}
                        onClick={() => setRecruiter(false)}
                        className="group flex items-center justify-between gap-4 py-3"
                      >
                        <span>
                          <span className="text-xl uppercase md:text-2xl">
                            {p.title}
                          </span>
                          <span className="ml-3 text-sm text-ink-soft">
                            {p.caption}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="size-5 shrink-0 transition-transform duration-500 group-hover:rotate-45"
                          strokeWidth={1.25}
                        />
                      </InkLink>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-ink-soft uppercase">
                  Stack: {CAPABILITY_WORDS.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
