import type Lenis from "lenis";

// Shared handle so nav links, the loader and modals can drive the one Lenis instance.
export const scroller: { lenis: Lenis | null } = { lenis: null };

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (scroller.lenis) scroller.lenis.scrollTo(el, { duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export function decodeEmail(b64: string) {
  return typeof window === "undefined" ? "" : window.atob(b64);
}
