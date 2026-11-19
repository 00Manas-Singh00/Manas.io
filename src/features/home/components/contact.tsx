"use client";

import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useRef } from "react";

import { PROFILE, SOCIALS } from "../data";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "../lib/gsap";
import { decodeEmail, scrollToId } from "../lib/lenis";
import { moveOrb } from "../lib/orb";
import { RollText } from "./roll-text";

/** Magnetic pill: leans toward the pointer with a spring, settles back on leave. */
function MagneticPill() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 160, damping: 16, mass: 0.4 });

  return (
    <motion.a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${decodeEmail(PROFILE.emailB64)}`;
      }}
      onPointerMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.35);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-xl text-paper uppercase active:scale-[0.97] md:px-10 md:py-5 md:text-2xl"
    >
      <RollText text="Get in touch" />
      <ArrowUpRight
        className="size-6 transition-transform duration-500 group-hover:rotate-45"
        strokeWidth={1.5}
      />
    </motion.a>
  );
}

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top 70%",
        onEnter: () => moveOrb({ x: 0, y: -0.62, scale: 0.95, amp: 0.26 }),
        onLeaveBack: () =>
          moveOrb({ x: 0.94, y: -0.84, scale: 0.34, amp: 0.2 }),
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const head = SplitText.create(".contact-head", {
        type: "lines",
        mask: "lines",
      });
      const name = SplitText.create(".contact-name", {
        type: "chars",
        mask: "chars",
      });

      gsap.from(head.lines, {
        yPercent: 105,
        stagger: 0.1,
        duration: 1.3,
        scrollTrigger: {
          trigger: ".contact-head",
          start: "top 80%",
          once: true,
        },
      });
      gsap.from(name.chars, {
        yPercent: 100,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-name",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      return () => {
        head.revert();
        name.revert();
      };
    },
    { scope: root },
  );

  return (
    <footer
      ref={root}
      id="contact"
      data-label="Contact"
      className="relative z-10 flex min-h-[100dvh] flex-col px-4 pt-24 pb-4 md:px-6 md:pt-32 md:pb-6"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        <h2 className="contact-head max-w-[14ch] text-[clamp(3rem,7.5vw,7rem)] leading-[0.9] font-light uppercase">
          Bring me the hard integration.
        </h2>
        <p className="mt-6 max-w-[48ch] text-lg leading-relaxed md:text-xl">
          Open to full-stack and forward-deployed roles. Remote on IST or US
          hours, or on-site in Noida, Bangalore, Gurgaon or Pune.
        </p>
        <div className="mt-10">
          <MagneticPill />
        </div>

        <div className="mt-auto pt-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink pt-3 text-sm uppercase">
            <div className="flex flex-wrap gap-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <RollText text={s.label} />
                </a>
              ))}
              <a href={PROFILE.resumeHref} target="_blank" className="group">
                <RollText text="Résumé" />
              </a>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-ink px-4 py-1 text-base">
              <button
                type="button"
                className="group cursor-pointer uppercase"
                onClick={() => scrollToId("work")}
              >
                <RollText text="Work" />
              </button>
              <span aria-hidden>·</span>
              <button
                type="button"
                className="group cursor-pointer uppercase"
                onClick={() => scrollToId("projects")}
              >
                <RollText text="Projects" />
              </button>
            </div>
          </div>

          <p
            aria-hidden
            className="contact-name mt-6 text-center text-[clamp(3.5rem,15.2vw,17rem)] leading-[0.78] font-light whitespace-nowrap uppercase"
          >
            Manas Singh
          </p>
          <p className="mt-4 flex justify-between text-xs uppercase">
            <span>© {new Date().getFullYear()} Manas Singh</span>
            <span>Built with Next.js, GSAP and three.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
