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

type Leaf = { el: HTMLElement; root: HTMLElement; on: boolean };

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
      // Keep the lit state across re-scans, or a leaf lit just before one would
      // never be switched off again.
      leaves.push({ el, root, on: !!el.style.getPropertyValue("--or") });
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
    const touches = (b: DOMRect) =>
      b.width > 0 &&
      cx + r > b.left &&
      cx - r < b.right &&
      cy + r > b.top &&
      cy - r < b.bottom;

    // Read everything first, then write, so the style changes below never force a
    // recalculation in the middle of the reads. Whole containers far from the orb
    // are skipped with a single read.
    const hits: { leaf: Leaf; b: DOMRect; sx: number; sy: number }[] = [];
    if (r >= 4) {
      const near = new Map<HTMLElement, boolean>();
      for (const leaf of leaves) {
        let ok = near.get(leaf.root);
        if (ok === undefined) {
          ok = touches(leaf.root.getBoundingClientRect());
          near.set(leaf.root, ok);
        }
        if (!ok) continue;
        const b = leaf.el.getBoundingClientRect();
        if (!touches(b)) continue;
        // Screen px -> the leaf's local px (undoes any scale on it or its ancestors).
        const sx = leaf.el.offsetWidth ? leaf.el.offsetWidth / b.width : 1;
        const sy = leaf.el.offsetHeight ? leaf.el.offsetHeight / b.height : 1;
        hits.push({ leaf, b, sx, sy });
      }
    }

    const lit = new Set(hits.map((h) => h.leaf));
    for (const leaf of leaves) if (leaf.on && !lit.has(leaf)) off(leaf);
    for (const { leaf, b, sx, sy } of hits) {
      const s = leaf.el.style;
      s.setProperty("--ox", `${(cx - b.left) * sx}px`);
      s.setProperty("--oy", `${(cy - b.top) * sy}px`);
      s.setProperty("--or", `${r * sx}px`);
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
