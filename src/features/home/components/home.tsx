"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import type { LatestCommit } from "../lib/github";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { startInkField } from "../lib/ink";
import { startPrintHeads } from "../lib/print";
import { play } from "../lib/sound";
import { markSeen, setSections } from "../lib/visit";
import { About } from "./about";
import { Capabilities } from "./capabilities";
import { CommandPalette } from "./command-palette";
import { Contact } from "./contact";
import { GithubStrip } from "./github-strip";
import { Hero } from "./hero";
import { Loader } from "./loader";
import { Poster } from "./poster";
import { Press } from "./press";
import { Principles } from "./principles";
import { PrintHead } from "./print-head";
import { PrintResume } from "./print-resume";
import { Projects } from "./projects";
import { Recognition } from "./recognition";
import { RecruiterView } from "./recruiter";
import { RisoMode } from "./riso";
import { ShipIt } from "./ship-it";
import { CompactBar, MenuOverlay } from "./site-nav";
import { SmoothScroll } from "./smooth-scroll";
import { Work } from "./work";

// Three.js is the heaviest thing on the page: keep it out of the server bundle and first paint,
// and never load it at all on phones or low-power devices, which get the CSS orb instead.
const OrbCanvas = dynamic(() => import("./orb-canvas"), { ssr: false });
const OrbLite = dynamic(() => import("./orb-lite"), { ssr: false });

function prefersLiteOrb() {
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  if (window.matchMedia("(max-width: 767px), (pointer: coarse)").matches)
    return true;
  if (nav.connection?.saveData) return true;
  if ((nav.hardwareConcurrency ?? 8) <= 4) return true;
  if ((nav.deviceMemory ?? 8) <= 4) return true;
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    return !gl;
  } catch {
    return true;
  }
}

export function Home({
  latestCommit = null,
}: {
  latestCommit?: LatestCommit | null;
}) {
  const [barVisible, setBarVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [label, setLabel] = useState("Index");
  const [printed, setPrinted] = useState({ index: 1, total: 8 });
  const [orbMode, setOrbMode] = useState<"webgl" | "lite" | null>(null);
  useEffect(() => setOrbMode(prefersLiteOrb() ? "lite" : "webgl"), []);
  // The orb punches through the large type (see lib/ink.ts).
  useEffect(() => startInkField(), []);

  // Opt-in sound for every link and button: a paper flick on hover, a click on press.
  useEffect(() => {
    const hit = (t: EventTarget | null) =>
      (t as Element | null)?.closest?.("a, button") ?? null;
    const onOver = (e: PointerEvent) => {
      const el = hit(e.target);
      if (el && el !== hit(e.relatedTarget)) play("flick");
    };
    const onClick = (e: MouseEvent) => hit(e.target) && play("click");
    document.addEventListener("pointerover", onOver);
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("click", onClick, true);
    };
  }, []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useGSAP(() => {
    // Live section label for the compact bar. Debounced, so a fast flick through
    // five sections rolls once to where you land instead of five times.
    let pending: number | undefined;
    const sections = gsap.utils.toArray<HTMLElement>("[data-label]");
    setSections(sections.map((s) => s.dataset.label!));
    const showLabel = (next: string, i: number) => {
      window.clearTimeout(pending);
      pending = window.setTimeout(() => {
        setLabel(next);
        setPrinted({ index: i + 1, total: sections.length });
      }, 140);
    };

    sections.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => {
          if (!self.isActive) return;
          markSeen(el.dataset.label!);
          showLabel(el.dataset.label!, i);
        },
      });
    });

    const stopPrint = startPrintHeads();

    // Pins and counters depend on final font metrics.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return stopPrint;
  });

  return (
    <div
      className={cn(
        fontDisplay.variable,
        "home relative isolate min-h-screen overflow-x-clip",
      )}
    >
      <SmoothScroll />
      <Loader />
      {orbMode === "webgl" && <OrbCanvas />}
      {orbMode === "lite" && <OrbLite />}

      <CompactBar
        visible={barVisible && !menuOpen}
        label={label}
        onMenu={() => setMenuOpen(true)}
      />
      <MenuOverlay open={menuOpen} onClose={closeMenu} />
      <Press
        visible={barVisible && !menuOpen}
        index={printed.index}
        total={printed.total}
      />

      <main>
        <Hero onPassed={setBarVisible} />
        <GithubStrip commit={latestCommit} />
        <Principles />
        <About />
        <Work />
        <Projects />
        <Capabilities />
        <Recognition />
      </main>
      <Contact />

      <ShipIt />
      <RecruiterView />
      <CommandPalette />
      <PrintHead />
      <Poster />
      <PrintResume />
      <RisoMode />
      <div aria-hidden className="grain" />
    </div>
  );
}
