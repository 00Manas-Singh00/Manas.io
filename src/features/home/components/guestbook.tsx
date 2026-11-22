"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { play } from "../lib/sound";

type Stamp = { i: string; n: number; t: number; r: number };

const EASE = [0.16, 1, 0.3, 1] as const;

function Seal({ s, fresh }: { s: Stamp; fresh?: boolean }) {
  const reduce = useReducedMotion();
  // Ink density varies a little per stamp, like a real hand stamp.
  const density = 0.72 + ((s.n * 37) % 25) / 100;
  return (
    <motion.li
      layout={!reduce}
      className="relative grid size-[76px] shrink-0 place-items-center rounded-full border-[2.5px] border-ink text-ink mix-blend-multiply dark:mix-blend-screen"
      style={{ rotate: s.r, opacity: density }}
      initial={fresh && !reduce ? { scale: 2.4, opacity: 0, y: -40 } : false}
      animate={{ scale: 1, opacity: density, y: 0 }}
      transition={{ duration: 0.45, ease: [0.5, 0, 0.75, 0] }}
      title={`No. ${s.n}, ${new Date(s.t).toLocaleDateString()}`}
    >
      <span className="absolute inset-[5px] rounded-full border border-ink/60" />
      <span className="text-2xl leading-none font-medium tracking-wide">
        {s.i}
      </span>
      <span className="absolute bottom-[11px] text-[8px] tracking-widest">
        No. {String(s.n).padStart(4, "0")}
      </span>
    </motion.li>
  );
}

/**
 * "Sign the press": visitors stamp their initials onto a shared sheet. Fetched when the
 * section comes near; hidden entirely if the store isn't configured (the API says so).
 */
export function Guestbook() {
  const reduce = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<{
    enabled: boolean;
    stamps: Stamp[];
    total: number;
  } | null>(null);
  const [initials, setInitials] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mine, setMine] = useState<number | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        fetch("/api/stamps")
          .then((r) => r.json())
          .then(setState)
          .catch(() => setState({ enabled: false, stamps: [], total: 0 }));
      },
      { rootMargin: "50% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = initials.trim().toUpperCase();
    if (!/^[A-Z]{1,3}$/.test(value)) {
      setError("Use 1 to 3 letters, A to Z.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/stamps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initials: value }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "The press jammed.");
      const stamp = body.stamp as Stamp;
      setMine(stamp.n);
      setState((s) =>
        s ? { ...s, stamps: [stamp, ...s.stamps], total: stamp.n } : s,
      );
      setInitials("");
      play("click");
    } catch (err) {
      setError(err instanceof Error ? err.message : "The press jammed.");
    } finally {
      setBusy(false);
    }
  };

  // Not configured (or unreachable): render nothing but the sentinel.
  if (!state?.enabled) return <div ref={root} aria-hidden />;

  return (
    <div ref={root} className="mt-16 border-t border-ink pt-4">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h3 className="text-[clamp(1.75rem,3.2vw,2.75rem)] leading-none font-light uppercase">
            Sign the press
          </h3>
          <p className="mt-2 max-w-[44ch] text-sm text-ink-soft">
            Leave your initials on the sheet. {state.total.toLocaleString()}{" "}
            {state.total === 1 ? "visitor has" : "visitors have"} so far.
          </p>
        </div>

        <form onSubmit={submit} className="flex items-start gap-3">
          <div>
            <label htmlFor="stamp-initials" className="sr-only">
              Your initials
            </label>
            <input
              id="stamp-initials"
              value={initials}
              onChange={(e) => {
                setInitials(
                  e.target.value
                    .replace(/[^a-z]/gi, "")
                    .slice(0, 3)
                    .toUpperCase(),
                );
                setError(null);
              }}
              placeholder="ABC"
              autoComplete="off"
              aria-invalid={!!error}
              aria-describedby={error ? "stamp-error" : undefined}
              className="w-[5.5ch] rounded-full border border-ink bg-transparent px-4 py-2 text-center text-lg tracking-widest uppercase outline-none placeholder:text-ink-soft/50 focus-visible:ring-1 focus-visible:ring-ink"
            />
            {error && (
              <p id="stamp-error" className="mt-1 text-xs text-ink">
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={busy}
            className={cn(
              "cursor-pointer rounded-full bg-ink px-6 py-2.5 text-paper uppercase transition-transform active:scale-[0.96]",
              busy && "opacity-60",
            )}
          >
            {busy ? "Pressing…" : "Stamp"}
          </button>
        </form>
      </div>

      <ul
        aria-label="Stamps left by visitors"
        className="mt-6 flex flex-wrap gap-x-3 gap-y-4 overflow-hidden"
        style={{ maxHeight: 76 * 3 + 16 * 2 + 8 }}
      >
        <AnimatePresence initial={false}>
          {state.stamps.map((s) => (
            <Seal key={s.n} s={s} fresh={s.n === mine} />
          ))}
        </AnimatePresence>
      </ul>
      {mine && (
        <motion.p
          role="status"
          className="mt-3 text-xs uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
        >
          Pressed. You&apos;re impression No. {String(mine).padStart(4, "0")}.
        </motion.p>
      )}
    </div>
  );
}
