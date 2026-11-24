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
      className={`relative cursor-pointer overflow-hidden text-left text-ink-soft uppercase transition-colors hover:text-ink ${className ?? ""}`}
    >
      <span className="mr-1">Psst:</span>
      {/* Re-keyed on every change, so the CSS rise replays (globals.css). */}
      <span key={`${key}-${turn}`} className="egg-hint-in inline-block">
        {text}
      </span>
    </button>
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
