"use client";

import { useRef, useState } from "react";

import { gsap, SplitText, useGSAP } from "../lib/gsap";
import { markIntroDone } from "../lib/intro";
import { scroller } from "../lib/lenis";

const SEEN_KEY = "manas-io:intro-seen";

/**
 * First-visit loader: counter 000 -> 100, a hairline drawing across, the name rising
 * letter by letter, then the ink sheet wipes upward and hands off to the hero.
 */
export function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      let skip = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      try {
        skip ||= sessionStorage.getItem(SEEN_KEY) === "1";
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}

      if (skip) {
        setGone(true);
        markIntroDone();
        return;
      }

      scroller.lenis?.stop();
      document.documentElement.style.overflow = "hidden";

      const split = SplitText.create(".loader-name", {
        type: "chars",
        mask: "chars",
      });
      const counter = { v: 0 };
      const out = root.current!.querySelector<HTMLElement>(".loader-count")!;

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => {
          document.documentElement.style.overflow = "";
          scroller.lenis?.start();
          setGone(true);
        },
      });

      tl.from(
        split.chars,
        { yPercent: 110, stagger: 0.035, duration: 1.1 },
        0.1,
      )
        .fromTo(
          ".loader-rule",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.8, ease: "power3.inOut" },
          0,
        )
        .to(
          counter,
          {
            v: 100,
            duration: 1.8,
            ease: "power3.inOut",
            onUpdate: () => {
              out.textContent = String(Math.round(counter.v)).padStart(3, "0");
            },
          },
          0,
        )
        .to(
          ".loader-inner",
          { yPercent: -30, opacity: 0, duration: 0.9, ease: "power3.in" },
          1.95,
        )
        .to(
          root.current,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.1,
            ease: "expo.inOut",
          },
          2.15,
        )
        // Deferred: work started from inside this timeline would belong to the loader's
        // context and be reverted when the loader unmounts.
        .call(() => window.setTimeout(markIntroDone, 0), [], 2.45);
    },
    { scope: root },
  );

  if (gone) return null;

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 z-[70] bg-ink text-paper"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="loader-inner flex h-full flex-col justify-between p-4 md:p-6">
        <div className="flex justify-between text-sm uppercase">
          <span>Manas Singh</span>
          <span>/merges on fridays/</span>
        </div>

        <div>
          <p className="loader-name text-[16vw] leading-[0.85] font-light uppercase md:text-[12vw]">
            Manas Singh
          </p>
          <div className="loader-rule mt-4 h-px origin-left bg-paper" />
          <div className="mt-3 flex items-end justify-between">
            <span className="loader-count text-6xl font-light tabular-nums md:text-8xl">
              000
            </span>
            <span className="text-sm uppercase">Loading portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
}
