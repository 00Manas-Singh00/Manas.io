"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

import { PROOF } from "../data";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";
import { moveOrb } from "../lib/orb";

/** Reference 3's "/24" device: huge figure, two-line caption tucked to its right. */
export function Proof() {
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

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      gsap.utils.toArray<HTMLElement>(".proof-item").forEach((item) => {
        const num = item.querySelector<HTMLElement>(".proof-num")!;
        const from = Number(num.dataset.from);
        const to = Number(num.dataset.to);
        if (reduce) return;

        const counter = { v: from };
        num.textContent = String(from);
        const tl = gsap.timeline({
          scrollTrigger: { trigger: item, start: "top 78%", once: true },
        });
        tl.from(
          item.querySelector(".proof-rule"),
          { scaleX: 0, duration: 1.4 },
          0,
        )
          .from(
            item.querySelectorAll(".proof-cap"),
            { yPercent: 100, stagger: 0.08, duration: 1 },
            0.2,
          )
          .to(
            counter,
            {
              v: to,
              duration: 2,
              ease: "power3.out",
              onUpdate: () => {
                num.textContent = String(Math.round(counter.v));
              },
            },
            0.1,
          );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-label="Proof"
      className="relative z-10 px-4 py-24 md:px-6 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] space-y-16 md:space-y-24">
        {PROOF.map((p, i) => (
          <div
            key={i}
            className={cn(
              "proof-item relative md:w-[62%]",
              i === 1 && "md:ml-auto",
              i === 2 && "md:ml-[18%]",
            )}
          >
            <span className="proof-rule mb-4 block h-px origin-left bg-ink" />
            <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
              <p className="text-[clamp(5rem,13vw,11.5rem)] leading-[0.8] font-light tabular-nums">
                {p.prefix}
                <span
                  className="proof-num"
                  data-from={p.from}
                  data-to={p.value}
                >
                  {p.value}
                </span>
                {p.suffix}
              </p>
              <div className="pb-2 text-xs uppercase md:text-sm">
                {p.caption.map((line) => (
                  <span key={line} className="block overflow-hidden">
                    <span className="proof-cap block">{line}</span>
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
