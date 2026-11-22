/**
 * Ink-bleed page transitions. On navigation, a blot of ink spreads from the click point
 * until it covers the screen, the route changes underneath, and the ink drains away
 * into the centre of the new page. The blot's edge is roughened by an SVG turbulence
 * filter so it reads as ink soaking into paper rather than a clean circle.
 *
 * Plain Web Animations API, no GSAP, so case-study pages can use it too. The overlay is
 * attached to <body>, which survives client-side navigation in the App Router.
 */

type Push = (href: string) => void;

let busy = false;

function ensureFilter() {
  if (document.getElementById("ink-bleed-filter")) return;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.style.position = "absolute";
  svg.innerHTML = `<filter id="ink-bleed-filter" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7"/>
    <feDisplacementMap in="SourceGraphic" scale="70"/>
  </filter>`;
  document.body.appendChild(svg);
}

const nextFrame = () =>
  new Promise((r) => requestAnimationFrame(() => r(null)));

/** Navigate with the ink bleed. Falls back to a plain push where it can't run. */
export async function inkNavigate(
  push: Push,
  href: string,
  origin?: { x: number; y: number },
) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (busy || reduce || !("animate" in HTMLElement.prototype)) {
    push(href);
    return;
  }
  busy = true;
  ensureFilter();

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;
  // Far enough to cover every corner from the click point, plus room for the rough edge.
  const R =
    Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    ) + 120;

  const blot = document.createElement("div");
  blot.setAttribute("aria-hidden", "true");
  Object.assign(blot.style, {
    position: "fixed",
    inset: "-60px",
    zIndex: "90",
    background: "var(--ink)",
    pointerEvents: "none",
    filter: "url(#ink-bleed-filter)",
    clipPath: `circle(0px at ${x + 60}px ${y + 60}px)`,
  } satisfies Partial<CSSStyleDeclaration>);
  document.body.appendChild(blot);

  try {
    await blot.animate(
      [
        { clipPath: `circle(0px at ${x + 60}px ${y + 60}px)` },
        { clipPath: `circle(${R}px at ${x + 60}px ${y + 60}px)` },
      ],
      {
        duration: 620,
        easing: "cubic-bezier(0.7, 0, 0.84, 0)",
        fill: "forwards",
      },
    ).finished;

    const target = new URL(href, window.location.href);
    push(href);
    // Wait for the route to land (or give up after 4s), then for it to paint.
    const t0 = performance.now();
    while (
      window.location.pathname !== target.pathname &&
      performance.now() - t0 < 4000
    )
      await nextFrame();
    await nextFrame();
    await nextFrame();

    const cx = window.innerWidth / 2 + 60;
    const cy = window.innerHeight / 2 + 60;
    const Rc = Math.hypot(window.innerWidth, window.innerHeight) / 2 + 120;
    await blot.animate(
      [
        { clipPath: `circle(${Rc}px at ${cx}px ${cy}px)` },
        { clipPath: `circle(0px at ${cx}px ${cy}px)` },
      ],
      {
        duration: 700,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards",
      },
    ).finished;
  } finally {
    blot.remove();
    busy = false;
  }
}

/** Should this click be left to the browser (new tab, download, etc.)? */
export function isModifiedClick(e: React.MouseEvent) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
}
