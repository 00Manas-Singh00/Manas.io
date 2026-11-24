"use client";

import { useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { markFound } from "../lib/eggs";
import { markThemeChosen } from "../lib/paper";
import { play } from "../lib/sound";

const LENGTH = 18; // resting cord below the label, px
const MAX_PULL = 46;
const TRIGGER = 22;

/**
 * The pressroom light switch. Switching spreads the new theme as a circle from the
 * point that was pulled or clicked, using a view transition where the browser has
 * them (and simply switching where it doesn't, or under reduced motion).
 */
export function useLightSwitch() {
  const reduce = useReducedMotion();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = resolvedTheme === "dark";

  const toggle = (from?: Element | null) => {
    const next = dark ? "light" : "dark";
    play("click");
    const apply = () => {
      markThemeChosen();
      // Switch the class now so the transition's snapshot has the new theme;
      // next-themes catches up and stores the choice.
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(next);
      root.style.colorScheme = next;
      setTheme(next);
    };
    const b = from?.getBoundingClientRect();
    if (reduce || !document.startViewTransition || !b) return apply();
    const x = b.left + b.width / 2;
    const y = b.top + b.height / 2;
    const r = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const t = document.startViewTransition(apply);
    void t.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${r}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 750,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {}); // skipped, e.g. when the tab is hidden: the switch still applies
  };

  return { mounted, dark, toggle };
}

/**
 * A pull cord hanging under the theme link, like the chain on a lamp. Drag it down
 * and let go to switch; it springs back past rest and settles. Pointer only: the link
 * above it is the keyboard and screen reader control.
 */
export function Cord({
  onPull,
  className,
}: {
  onPull: (from: Element | null) => void;
  className?: string;
}) {
  const [pull, setPull] = useState(0);
  const [dragging, setDragging] = useState(false);
  const knob = useRef<HTMLSpanElement>(null);
  const drag = useRef({ y0: 0, moved: false, pull: 0 });

  const onDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    drag.current = { y0: e.clientY, moved: false, pull: 0 };
    setDragging(true);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dy = Math.max(0, e.clientY - drag.current.y0);
    if (dy > 3) drag.current.moved = true;
    // Resists more the further it goes.
    const p = MAX_PULL * (1 - Math.exp(-dy / 50));
    drag.current.pull = p;
    setPull(p);
  };
  const onUp = () => {
    if (!dragging) return;
    setDragging(false);
    setPull(0);
    if (!drag.current.moved) {
      // A tap: a short tug for the eye, then the switch.
      setPull(14);
      window.setTimeout(() => setPull(0), 110);
      markFound("cord");
      onPull(knob.current);
    } else if (drag.current.pull > TRIGGER) {
      markFound("cord");
      onPull(knob.current);
    }
  };

  return (
    <span
      aria-hidden
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 flex-col items-center pt-1",
        className,
      )}
    >
      <span
        className="block w-px bg-current"
        style={{
          height: LENGTH + pull,
          transition: dragging
            ? "none"
            : "height 0.6s cubic-bezier(0.34, 1.8, 0.5, 1)",
        }}
      />
      <span
        ref={knob}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className="relative -mt-px flex size-2.5 cursor-grab touch-none items-center justify-center rounded-full border border-current active:cursor-grabbing"
      >
        {/* A wider invisible grip, so it's easy to catch. */}
        <span className="absolute -inset-2.5" />
      </span>
    </span>
  );
}
