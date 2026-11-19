"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { About } from "./about";
import { Capabilities } from "./capabilities";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Loader } from "./loader";
import { Projects } from "./projects";
import { Proof } from "./proof";
import { Recognition } from "./recognition";
import { CompactBar, MenuOverlay } from "./site-nav";
import { SmoothScroll } from "./smooth-scroll";
import { Work } from "./work";

// Three.js is the heaviest thing on the page: keep it out of the server bundle and first paint.
const OrbCanvas = dynamic(() => import("./orb-canvas"), { ssr: false });

export function Home() {
  const [barVisible, setBarVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [label, setLabel] = useState("Index");
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useGSAP(() => {
    // Live section label for the compact bar. Debounced, so a fast flick through
    // five sections rolls once to where you land instead of five times.
    let pending: number | undefined;
    const showLabel = (next: string) => {
      window.clearTimeout(pending);
      pending = window.setTimeout(() => setLabel(next), 140);
    };

    gsap.utils.toArray<HTMLElement>("[data-label]").forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => self.isActive && showLabel(el.dataset.label!),
      });
    });

    // Pins and counters depend on final font metrics.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
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
      <OrbCanvas />

      <CompactBar
        visible={barVisible && !menuOpen}
        label={label}
        onMenu={() => setMenuOpen(true)}
      />
      <MenuOverlay open={menuOpen} onClose={closeMenu} />

      <main>
        <Hero onPassed={setBarVisible} />
        <Proof />
        <About />
        <Work />
        <Projects />
        <Capabilities />
        <Recognition />
      </main>
      <Contact />

      <div aria-hidden className="grain" />
    </div>
  );
}
