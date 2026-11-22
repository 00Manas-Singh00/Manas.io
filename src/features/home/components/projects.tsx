"use client";

import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import {
  CASE_STUDIES,
  PROFILE,
  type Project,
  PROJECTS,
  SOCIALS,
} from "../data";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "../lib/gsap";
import { scroller, scrollToId } from "../lib/lenis";
import { moveOrb } from "../lib/orb";
import { ProjectVisual } from "./project-visual";
import { RollText } from "./roll-text";

const EASE = [0.16, 1, 0.3, 1] as const;
const GITHUB = SOCIALS.find((s) => s.label === "GitHub")!.href;

function Dots() {
  return (
    <span
      aria-hidden
      className="flex shrink-0 gap-1 pt-1 transition-[gap] duration-500 group-hover:gap-2"
    >
      {[0, 1, 2].map((i) => (
        <span key={i} className="size-[3px] rounded-full bg-ink" />
      ))}
    </span>
  );
}

/**
 * Reference 3, the gallery. The section pins while the four frames are developed:
 * each clip opens from the bottom and the live plate inside settles from 1.35x to 1x.
 */
export function Projects() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top 60%",
        end: "bottom 40%",
        onToggle: (self) =>
          self.isActive && moveOrb({ x: 0.9, y: -0.86, scale: 0.3, amp: 0.22 }),
      });

      const mm = gsap.matchMedia();
      const split = SplitText.create(".proj-big", {
        type: "chars",
        mask: "chars",
      });

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=90%",
              pin: true,
              scrub: 1,
            },
          });
          tl.from(
            ".proj-card",
            { clipPath: "inset(100% 0% 0% 0%)", stagger: 0.12, duration: 1 },
            0,
          )
            .from(".proj-img", { scale: 1.35, stagger: 0.12, duration: 1.3 }, 0)
            .from(
              ".proj-cap",
              { opacity: 0, y: 12, stagger: 0.12, duration: 0.6 },
              0.5,
            )
            .from(
              split.chars,
              { yPercent: 105, stagger: 0.05, duration: 0.8 },
              0.4,
            )
            .from(".proj-tail", { opacity: 0, y: 20, duration: 0.6 }, 0.9);
        },
      );

      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.utils.toArray<HTMLElement>(".proj-card").forEach((card) => {
            gsap.from(card, {
              clipPath: "inset(100% 0% 0% 0%)",
              duration: 1.4,
              scrollTrigger: { trigger: card, start: "top 85%", once: true },
            });
          });
        },
      );

      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="projects"
      data-label="Projects"
      className="relative z-10 scroll-mt-0 px-4 py-20 md:px-6 lg:flex lg:h-[100dvh] lg:flex-col lg:py-0 lg:pt-20 lg:pb-6"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        {/* Header bar: the SEARCH | GALLERY row of reference 3. */}
        <div className="grid grid-cols-2 gap-6 border-y border-ink">
          <div className="flex items-center justify-between py-1">
            <ArrowDownRight className="size-7 md:size-9" strokeWidth={1.25} />
            <span className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-light uppercase">
              Selected
            </span>
          </div>
          <h2 className="py-1 text-[clamp(1.75rem,3.2vw,2.75rem)] font-light uppercase">
            Work
          </h2>
        </div>

        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              className="group cursor-pointer text-left"
              aria-label={`Open ${p.title}`}
            >
              <div className="proj-card overflow-hidden">
                <motion.div
                  layoutId={`frame-${p.id}`}
                  data-sheet
                  className="relative aspect-[4/5] overflow-hidden border border-ink bg-paper lg:aspect-auto lg:h-[clamp(220px,38vh,440px)]"
                >
                  <div className="proj-img absolute inset-0">
                    <ProjectVisual kind={p.visual} peel />
                  </div>
                </motion.div>
              </div>
              <div
                className={cn(
                  "proj-cap mt-2 flex justify-between gap-4 text-xs leading-tight uppercase",
                  i % 2 === 1 && "flex-row-reverse text-right",
                )}
              >
                <span>
                  {p.title}
                  <br />
                  <span className="text-ink-soft">{p.caption}</span>
                </span>
                <Dots />
              </div>
            </button>
          ))}
        </div>

        <div className="proj-tail mt-8 flex justify-center">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="group rounded-full border border-ink px-5 py-1.5 text-base uppercase transition-colors duration-500 hover:bg-ink hover:text-paper active:scale-[0.97]"
          >
            <RollText text="Explore" />
          </a>
        </div>

        {/* SPRING /24 from reference 3, rewritten for this page. */}
        <div className="mt-10 grid items-end gap-6 lg:mt-auto lg:grid-cols-[auto_1fr] lg:gap-12">
          <p data-ink className="proj-big text-[clamp(4rem,10.5vw,10.5rem)] leading-[0.8] font-light whitespace-nowrap uppercase">
            Projects
          </p>
          <div className="proj-tail flex items-end justify-between gap-6">
            <div className="flex items-end gap-4">
              <span className="text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.8] font-light">
                /0{PROJECTS.length}
              </span>
              <span className="pb-1 text-xs uppercase">
                Shipped to production
                <br />
                and to the browser
              </span>
            </div>
            <div className="hidden rounded-full border border-ink px-4 py-1 text-base uppercase md:flex md:items-center md:gap-2">
              <button
                type="button"
                className="group cursor-pointer"
                onClick={() => scrollToId("work")}
              >
                <RollText text="Experience" />
              </button>
              <span aria-hidden>·</span>
              <a href={PROFILE.resumeHref} target="_blank" className="group">
                <RollText text="Résumé" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ProjectSheet project={active} onClose={() => setActive(null)} />
    </section>
  );
}

/** The card's frame morphs (shared layoutId) into a full detail sheet. */
function ProjectSheet({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!project) return;
    scroller.lenis?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      scroller.lenis?.start();
    };
  }, [project, onClose]);

  if (!mounted) return null;

  // Portal: the gallery section is pinned (transformed), which would trap a fixed child.
  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          className={cn(
            fontDisplay.variable,
            "home fixed inset-0 z-[66] overflow-y-auto",
          )}
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.2 } }}
          transition={{ duration: 0.4 }}
        >
          <div className="mx-auto grid min-h-[100dvh] max-w-[1440px] gap-6 px-4 py-4 md:grid-cols-2 md:px-6 md:py-6">
            <motion.div
              layoutId={reduce ? undefined : `frame-${project.id}`}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative min-h-[50vh] overflow-hidden border border-ink bg-paper md:min-h-0"
            >
              <ProjectVisual kind={project.visual} large />
            </motion.div>

            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, delay: 0.35, ease: EASE },
              }}
              exit={{ opacity: 0, y: 12, transition: { duration: 0.25 } }}
            >
              <div className="flex items-center justify-between border-b border-ink pb-2 text-sm uppercase">
                <span>
                  {project.status}, {project.year}
                </span>
                <button
                  type="button"
                  autoFocus
                  onClick={onClose}
                  className="group flex cursor-pointer items-center gap-2 rounded-full border border-ink px-4 py-1.5 uppercase"
                >
                  <RollText text="Close" />
                  <X className="size-4" strokeWidth={1.5} />
                </button>
              </div>

              <h3 className="mt-8 text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] font-light uppercase">
                {project.title}
              </h3>
              <p className="mt-4 text-sm text-ink-soft uppercase">
                {project.stack}
              </p>

              <ul className="mt-10 space-y-6">
                {project.points.map((pt) => (
                  <li
                    key={pt}
                    className="border-t border-ink pt-4 text-lg leading-relaxed"
                  >
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                {CASE_STUDIES[project.id] && (
                  <Link
                    href={`/projects/${project.id}`}
                    className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2 text-paper uppercase transition-transform active:scale-[0.97]"
                  >
                    <RollText text="Read the case study" />
                    <ArrowUpRight className="size-4" strokeWidth={1.5} />
                  </Link>
                )}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-fit items-center gap-2 rounded-full border border-ink px-5 py-2 uppercase transition-colors duration-500 hover:bg-ink hover:text-paper"
                  >
                    <RollText text="View source" />
                    <ArrowUpRight className="size-4" strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
