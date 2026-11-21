import type Lenis from "lenis";

import { gsap, ScrollTrigger } from "./gsap";

// Shared handle so nav links, the loader and modals can drive the one Lenis instance.
export const scroller: { lenis: Lenis | null } = { lenis: null };

let sheet: HTMLDivElement | null = null;
let turning = false;

/** The ink sheet used for page turns: created once, on first use. */
function getSheet() {
  if (sheet?.isConnected) return sheet;
  sheet = document.createElement("div");
  sheet.setAttribute("aria-hidden", "true");
  sheet.className =
    "pointer-events-none fixed inset-0 z-[69] flex flex-col justify-end bg-ink p-4 text-paper md:p-6";
  sheet.style.clipPath = "inset(100% 0% 0% 0%)";
  sheet.innerHTML = `<div style="overflow:hidden"><p class="sheet-label" style="font-weight:300;text-transform:uppercase;line-height:.82;font-size:clamp(4rem,16vw,15rem)"></p></div>`;
  (document.querySelector(".home") ?? document.body).appendChild(sheet);
  return sheet;
}

/**
 * Jump to a section by turning the page: an ink sheet rises over the page carrying the
 * destination's name, the page moves underneath while it is fully covered, and the
 * sheet lifts away. Reduced motion gets a plain jump.
 */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el || turning) return;

  const jump = () => {
    if (scroller.lenis)
      scroller.lenis.scrollTo(el, { immediate: true, force: true });
    else el.scrollIntoView();
    ScrollTrigger.update();
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    jump();
    return;
  }

  turning = true;
  const s = getSheet();
  const label = s.querySelector<HTMLElement>(".sheet-label")!;
  label.textContent = el.dataset.label ?? id;

  gsap
    .timeline({ onComplete: () => void (turning = false) })
    .set(label, { yPercent: 105 })
    .to(s, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.55,
      ease: "power3.in",
    })
    .to(label, { yPercent: 0, duration: 0.5, ease: "expo.out" }, 0.3)
    .call(jump)
    .to(label, { yPercent: -105, duration: 0.45, ease: "power3.in" }, "+=0.15")
    .to(
      s,
      { clipPath: "inset(0% 0% 100% 0%)", duration: 0.8, ease: "expo.inOut" },
      "<0.1",
    )
    .set(s, { clipPath: "inset(100% 0% 0% 0%)" });
}

export function decodeEmail(b64: string) {
  return typeof window === "undefined" ? "" : window.atob(b64);
}
