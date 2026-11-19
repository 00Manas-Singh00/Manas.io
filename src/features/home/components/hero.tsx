"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { useRef } from "react";

import { NAV_ITEMS, PROFILE } from "../data";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "../lib/gsap";
import { onIntroDone } from "../lib/intro";
import { scrollToId } from "../lib/lenis";
import { orb } from "../lib/orb";
import { RollText } from "./roll-text";
import { ThemeSwitch } from "./site-nav";

const HERO_A = { x: -0.72, y: -0.42, scale: 0.42 };
const HERO_B = { x: 0.04, y: -0.18, scale: 0.6 };

/**
 * Reference 1 to reference 2 in one pinned scrub: the portrait collapses to the right
 * while the headline grows to span the full measure, and the orb drifts in behind it.
 */
export function Hero({ onPassed }: { onPassed: (passed: boolean) => void }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const split = SplitText.create(".hero-line", {
        type: "lines",
        mask: "lines",
      });

      // Entrance, fired by the loader hand-off.
      if (!reduce) {
        gsap.set(split.lines, { yPercent: 110 });
        gsap.set(".hero-rule", { scaleX: 0 });
        gsap.set(".hero-fade", { opacity: 0, y: 12 });
        gsap.set(".hero-portrait-inner", { clipPath: "inset(100% 0% 0% 0%)" });
        gsap.set(".hero-portrait-inner img", { scale: 1.3 });
      }

      const stopIntro = onIntroDone(() => {
        // Plain assignment: the shader damps opacity itself, and a tween here could be reverted
        // by whichever gsap.context happens to be running when the loader hands off.
        orb.opacity = 1;
        if (reduce) return;
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.to(split.lines, { yPercent: 0, stagger: 0.09, duration: 1.4 }, 0)
          .to(".hero-rule", { scaleX: 1, stagger: 0.06, duration: 1.4 }, 0.05)
          .to(
            ".hero-portrait-inner",
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.6,
              ease: "expo.inOut",
            },
            0,
          )
          .to(".hero-portrait-inner img", { scale: 1, duration: 2.2 }, 0.1)
          .to(
            ".hero-fade",
            { opacity: 1, y: 0, stagger: 0.05, duration: 1 },
            0.4,
          );
      });

      // Pinned scrub (desktop only).
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const stage =
            root.current!.querySelector<HTMLElement>(".hero-stage")!;
          const headline =
            root.current!.querySelector<HTMLElement>(".hero-headline")!;
          const grow = () =>
            Math.min(
              (stage.clientWidth * 0.985) / headline.offsetWidth,
              (stage.clientHeight * 0.92) / headline.offsetHeight,
            );

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=110%",
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const p = self.progress;
                gsap.killTweensOf(orb, "x,y,scale");
                orb.x = gsap.utils.interpolate(HERO_A.x, HERO_B.x, p);
                orb.y = gsap.utils.interpolate(HERO_A.y, HERO_B.y, p);
                orb.scale = gsap.utils.interpolate(
                  HERO_A.scale,
                  HERO_B.scale,
                  p,
                );
              },
              onLeave: () => onPassed(true),
              onEnterBack: () => onPassed(false),
            },
          });

          tl.to(
            ".hero-portrait",
            { clipPath: "inset(0% 0% 0% 100%)", ease: "power2.inOut" },
            0,
          )
            .to(
              ".hero-portrait-pan",
              { scale: 1.18, xPercent: 8, ease: "none" },
              0,
            )
            .to(
              ".hero-caption",
              { opacity: 0, y: -16, ease: "power1.out", duration: 0.3 },
              0,
            )
            .to(
              headline,
              { scale: grow, transformOrigin: "0% 0%", ease: "power2.inOut" },
              0,
            );
        },
      );

      mm.add("(max-width: 767px), (prefers-reduced-motion: reduce)", () => {
        ScrollTrigger.create({
          trigger: root.current,
          start: "bottom 15%",
          onEnter: () => onPassed(true),
          onLeaveBack: () => onPassed(false),
        });
      });

      return () => {
        stopIntro();
        split.revert();
      };
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="top"
      data-label="Index"
      className="relative z-10 px-4 md:px-6"
    >
      <div className="mx-auto flex min-h-[100dvh] max-w-[1440px] flex-col pb-4 md:h-[100dvh] md:pb-6">
        {/* Top band: identity on the left, menu on the right (reference 1). */}
        <div className="grid gap-x-6 md:grid-cols-2">
          <div className="flex flex-col">
            <div className="hero-fade flex justify-between pt-4 text-xs uppercase md:text-sm">
              <span>{PROFILE.name}</span>
              <span>{PROFILE.tagline}</span>
            </div>
            <div className="flex-1" />
            <div className="relative mt-8 md:mt-0">
              <span className="hero-rule absolute inset-x-0 top-0 h-px origin-left bg-ink" />
              <span className="hero-rule absolute inset-x-0 bottom-0 h-px origin-left bg-ink" />
              <a
                href={PROFILE.resumeHref}
                target="_blank"
                className="group flex items-center justify-between py-1"
              >
                <ArrowDown className="size-7 md:size-9" strokeWidth={1.25} />
                <RollText
                  text="RÉSUMÉ"
                  className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-light"
                />
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="hero-fade flex justify-between pt-4 pb-2 text-xs uppercase md:text-sm">
              <span>Menu</span>
              <ThemeSwitch />
            </div>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="relative">
                  <span className="hero-rule absolute inset-x-0 top-0 h-px origin-left bg-ink" />
                  <button
                    type="button"
                    onClick={() => scrollToId(item.id)}
                    className="group flex w-full cursor-pointer items-center justify-between py-1 text-left"
                  >
                    <RollText
                      text={item.label.toUpperCase()}
                      className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-light"
                    />
                    <ArrowRight
                      className="size-6 -translate-x-3 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                      strokeWidth={1.25}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <span className="hero-rule block h-px origin-left bg-ink" />
          </div>
        </div>

        {/* Stage: headline left, portrait right. The scrub turns this into reference 2. */}
        <div className="hero-stage relative mt-8 grid flex-1 gap-6 md:mt-6 md:min-h-0 md:grid-cols-2">
          <div className="relative flex flex-col justify-between">
            <h1 className="hero-headline max-w-full text-[clamp(2.1rem,4.1vw,4.4rem)] leading-[0.98] font-light uppercase will-change-transform md:w-max md:max-w-none">
              <span className="hero-line block">Hand me the</span>
              <span className="hero-line block">messy problem.</span>
              <span className="hero-line block">I&apos;ll ship it.</span>
            </h1>
            <div className="hero-caption mt-8 md:mt-0">
              <p className="hero-fade text-right text-xs uppercase md:text-sm">
                {PROFILE.company}
                <br />
                <span className="normal-case">{PROFILE.role}</span>
              </p>
            </div>
          </div>

          <div className="hero-portrait relative aspect-[4/5] md:aspect-auto">
            <div className="hero-portrait-inner absolute inset-0 overflow-hidden">
              <div className="hero-portrait-pan absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PROFILE.portrait}
                  alt="Illustrated portrait of Manas Singh"
                  className="absolute inset-0 size-full object-cover object-[50%_30%] contrast-[1.15] grayscale"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute inset-0 bg-ink opacity-0 mix-blend-screen transition-opacity duration-700 hover:opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
