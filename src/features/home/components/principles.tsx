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

      const splits = gsap.utils
        .toArray<HTMLElement>(".pr-item")
        .map((item) => {
          const split = SplitText.create(item.querySelector(".pr-title"), {
            type: "lines",
            mask: "lines",
          });
          const tl = gsap.timeline({
            scrollTrigger: { trigger: item, start: "top 78%", once: true },
          });
          tl.from(item.querySelector(".pr-rule"), { scaleX: 0, duration: 1.4 }, 0)
            .from(
              item.querySelector(".pr-index"),
              { yPercent: 100, duration: 1 },
              0.1,
            )
            .from(
              split.lines,
              { yPercent: 110, stagger: 0.08, duration: 1.3 },
              0.15,
            )
            .from(
              item.querySelectorAll(".pr-cap"),
              { yPercent: 100, stagger: 0.08, duration: 1 },
              0.45,
            );
          return split;
        });

      return () => splits.forEach((s) => s.revert());
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-label="How I work"
      className="relative z-10 px-4 py-24 md:px-6 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] space-y-16 md:space-y-28">
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.title}
            className={cn(
              "pr-item relative md:w-[72%]",
              i === 1 && "md:ml-auto",
              i === 2 && "md:ml-[14%]",
            )}
          >
            <span className="pr-rule mb-4 block h-px origin-left bg-ink" />
            <div className="mb-3 overflow-hidden text-xs uppercase md:text-sm">
              <span className="pr-index block">/0{i + 1}</span>
            </div>
            <div className="flex flex-col gap-y-4 md:flex-row md:items-end md:gap-x-8">
              <h3 className="pr-title text-[clamp(2.75rem,6.4vw,6.5rem)] leading-[0.9] font-light text-balance uppercase md:flex-1">
                {p.title}
              </h3>
              <div className="shrink-0 pb-1 text-xs uppercase md:text-sm">
                {p.caption.map((line) => (
                  <span key={line} className="block overflow-hidden">
                    <span className="pr-cap block">{line}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
