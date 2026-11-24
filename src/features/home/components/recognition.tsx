"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { RECOGNITION } from "../data";
import { ScrollTrigger, useGSAP } from "../lib/gsap";
import { moveOrb } from "../lib/orb";
import { Figures } from "./figures";
import { setFillDirection } from "./roll-text";

/** Full-width rows; ink floods in from whichever edge the pointer entered. */
export function Recognition() {
  const root = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top 60%",
        end: "bottom 40%",
        onToggle: (self) =>
          self.isActive &&
          moveOrb({ x: 0.94, y: -0.84, scale: 0.34, amp: 0.2 }),
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-label="Recognition"
      className="relative z-10 px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2
          data-ink
          data-print
          className="mb-8 text-[clamp(3rem,8vw,7rem)] leading-[0.85] font-light uppercase"
        >
          Recognition
        </h2>
        <ul className="border-b border-ink">
          {RECOGNITION.map((r, i) => (
            <motion.li
              key={r.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.9,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              onPointerEnter={setFillDirection}
              className="group relative border-t border-ink"
            >
              <span className="ink-fill" />
              <div className="relative grid gap-1 px-1 py-5 transition-colors duration-500 group-hover:text-paper md:grid-cols-12 md:items-baseline md:gap-6 md:py-6">
                <p className="text-[clamp(1.5rem,3vw,2.6rem)] leading-tight font-light uppercase md:col-span-6">
                  <Figures text={r.title} />
                </p>
                <p className="text-sm uppercase md:col-span-5">
                  <Figures text={r.detail} />
                </p>
                <p className="text-sm md:col-span-1 md:text-right">{r.year}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
