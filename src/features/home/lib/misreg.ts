import { gsap } from "./gsap";
import { scroller } from "./lenis";

/**
 * Misregistration. Two-colour presses drift out of register at speed; so does the big
 * type here. While you flick-scroll, `[data-ink]` headings gain a second ink (a faint
 * fluorescent pink) offset by an amount that follows scroll velocity, then snap back
 * into register as you slow down.
 *
 * Drawn with filter: drop-shadow on the heading, because the type is painted with
 * background-clip: text (for the orb effect), which text-shadow would paint over.
 * The filter is only switched on while the offset is visible, so idle pages pay nothing.
 */
export function startMisregistration() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return () => {};

  const root = document.documentElement;
  let mis = 0;
  let on = false;

  const tick = (_t: number, deltaMs: number) => {
    const v = scroller.lenis?.velocity ?? 0; // px per frame
    const target = gsap.utils.clamp(-9, 9, v * 0.28);
    // Quick to drift out, a little slower to settle back, like a press easing off.
    const rate = Math.abs(target) > Math.abs(mis) ? 14 : 7;
    mis += (target - mis) * (1 - Math.exp((-rate * deltaMs) / 1000));

    const visible = Math.abs(mis) > 0.35;
    if (visible !== on) {
      on = visible;
      root.classList.toggle("is-misreg", on);
    }
    if (on) root.style.setProperty("--mis", mis.toFixed(2));
  };

  gsap.ticker.add(tick);
  return () => {
    gsap.ticker.remove(tick);
    root.classList.remove("is-misreg");
    root.style.removeProperty("--mis");
  };
}
