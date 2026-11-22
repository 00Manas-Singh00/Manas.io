"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { gsap, SplitText, useGSAP } from "../lib/gsap";
import { markIntroDone } from "../lib/intro";
import { scroller } from "../lib/lenis";
import { canRunPress, pressState } from "../lib/press";

const SEEN_KEY = "manas-io:intro-seen";
// How long the loader waits for the 3D press before printing the plain way.
const PRESS_WAIT_MS = 900;

const PressScene = dynamic(() => import("./press-scene"), { ssr: false });

/**
 * First-visit loader: counter 000 -> 100 and a hairline drawing across, then the ink
 * sheet wipes upward and hands off to the hero. On capable desktops the name is printed
 * by a 3D press (see press-scene.tsx); elsewhere, or if the press isn't ready in time,
 * it rises letter by letter.
 */
export function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);
  const [press, setPress] = useState(false);

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

      const usePress = canRunPress();
      if (usePress) setPress(true);

      const name = root.current!.querySelector<HTMLElement>(".loader-name")!;
      const split = SplitText.create(name, { type: "chars", mask: "chars" });
      const counter = { v: 0 };
      const out = root.current!.querySelector<HTMLElement>(".loader-count")!;

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "expo.out" },
        onComplete: () => {
          document.documentElement.style.overflow = "";
          scroller.lenis?.start();
          setGone(true);
        },
      });

      tl.fromTo(
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

      // The plain way: the name rises letter by letter.
      const plain = () => {
        gsap.set(name, { visibility: "visible" });
        tl.from(
          split.chars,
          { yPercent: 110, stagger: 0.035, duration: 1.1 },
          0.1,
        );
      };

      let started = false;
      const start = (withPress: boolean) => {
        if (started) return;
        started = true;
        if (withPress) {
          // The press prints the name; the roller crosses in step with the counter.
          tl.fromTo(
            pressState,
            { p: 0 },
            { p: 1, duration: 1.75, ease: "power1.inOut" },
            0,
          );
        } else {
          setPress(false);
          plain();
        }
        tl.play();
      };

      let wait = 0;
      if (usePress) {
        gsap.set(name, { visibility: "hidden" });
        pressState.p = 0;
        if (pressState.ready) start(true);
        else {
          pressState.onReady = () => start(true);
          wait = window.setTimeout(() => start(false), PRESS_WAIT_MS);
        }
      } else start(false);

      return () => {
        window.clearTimeout(wait);
        pressState.onReady = null;
      };
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

        {press && (
          <div className="relative -mx-4 min-h-0 flex-1 md:-mx-6">
            <PressScene />
          </div>
        )}

        <div>
          <p
            className={cn(
              "loader-name text-[16vw] leading-[0.85] font-light uppercase md:text-[12vw]",
              // The press prints the name instead; collapse this so the press gets the room.
              press && "hidden",
            )}
          >
            Manas Singh
          </p>
          <div className="loader-rule mt-4 h-px origin-left bg-paper" />
          <div className="mt-3 flex items-end justify-between">
            <span className="loader-count text-6xl font-light tabular-nums md:text-8xl">
              000
            </span>
            <span className="text-sm uppercase">
              {press ? "Printing portfolio" : "Loading portfolio"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
