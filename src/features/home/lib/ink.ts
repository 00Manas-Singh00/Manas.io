import { gsap } from "./gsap";
import { orbScreen } from "./orb";

/**
 * The orb punches through the type. Any element inside a `[data-ink]` container that
 * holds text directly (a "leaf": a SplitText line, word or char, or a plain heading)
 * gets the `ink-leaf` class, which paints its text through background-clip: text. Every
 * frame we hand each leaf the orb's circle in that leaf's own coordinates, and the CSS
 * draws paper inside the circle and ink outside it.
 *
 * Coordinates go through getBoundingClientRect, so leaves that are scaled or translated
 * by GSAP (the hero headline, masked line reveals) still line up with the orb on screen.
 */

// How much of the blurred orb counts as "solid" enough to flip the type.
const CORE = 0.6;

type Leaf = { el: HTMLElement; on: boolean };

function hasOwnText(el: HTMLElement) {
  for (const n of el.childNodes) {
    if (n.nodeType === Node.TEXT_NODE && n.textContent?.trim()) return true;
  }
  return false;
}

function collect(): Leaf[] {
  const leaves: Leaf[] = [];
  document.querySelectorAll<HTMLElement>("[data-ink]").forEach((root) => {
    const all = [root, ...root.querySelectorAll<HTMLElement>("*")];
    for (const el of all) {
      if (!hasOwnText(el)) continue;
      el.classList.add("ink-leaf");
      leaves.push({ el, on: false });
    }
  });
  return leaves;
}

export function startInkField() {
  let leaves = collect();
  let frame = 0;

  const tick = () => {
    // SplitText creates and reverts elements as sections animate; re-scan twice a second.
    if (++frame % 30 === 0) leaves = collect();

    const r = orbScreen.r * CORE * Math.min(1, orbScreen.opacity * 1.4);
    const { cx, cy } = orbScreen;

    for (const leaf of leaves) {
      const { el } = leaf;
      if (r < 4) {
        if (leaf.on) off(leaf);
        continue;
      }
      const b = el.getBoundingClientRect();
      const hit =
        b.width > 0 &&
        cx + r > b.left &&
        cx - r < b.right &&
        cy + r > b.top &&
        cy - r < b.bottom;
      if (!hit) {
        if (leaf.on) off(leaf);
        continue;
      }
      // Screen px -> the leaf's local px (undoes any scale on it or its ancestors).
      const sx = el.offsetWidth ? el.offsetWidth / b.width : 1;
      const sy = el.offsetHeight ? el.offsetHeight / b.height : 1;
      el.style.setProperty("--ox", `${(cx - b.left) * sx}px`);
      el.style.setProperty("--oy", `${(cy - b.top) * sy}px`);
      el.style.setProperty("--or", `${r * sx}px`);
      leaf.on = true;
    }
  };

  function off(leaf: Leaf) {
    leaf.el.style.removeProperty("--or");
    leaf.on = false;
  }

  gsap.ticker.add(tick);
  return () => {
    gsap.ticker.remove(tick);
    leaves.forEach((l) => {
      l.el.classList.remove("ink-leaf");
      ["--ox", "--oy", "--or"].forEach((p) => l.el.style.removeProperty(p));
    });
  };
}
