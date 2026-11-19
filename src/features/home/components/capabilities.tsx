"use client";

import { Fragment, useRef } from "react";

import { CAPABILITY_WORDS, SKILL_GROUPS } from "../data";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { moveOrb } from "../lib/orb";

/**
 * The page's only marquee. It drifts on its own, speeds up with scroll velocity and
 * reverses when you scroll back up, so the stack list feels physically attached to the page.
 */
export function Capabilities() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top 60%",
        end: "bottom 40%",
        onToggle: (self) =>
          self.isActive &&
          moveOrb({ x: -0.05, y: 0.8, scale: 0.42, amp: 0.34 }),
      });

      gsap.from(".skill-group", {
        y: 32,
        opacity: 0,
        stagger: 0.07,
        scrollTrigger: { trigger: ".skill-grid", start: "top 85%", once: true },
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const loop = gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 38,
        repeat: -1,
      });

      let direction = 1;
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          if (self.direction !== direction) direction = self.direction;
          const boost = gsap.utils.clamp(
            1,
            6,
            Math.abs(self.getVelocity()) / 250,
          );
          gsap.to(loop, {
            timeScale: boost * direction,
            duration: 0.25,
            overwrite: true,
          });
          gsap.to(loop, {
            timeScale: direction,
            duration: 1.4,
            delay: 0.25,
            ease: "power2.out",
          });
        },
      });
    },
    { scope: root },
  );

  const words = (
    <>
      {CAPABILITY_WORDS.map((w) => (
        <Fragment key={w}>
          <span className="text-outline transition-colors duration-500 hover:text-ink">
            {w}
          </span>
          <span
            aria-hidden
            className="mx-[0.35em] inline-block size-[0.18em] rounded-full bg-ink align-middle"
          />
        </Fragment>
      ))}
    </>
  );

  return (
    <section
      ref={root}
      data-label="Stack"
      className="relative z-10 py-24 md:py-32"
    >
      <div
        className="overflow-hidden border-y border-ink py-3"
        aria-label={CAPABILITY_WORDS.join(", ")}
      >
        <div
          aria-hidden
          className="marquee-track flex w-max text-[clamp(3.5rem,9vw,8.5rem)] leading-none font-light whitespace-nowrap uppercase"
        >
          <span className="flex items-center pr-[0.35em]">{words}</span>
          <span className="flex items-center pr-[0.35em]">{words}</span>
        </div>
      </div>

      <div className="skill-grid mx-auto mt-16 grid max-w-[1440px] gap-x-6 gap-y-10 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className="skill-group border-t border-ink pt-3">
            <h3 className="text-2xl font-normal uppercase">{g.title}</h3>
            <p className="mt-2 max-w-[38ch] text-base leading-relaxed text-ink-soft">
              {g.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
