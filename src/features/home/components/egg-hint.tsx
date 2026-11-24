"use client";

import { type ReactNode, useEffect, useState } from "react";

import {
  DESKTOP_ONLY,
  type Egg,
  EGGS,
  foundEggs,
  onEggFound,
  visitNumber,
} from "../lib/eggs";

function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="mx-0.5 inline-block rounded-[3px] border border-current px-1 py-px font-[inherit] text-[0.9em] leading-none tracking-wider normal-case">
      {children}
    </kbd>
  );
}

const HINTS: Record<Egg, ReactNode> = {
  proof: (
    <>
      Hold <Kbd>⇧ Shift</Kbd> to see the grid
    </>
  ),
  riso: (
    <>
      <Kbd>↑↑↓↓←→←→BA</Kbd> for a second ink
    </>
  ),
  ship: <>Type &ldquo;ship it&rdquo; anywhere</>,
  page: <>Keep scrolling past the very end</>,
  cord: <>The theme switch has a cord. Pull it.</>,
};

/** The eggs this device can find: touch visitors only get the ones that work on touch. */
function usePool() {
  const [pool, setPool] = useState<Egg[] | null>(null);
  const [found, setFound] = useState<Set<Egg>>(new Set());
  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    setPool(fine ? EGGS : EGGS.filter((e) => !DESKTOP_ONLY.includes(e)));
    setFound(foundEggs());
    return onEggFound(() => setFound(foundEggs()));
  }, []);
  return { pool, found };
}

/**
 * One quiet line in the footer: a hint at an easter egg this visitor hasn't found yet,
 * a different one each visit. Click it for the next. When one is found it says so for
 * a moment, then moves on.
 */
export function EggHint({ className }: { className?: string }) {
  const { pool, found } = usePool();
  const [turn, setTurn] = useState(0);
  const [justFound, setJustFound] = useState(false);

  useEffect(() => {
    setTurn(visitNumber() - 1);
    return onEggFound(() => setJustFound(true));
  }, []);

  useEffect(() => {
    if (!justFound) return;
    const t = window.setTimeout(() => setJustFound(false), 2800);
    return () => window.clearTimeout(t);
  }, [justFound]);

  if (!pool) return <span className={className} />;
  const left = pool.filter((e) => !found.has(e));
  const n = pool.length - left.length;
  const egg = left.length ? left[turn % left.length] : null;

  const key = justFound ? "found" : (egg ?? "all");
  const text = justFound ? (
    <>
      Found one. {n} of {pool.length}.
    </>
  ) : egg ? (
    HINTS[egg]
  ) : (
    <>All {pool.length} found. Nicely proofread.</>
  );

  return (
    <button
      type="button"
      onClick={() => {
        setJustFound(false);
        if (left.length > 1) setTurn((t) => t + 1);
      }}
      title={left.length > 1 ? "Another hint" : undefined}
      className={`relative cursor-pointer overflow-hidden text-left text-ink uppercase ${className ?? ""}`}
    >
      <span className="mr-2 inline-block rounded-full bg-ink px-2 py-0.5 text-paper">
        Psst
      </span>
      {/* Re-keyed on every change, so the CSS rise replays (globals.css). */}
      <span key={`${key}-${turn}`} className="egg-hint-in inline-block">
        {text}
      </span>
    </button>
  );
}

const SLIP_SEEN = "manas-io:slip";
const SLIP_AFTER_MS = 8000; // time on the page before it appears
const SLIP_FOR_MS = 11000; // how long it stays, unless hovered

/**
 * A paper slip that tucks into the bottom-left corner once per visit, after the
 * visitor has scrolled past the hero and spent a few seconds on the page. It carries
 * one hint, offers another, and leaves on its own (or with ×). If the egg it hints at
 * is found while it's up, it says so and goes.
 */
export function EggSlip() {
  const { pool, found } = usePool();
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);
  const [turn, setTurn] = useState(0);
  const [hold, setHold] = useState(false);
  const [foundNow, setFoundNow] = useState(false);

  // Wait for some reading, then show once per visit.
  useEffect(() => {
    let seen = false;
    try {
      seen = !!sessionStorage.getItem(SLIP_SEEN);
    } catch {}
    if (seen) return;
    const start = performance.now();
    const id = window.setInterval(() => {
      if (performance.now() - start < SLIP_AFTER_MS) return;
      if (window.scrollY < window.innerHeight * 0.8) return;
      window.clearInterval(id);
      try {
        sessionStorage.setItem(SLIP_SEEN, "1");
      } catch {}
      setTurn(visitNumber() - 1);
      setOpen(true);
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  // Leave after a while, unless the pointer is resting on it.
  useEffect(() => {
    if (!open || hold) return;
    const t = window.setTimeout(
      () => setGone(true),
      foundNow ? 1800 : SLIP_FOR_MS,
    );
    return () => window.clearTimeout(t);
  }, [open, hold, foundNow]);

  useEffect(() => {
    if (!open) return;
    return onEggFound(() => setFoundNow(true));
  }, [open]);

  if (!pool || !open) return null;
  const left = pool.filter((e) => !found.has(e));
  if (!left.length && !foundNow) return null;
  const egg = left.length ? left[turn % left.length] : null;

  return (
    <aside
      aria-label="A hint"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onAnimationEnd={(e) =>
        e.animationName === "egg-slip-out" && setOpen(false)
      }
      className={`fixed bottom-16 left-4 z-[57] w-[min(320px,calc(100vw-2rem))] border border-ink bg-paper p-4 text-ink shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] md:left-6 ${gone ? "egg-slip-out" : "egg-slip-in"}`}
    >
      <div className="flex items-center justify-between text-[10px] tracking-widest uppercase">
        <span className="rounded-full bg-ink px-2 py-0.5 text-paper">Psst</span>
        <button
          type="button"
          onClick={() => setGone(true)}
          aria-label="Dismiss the hint"
          className="-m-2 cursor-pointer p-2 text-sm leading-none"
        >
          ×
        </button>
      </div>
      <p className="mt-3 text-lg leading-snug uppercase">
        {foundNow ? "Found it. Nicely done." : egg && HINTS[egg]}
      </p>
      <div className="mt-3 flex items-center justify-between border-t border-ink pt-2 text-[10px] tracking-widest uppercase">
        <span>A secret on this page</span>
        {!foundNow && left.length > 1 && (
          <button
            type="button"
            onClick={() => setTurn((t) => t + 1)}
            className="cursor-pointer underline underline-offset-2"
          >
            Another hint
          </button>
        )}
      </div>
    </aside>
  );
}

/** For the colophon: how many have been found, and a nudge toward the next. */
export function EggTally() {
  const { pool, found } = usePool();
  if (!pool) return null;
  const left = pool.filter((e) => !found.has(e));
  const n = pool.length - left.length;
  return (
    <>
      Easter eggs found: {n} of {pool.length}.{" "}
      {left.length ? (
        <span className="text-ink-soft">Next: {HINTS[left[0]]}</span>
      ) : (
        <span className="text-ink-soft">
          Every one. Thank you for reading so closely.
        </span>
      )}
    </>
  );
}
