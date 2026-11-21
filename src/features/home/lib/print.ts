import { gsap, ScrollTrigger } from "./gsap";

/**
 * Headings that print. A `[data-print]` heading starts as an ink outline and fills from
 * left to right, like a print head passing, as it scrolls from the lower part of the
 * screen to the upper part. Multi-line headings print one line after another.
 *
 * The fill is the `--ink-base` layer of `.ink-leaf` (see globals.css), so the orb can
 * still punch through a heading while it is printing. The heading must also carry
 * `data-ink`, which is what turns its lines into ink leaves.
 */
export function startPrintHeads() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const triggers = Array.from(
    document.querySelectorAll<HTMLElement>("[data-print]"),
  ).map((head) => {
    const paint = (p: number) => {
      const lines = Array.from(head.querySelectorAll<HTMLElement>(".ink-leaf"));
      if (head.classList.contains("ink-leaf")) lines.unshift(head);
      const n = Math.max(lines.length, 1);
      lines.forEach((line, i) => {
        // Line i prints during its own slice of the scroll range.
        const local = Math.min(1, Math.max(0, p * n - i));
        line.style.setProperty("--print", local.toFixed(4));
      });
    };

    if (reduce) {
      head.style.setProperty("--print-all", "1");
      return null;
    }
    const st = ScrollTrigger.create({
      trigger: head,
      start: "top 88%",
      end: "top 38%",
      scrub: 0.6,
      onUpdate: (self) => paint(self.progress),
      onRefresh: (self) => paint(self.progress),
    });
    return { st, paint };
  });

  // Lines become ink leaves a few frames after SplitText runs, so a heading that was
  // already past its range on load would otherwise stay an outline. Repaint at 2 Hz.
  let frame = 0;
  const resync = () => {
    if (++frame % 30) return;
    triggers.forEach((t) => t?.paint(t.st.progress));
  };
  gsap.ticker.add(resync);

  return () => {
    gsap.ticker.remove(resync);
    triggers.forEach((t) => t?.st.kill());
  };
}
