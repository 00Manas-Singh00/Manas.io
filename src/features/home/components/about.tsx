"use client";

import { useRef } from "react";

import { EDUCATION, SUMMARY } from "../data";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "../lib/gsap";
import { moveOrb } from "../lib/orb";

/** The summary reads in under a lamp: each word fills from faint to full ink as you scroll. */
export function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top 60%",
        end: "bottom 40%",
        onToggle: (self) =>
          self.isActive && moveOrb({ x: 0.82, y: -0.62, scale: 0.5, amp: 0.3 }),
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const split = SplitText.create(".about-copy", { type: "words" });
      gsap.fromTo(
        split.words,
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".about-copy",
            start: "top 80%",
            end: "bottom 45%",
            scrub: true,
          },
        },
      );
      gsap.from(".about-meta", {
        y: 24,
        opacity: 0,
        scrollTrigger: { trigger: ".about-meta", start: "top 90%", once: true },
      });
      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="about"
      data-label="About"
      className="relative z-10 scroll-mt-20 px-4 py-24 md:px-6 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] md:grid md:grid-cols-12 md:gap-6">
        <p data-ink className="about-copy text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.12] font-light md:col-span-10 md:col-start-2">
          {SUMMARY}
        </p>
        <p className="about-meta mt-12 text-sm uppercase md:col-span-6 md:col-start-2">
          {EDUCATION}
        </p>
      </div>
    </section>
  );
}
