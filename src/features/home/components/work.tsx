"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { WORK } from "../data";
import { ScrollTrigger, useGSAP } from "../lib/gsap";
import { moveOrb } from "../lib/orb";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Sticky role column on the left; the product chapters scroll past it on the right. */
export function Work() {
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
          moveOrb({ x: -0.86, y: -0.78, scale: 0.32, amp: 0.16 }),
      });
    },
    { scope: root },
  );

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 1, delay, ease: EASE },
        };

  return (
    <section
      ref={root}
      id="work"
      data-label="Work"
      className="relative z-10 scroll-mt-16 px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end justify-between border-b border-ink pb-2">
          <h2
            data-ink
            data-print
            className="text-[clamp(3rem,8vw,7rem)] leading-[0.85] font-light uppercase"
          >
            Experience
          </h2>
          <span className="text-[clamp(1.5rem,3vw,2.75rem)] font-light">
            /0{WORK.length}
          </span>
        </div>

        {WORK.map((role) => (
          <div
            key={role.company}
            className="grid gap-6 pt-12 pb-8 md:grid-cols-12 md:pt-16"
          >
            <div className="md:col-span-4">
              <div className="md:sticky md:top-24">
                <motion.h3
                  {...rise()}
                  className="text-[clamp(2rem,3.4vw,3rem)] leading-none font-light uppercase"
                >
                  {role.company}
                </motion.h3>
                <motion.p {...rise(0.08)} className="mt-3 text-sm uppercase">
                  {role.role}
                  <br />
                  {role.period}, {role.place}
                </motion.p>
              </div>
            </div>

            <div className="space-y-14 md:col-span-8 md:col-start-5">
              {role.intro && (
                <motion.p
                  {...rise()}
                  className="max-w-[60ch] text-xl leading-snug font-light md:text-2xl"
                >
                  {role.intro}
                </motion.p>
              )}

              {role.chapters.map((ch) => (
                <article key={ch.title}>
                  <motion.h4
                    {...rise()}
                    className="text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight font-normal uppercase"
                  >
                    {ch.title}
                  </motion.h4>
                  <motion.p
                    {...rise(0.06)}
                    className="mt-2 mb-6 text-xs text-ink-soft uppercase md:text-sm"
                  >
                    {ch.stack}
                  </motion.p>
                  <ul className="grid gap-x-8 md:grid-cols-2">
                    {ch.points.map((pt, i) => (
                      <li key={pt} className="relative pt-4 pb-6">
                        <motion.span
                          aria-hidden
                          className="absolute inset-x-0 top-0 h-px origin-left bg-ink"
                          initial={reduce ? false : { scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, amount: 1 }}
                          transition={{
                            duration: 1.2,
                            delay: (i % 2) * 0.1,
                            ease: EASE,
                          }}
                        />
                        <motion.p
                          {...rise(0.1 + (i % 2) * 0.1)}
                          className="text-base leading-relaxed md:text-lg"
                        >
                          {pt}
                        </motion.p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
