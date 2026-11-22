"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

import { AUTO_THEME_KEY, hourNow, isNight, paperAt } from "../lib/paper";

const EVERY_MS = 10 * 60 * 1000;

/**
 * Keeps the paper on the visitor's clock during a long visit (the head script sets it
 * before first paint), and follows night and day with the theme unless they chose one.
 */
export function PaperClock() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const tick = () => {
      const h = hourNow();
      document.documentElement.style.setProperty("--paper-tod", paperAt(h));
      try {
        if (!localStorage.getItem(AUTO_THEME_KEY)) return;
      } catch {
        return;
      }
      const want = isNight(h) ? "dark" : "light";
      if (resolvedTheme && resolvedTheme !== want) setTheme(want);
    };
    tick();
    const id = window.setInterval(tick, EVERY_MS);
    const onVisible = () => document.visibilityState === "visible" && tick();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [resolvedTheme, setTheme]);

  return null;
}
