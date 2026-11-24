"use client";

import { Scissors } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { PROFILE } from "../data";
import { decodeEmail } from "../lib/lenis";
import { play } from "../lib/sound";

const TEAR_AT = 70; // px of pull before the perforation gives

type Phase = "rest" | "pulling" | "torn" | "falling" | "reprint";

/**
 * A coupon at the foot of the contact section. Pull it away from its stub and it tears
 * along the perforation, follows the pointer as a loose slip, and copies the email
 * address on the way. Let go and it falls; a fresh coupon is printed in its place.
 * A click, tap or Enter tears it too.
 */
export function TearCoupon() {
  const reduce = useReducedMotion();
  const slip = useRef<HTMLButtonElement>(null);
  const [phase, setPhase] = useState<Phase>("rest");
  const [note, setNote] = useState("");
  const s = useRef({
    phase: "rest" as Phase,
    x0: 0,
    y0: 0,
    x: 0,
    y: 0,
    r: 0,
    vx: 0,
    vy: 0,
    vr: 0,
    lx: 0,
    ly: 0,
    moved: false,
  });

  const set = (p: Phase) => {
    s.current.phase = p;
    setPhase(p);
  };

  const paint = () => {
    const el = slip.current;
    if (!el) return;
    const { x, y, r } = s.current;
    el.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
  };

  const copy = async () => {
    const email = decodeEmail(PROFILE.emailB64);
    try {
      await navigator.clipboard.writeText(email);
      setNote("Email copied. Paste it anywhere.");
    } catch {
      // No clipboard (or the gesture expired mid-drag): show it instead.
      setNote(email);
    }
  };

  const tear = () => {
    set("torn");
    play("tear");
    void copy();
  };

  // Gravity once released; then reprint.
  const fall = () => {
    set("falling");
    if (reduce) {
      Object.assign(s.current, { x: 0, y: 0, r: 0 });
      paint();
      set("reprint");
      return;
    }
    let last = performance.now();
    const step = (now: number) => {
      const st = s.current;
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      st.vy += 2600 * dt;
      st.vx *= 0.99;
      st.x += st.vx * dt;
      st.y += st.vy * dt;
      st.r += st.vr * dt;
      paint();
      const top = slip.current?.getBoundingClientRect().top ?? 0;
      if (top < window.innerHeight + 80) requestAnimationFrame(step);
      else {
        Object.assign(st, { x: 0, y: 0, r: 0, vx: 0, vy: 0, vr: 0 });
        paint();
        // Hidden until the new one prints in from the stub.
        if (slip.current) slip.current.style.clipPath = "inset(0 100% 0 0)";
        set("reprint");
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (phase !== "reprint") return;
    const t = window.setTimeout(() => {
      if (slip.current) slip.current.style.clipPath = "";
      set("rest");
    }, 700);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (!note) return;
    const t = window.setTimeout(() => setNote(""), 2600);
    return () => window.clearTimeout(t);
  }, [note]);

  const onDown = (e: React.PointerEvent) => {
    if (s.current.phase !== "rest") return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    Object.assign(s.current, {
      x0: e.clientX,
      y0: e.clientY,
      lx: e.clientX,
      ly: e.clientY,
      moved: false,
    });
    set("pulling");
  };

  const onMove = (e: React.PointerEvent) => {
    const st = s.current;
    if (st.phase !== "pulling" && st.phase !== "torn") return;
    const dx = e.clientX - st.x0;
    const dy = e.clientY - st.y0;
    if (Math.hypot(dx, dy) > 4) st.moved = true;
    if (st.phase === "pulling") {
      // Still attached: it gives a little and leans on the perforation.
      st.x = dx * 0.25;
      st.y = dy * 0.25;
      st.r = Math.max(-5, Math.min(5, dy * 0.06));
      if (Math.hypot(dx, dy) > TEAR_AT) tear();
    } else {
      // Loose: follows the pointer and swings with its speed.
      st.vx = (e.clientX - st.lx) * 60;
      st.vy = (e.clientY - st.ly) * 60;
      st.x = dx;
      st.y = dy;
      st.r += (st.vx * 0.006 - st.r) * 0.2;
      st.vr = st.vx * 0.05;
    }
    st.lx = e.clientX;
    st.ly = e.clientY;
    paint();
  };

  const onUp = () => {
    const st = s.current;
    if (st.phase === "torn") return fall();
    if (st.phase !== "pulling") return;
    if (!st.moved) {
      // A click: tear it off cleanly and let it drop.
      tear();
      Object.assign(st, { vx: 120, vy: -380, vr: 90 });
      return fall();
    }
    Object.assign(st, { x: 0, y: 0, r: 0 });
    paint();
    set("rest");
  };

  const loose = phase === "torn" || phase === "falling";

  return (
    <div className="mt-10">
      <div className="flex w-full max-w-[460px] items-stretch select-none">
        {/* The stub stays behind. */}
        <div className="flex w-14 shrink-0 flex-col items-center justify-center gap-2 border border-r-0 border-dashed border-ink py-3">
          <Scissors className="size-4 -rotate-90" strokeWidth={1.5} />
          <span className="text-[10px] tracking-widest uppercase [writing-mode:vertical-rl]">
            Tear here
          </span>
        </div>
        {/* The perforation. */}
        <span
          aria-hidden
          className="w-px shrink-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, var(--ink) 50%, transparent 50%)",
            backgroundSize: "1px 6px",
            opacity: loose ? 0.35 : 1,
          }}
        />
        <button
          ref={slip}
          type="button"
          aria-label="Tear off the coupon to copy my email address"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onKeyDown={(e) => {
            if (e.key !== "Enter" && e.key !== " ") return;
            e.preventDefault();
            if (s.current.phase !== "rest") return;
            tear();
            Object.assign(s.current, { vx: 120, vy: -380, vr: 90 });
            fall();
          }}
          className="relative z-[58] flex flex-1 cursor-grab touch-none flex-col gap-1 border border-l-0 border-dashed border-ink px-5 py-4 text-left active:cursor-grabbing"
          style={{
            background: "var(--paper)",
            boxShadow: loose ? "0 14px 30px -12px rgba(0,0,0,0.35)" : "none",
            animation:
              phase === "reprint" && !reduce
                ? "coupon-print 0.7s cubic-bezier(0.16,1,0.3,1) both"
                : undefined,
            transition:
              phase === "pulling" || loose ? "none" : "transform 0.5s",
          }}
        >
          <span className="flex justify-between text-[10px] tracking-widest uppercase">
            <span>Admit one conversation</span>
            <span>No. 001</span>
          </span>
          <span className="text-2xl leading-none font-light uppercase">
            {PROFILE.name}
          </span>
          <span className="text-xs uppercase">Pull to tear off my email</span>
        </button>
      </div>
      <p aria-live="polite" className="mt-2 h-4 text-xs uppercase">
        {note}
      </p>
    </div>
  );
}
