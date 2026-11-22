"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import type { CaseStudy, Project } from "../data";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "../lib/gsap";
import { InkLink } from "./ink-link";
import { ProjectVisual } from "./project-visual";
import { RollText } from "./roll-text";
import { ThemeSwitch } from "./site-nav";
import { SmoothScroll } from "./smooth-scroll";

function Section({
  n,
  label,
  children,
}: {
  n: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cs-section grid gap-4 border-t border-ink pt-4 md:grid-cols-12 md:gap-6">
      <p className="text-xs uppercase md:col-span-3 md:text-sm">
        /0{n}
        <br />
        {label}
      </p>
      <div className="md:col-span-8 md:col-start-5">{children}</div>
    </section>
  );
}

/**
 * Long-form project page in the home page's language: an editorial header, the
 * project's live plate opening full width, then numbered sections on hairlines.
 */
export function CaseStudyPage({
  project,
  study,
  index,
  next,
}: {
  project: Project;
  study: CaseStudy;
  index: number;
  next: Project;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const title = SplitText.create(".cs-title", {
        type: "chars",
        mask: "chars",
      });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".cs-rule", { scaleX: 0, duration: 1.4 }, 0)
        .from(title.chars, { yPercent: 105, stagger: 0.03, duration: 1.2 }, 0.1)
        .from(
          ".cs-fade",
          { opacity: 0, y: 14, stagger: 0.06, duration: 1 },
          0.4,
        )
        .from(
          ".cs-plate",
          {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 1.6,
            ease: "expo.inOut",
          },
          0.3,
        )
        .from(".cs-plate-inner", { scale: 1.25, duration: 2.2 }, 0.3);

      gsap.utils.toArray<HTMLElement>(".cs-section").forEach((el) => {
        gsap.from(el.children, {
          y: 28,
          opacity: 0,
          stagger: 0.08,
          duration: 1.1,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return () => title.revert();
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={cn(
        fontDisplay.variable,
        "home relative min-h-screen overflow-x-clip px-4 py-4 md:px-6 md:py-6",
      )}
    >
      <SmoothScroll />

      <div className="mx-auto max-w-[1440px]">
        <header className="flex items-center justify-between pb-2 text-xs uppercase md:text-sm">
          <InkLink href="/#projects" className="group flex items-center gap-2">
            <ArrowLeft className="size-4" strokeWidth={1.5} />
            <RollText text="Manas Singh" />
          </InkLink>
          <div className="flex items-center gap-6">
            <span>Case study /0{index + 1}</span>
            <ThemeSwitch />
          </div>
        </header>
        <span className="cs-rule block h-px origin-left bg-ink" />

        <h1 className="cs-title mt-10 text-[clamp(3.25rem,11vw,11rem)] leading-[0.85] font-light uppercase md:mt-16">
          {project.title}
        </h1>
        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <p className="cs-fade text-xl leading-snug md:col-span-7 md:text-3xl md:leading-tight">
            {study.lede}
          </p>
          <dl className="cs-fade grid grid-cols-2 gap-x-6 gap-y-3 text-xs uppercase md:col-span-4 md:col-start-9 md:text-sm">
            <div>
              <dt className="text-ink-soft">Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-ink-soft">Stack</dt>
              <dd className="normal-case">{project.stack}</dd>
            </div>
          </dl>
        </div>

        <div className="cs-plate relative mt-10 h-[58vh] min-h-[320px] overflow-hidden border border-ink bg-paper md:mt-14 md:h-[72vh]">
          <div className="cs-plate-inner absolute inset-0">
            <ProjectVisual kind={project.visual} large />
          </div>
        </div>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          <Section n={1} label="The problem">
            <p className="text-[clamp(1.4rem,2.6vw,2.25rem)] leading-[1.2] font-light">
              {study.problem}
            </p>
          </Section>

          <Section n={2} label="What I built">
            <ul className="space-y-5">
              {study.built.map((b) => (
                <li key={b} className="text-lg leading-relaxed md:text-xl">
                  {b}
                </li>
              ))}
            </ul>
          </Section>

          <Section n={3} label="The hard parts">
            <div className="space-y-10">
              {study.hardParts.map((h) => (
                <div key={h.title}>
                  <h2 className="text-[clamp(1.6rem,3vw,2.6rem)] leading-tight font-light uppercase">
                    {h.title}
                  </h2>
                  <p className="mt-3 max-w-[62ch] text-lg leading-relaxed md:text-xl">
                    {h.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section n={4} label="Outcome">
            <ul className="space-y-3">
              {study.outcome.map((o) => (
                <li
                  key={o}
                  className="text-[clamp(1.4rem,2.6vw,2.25rem)] leading-[1.2] font-light"
                >
                  {o}
                </li>
              ))}
            </ul>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2 uppercase transition-colors duration-500 hover:bg-ink hover:text-paper"
              >
                <RollText text="View source" />
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </a>
            )}
          </Section>
        </div>

        <InkLink
          href={`/projects/${next.id}`}
          className="group mt-24 block border-t border-ink pt-4 md:mt-32"
        >
          <span className="flex justify-between text-xs uppercase md:text-sm">
            <span>Next case study</span>
            <span>{next.caption}</span>
          </span>
          <span className="mt-4 flex items-end justify-between gap-6">
            <span className="text-[clamp(3rem,10vw,10rem)] leading-[0.85] font-light uppercase transition-transform duration-700 group-hover:translate-x-3">
              {next.title}
            </span>
            <ArrowUpRight
              className="mb-2 size-10 shrink-0 transition-transform duration-500 group-hover:rotate-45 md:size-16"
              strokeWidth={1}
            />
          </span>
        </InkLink>

        <p className="mt-12 flex justify-between border-t border-ink pt-3 text-xs uppercase">
          <span>© {new Date().getFullYear()} Manas Singh</span>
          <InkLink href="/#contact" className="group">
            <RollText text="Get in touch" />
          </InkLink>
        </p>
      </div>
    </div>
  );
}
