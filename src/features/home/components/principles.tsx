"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

import { PRINCIPLES } from "../data";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "../lib/gsap";
import { moveOrb } from "../lib/orb";

/**
 * How I work. Reference 3's "/24" device, with words in place of numbers: an index,
 * a large rule set in light capitals, and a two-line aside tucked beside it.
 */
export function Principles() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top 60%",
        end: "bottom 40%",
        onToggle: (self) =>
          self.isActive && moveOrb({ x: 0.62, y: 0.12, scale: 0.4, amp: 0.2 }),
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const fine = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      ).matches;
      const cleanups: (() => void)[] = [];

      gsap.utils.toArray<HTMLElement>(".pr-item").forEach((item) => {
        const title = item.querySelector<HTMLElement>(".pr-title")!;
        // Words keep line breaks honest; chars are what fall. No mask, so letters
        // can drop in from above the line.
        const split = SplitText.create(title, { type: "words,chars" });
        cleanups.push(() => split.revert());

        const tl = gsap.timeline({
          scrollTrigger: { trigger: item, start: "top 78%", once: true },
        });
        tl.from(item.querySelector(".pr-rule"), { scaleX: 0, duration: 1.4 }, 0)
          .from(
            item.querySelector(".pr-index"),
            { yPercent: 100, duration: 1 },
            0.1,
          )
          // Type with weight: each letter drops, lands and bounces, slightly askew.
          .from(
            split.chars,
            {
              yPercent: () => gsap.utils.random(-260, -140),
              rotation: () => gsap.utils.random(-28, 28),
              opacity: 0,
              duration: 1.15,
              ease: "bounce.out",
              stagger: { each: 0.028, from: "random" },
            },
            0.15,
          )
          .from(
            item.querySelectorAll(".pr-cap"),
            { yPercent: 100, stagger: 0.08, duration: 1 },
            0.6,
          );

        if (!fine) return;

        // Hover: letters near the pointer shy away and lean, then spring back.
        const springs = split.chars.map((c) => ({
          el: c as HTMLElement,
          x: gsap.quickTo(c, "x", {
            duration: 0.9,
            ease: "elastic.out(1, 0.35)",
          }),
          y: gsap.quickTo(c, "y", {
            duration: 0.9,
            ease: "elastic.out(1, 0.35)",
          }),
          skew: gsap.quickTo(c, "skewX", {
            duration: 0.9,
            ease: "elastic.out(1, 0.35)",
          }),
        }));
        const onMove = (e: PointerEvent) => {
          for (const s of springs) {
            const b = s.el.getBoundingClientRect();
            const dx = b.left + b.width / 2 - e.clientX;
            const dy = b.top + b.height / 2 - e.clientY;
            const dist = Math.hypot(dx, dy) || 1;
            const reach = b.height * 1.6;
            const k = Math.max(0, 1 - dist / reach);
            const push = k * k * b.height * 0.32;
            s.x((dx / dist) * push);
            s.y((dy / dist) * push);
            s.skew((-dx / dist) * k * 14);
          }
        };
        const onLeave = () =>
          springs.forEach((s) => (s.x(0), s.y(0), s.skew(0)));
        title.addEventListener("pointermove", onMove);
        title.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          title.removeEventListener("pointermove", onMove);
          title.removeEventListener("pointerleave", onLeave);
        });
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-proof="Rules · letters drop with a bounce, then lean away from the cursor"
      data-label="How I work"
      className="relative z-10 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] space-y-14 md:space-y-20">
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.title}
            className={cn(
              "pr-item relative md:w-[64%]",
              i === 1 && "md:ml-auto",
              i === 2 && "md:ml-[18%]",
            )}
          >
            <span className="pr-rule mb-3 block h-px origin-left bg-ink" />
            {/* Index and aside share one line on the rule, like a running head. */}
            <div className="mb-4 flex items-baseline justify-between gap-6 overflow-hidden text-xs uppercase md:text-sm">
              <span className="pr-index block">/0{i + 1}</span>
              <span className="pr-cap block text-right">
                {p.caption.join(" ")}
              </span>
            </div>
            <h3
              data-ink
              className="pr-title text-[clamp(2.75rem,6.4vw,6.5rem)] leading-[0.9] font-light text-balance uppercase"
            >
              {p.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
