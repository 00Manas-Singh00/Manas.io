"use client";

import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { NAV_ITEMS, PROFILE, SOCIALS } from "../data";
import { scroller, scrollToId } from "../lib/lenis";
import { isSoundOn, onSoundChange, setSound } from "../lib/sound";
import { PaletteButton } from "./command-palette";
import { RecruiterSwitch } from "./recruiter";
import { RollText } from "./roll-text";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Opt-in sound toggle. Off by default; reads the remembered choice after mount. */
export function SoundSwitch({ className }: { className?: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(isSoundOn());
    return onSoundChange(setOn);
  }, []);
  return (
    <button
      type="button"
      onClick={() => setSound(!on)}
      aria-pressed={on}
      className={cn("group cursor-pointer text-sm uppercase", className)}
    >
      <RollText text={on ? "Sound on" : "Sound off"} />
    </button>
  );
}

export function ThemeSwitch({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  // The theme is only known on the client; render a neutral label until mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const next = resolvedTheme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className={cn("group cursor-pointer text-sm uppercase", className)}
      aria-label={mounted ? `Switch to ${next} theme` : "Toggle theme"}
    >
      <RollText
        text={!mounted ? "Theme" : resolvedTheme === "dark" ? "Light" : "Dark"}
      />
    </button>
  );
}

/** Condensed 64px bar that takes over once the hero menu has scrolled away. */
export function CompactBar({
  visible,
  label,
  onMenu,
}: {
  visible: boolean;
  label: string;
  onMenu: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.header
      initial={false}
      animate={{ y: visible ? 0 : "-110%" }}
      transition={{ duration: reduce ? 0 : 0.9, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur-md"
    >
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-2 items-center gap-6 border-b border-ink px-4 md:grid-cols-[1fr_1fr_auto] md:px-6">
        <button
          type="button"
          onClick={() =>
            scroller.lenis ? scroller.lenis.scrollTo(0) : window.scrollTo(0, 0)
          }
          className="group cursor-pointer justify-self-start text-sm uppercase"
        >
          <RollText text={PROFILE.name} />
        </button>

        {/* One clipped line; every label is stacked absolutely inside it, so however
            many are mid-exit during a fast scroll, only one line can ever show. */}
        <div
          aria-live="polite"
          className="relative hidden h-[1.15em] overflow-hidden text-2xl leading-[1.15] font-light uppercase md:block"
        >
          <AnimatePresence initial={false}>
            <motion.span
              key={label}
              className="absolute inset-x-0 top-0 block whitespace-nowrap"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-110%" }}
              transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-end gap-5">
          <PaletteButton className="hidden lg:block" />
          <RecruiterSwitch className="hidden sm:block" />
          <SoundSwitch className="hidden md:block" />
          <ThemeSwitch className="hidden sm:block" />
          <button
            type="button"
            onClick={onMenu}
            className="group cursor-pointer rounded-full border border-ink px-4 py-1.5 text-sm uppercase transition-transform active:scale-[0.97]"
            aria-haspopup="dialog"
          >
            <RollText text="Menu" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

/** Full-screen navigation sheet: hairlines draw, then the giant links rise. */
export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    scroller.lenis?.stop();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      scroller.lenis?.start();
    };
  }, [open, onClose]);

  const go = (id: string) => {
    onClose();
    // Let the sheet start closing before the page glides.
    window.setTimeout(() => scrollToId(id), 350);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[65] flex flex-col bg-paper px-4 pb-6 md:px-6"
          initial={
            reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }
          }
          animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
          exit={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between text-sm uppercase">
            <span>{PROFILE.name}</span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="group flex cursor-pointer items-center gap-2 rounded-full border border-ink px-4 py-1.5 uppercase"
            >
              <RollText text="Close" />
              <X className="size-4" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="mx-auto mt-[6vh] w-full max-w-[1440px] flex-1">
            <ul>
              {NAV_ITEMS.map((item, i) => (
                <li key={item.id} className="relative">
                  <motion.span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px origin-left bg-ink"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.25 + i * 0.07,
                      ease: EASE,
                    }}
                  />
                  <div className="overflow-hidden">
                    <motion.button
                      type="button"
                      onClick={() => go(item.id)}
                      className="group flex w-full cursor-pointer items-baseline justify-between py-2 text-left"
                      initial={{ y: "105%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "105%" }}
                      transition={{
                        duration: 1,
                        delay: 0.35 + i * 0.07,
                        ease: EASE,
                      }}
                    >
                      <RollText
                        text={item.label.toUpperCase()}
                        className="text-[clamp(3rem,min(11vw,15vh),9.5rem)] font-light"
                      />
                      <span className="text-[clamp(1.25rem,3vw,2.5rem)] font-light">
                        {item.meta}
                      </span>
                    </motion.button>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <motion.div
            className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-ink pt-4 text-sm uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <div className="flex gap-6">
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
            </div>
            <a
              href={PROFILE.resumeHref}
              target="_blank"
              className="group flex items-center gap-1"
            >
              <RollText text="Résumé" />
              <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
