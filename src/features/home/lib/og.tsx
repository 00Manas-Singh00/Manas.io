/**
 * Shared pieces for the link-preview cards (app/opengraph-image.tsx and the case
 * studies' cards): the font, the printer's marks, and halftone images drawn as SVG
 * dots, so a shared link looks like a sheet off the same press as the site.
 */
import path from "node:path";

import sharp from "sharp";

import { SITE_INFO } from "@/config/site";

import type { Project } from "../data";

export const OG_SIZE = { width: 1200, height: 630 };
export const PAPER = "#f3efe6";
export const INK = "#1d3bd1";

/** The site's address as printed on the card, without the scheme. */
export const HOST = SITE_INFO.url
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");

/** Barlow from Google Fonts, subset to the card's text. Missing fonts fall back. */
export async function barlow(text: string) {
  const load = async (weight: 300 | 400 | 500) => {
    try {
      const css = await fetch(
        `https://fonts.googleapis.com/css2?family=Barlow:wght@${weight}&text=${encodeURIComponent(text)}`,
      ).then((r) => r.text());
      const url = css.match(
        /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
      )?.[1];
      if (!url) return null;
      return {
        name: "Barlow",
        data: await fetch(url).then((r) => r.arrayBuffer()),
        weight,
        style: "normal" as const,
      };
    } catch {
      return null;
    }
  };
  const fonts = (await Promise.all([load(300), load(400), load(500)])).filter(
    (f) => f !== null,
  );
  return fonts.length ? fonts : undefined;
}

// ---------------------------------------------------------------------------
// Halftone as SVG

function dotsSvg(
  w: number,
  h: number,
  cell: number,
  value: (u: number, v: number) => number,
) {
  const cols = Math.floor(w / cell);
  const rows = Math.floor(h / cell);
  const ox = (w - cols * cell) / 2;
  const oy = (h - rows * cell) / 2;
  let d = "";
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const k = Math.min(
        1,
        Math.max(0, value((i + 0.5) / cols, (j + 0.5) / rows)),
      );
      // Radius by the square root, so the dot's area tracks the tone.
      const r = (cell / 2) * 1.04 * Math.sqrt(k);
      if (r < 0.4) continue;
      const x = ox + i * cell + cell / 2;
      const y = oy + j * cell + cell / 2;
      d += `M${(x - r).toFixed(1)} ${y.toFixed(1)}a${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(2 * r).toFixed(2)} 0a${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(-2 * r).toFixed(2)} 0`;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><path fill="${INK}" d="${d}"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

/** The portrait as a dot screen, cropped to w x h like the hero's. */
export async function halftonePortrait(w: number, h: number, cell = 7) {
  const cols = Math.floor(w / cell);
  const rows = Math.floor(h / cell);
  const file = path.join(process.cwd(), "public", "r", "portrait.jpeg");
  const { data } = await sharp(file)
    .resize(cols, rows, { fit: "cover", position: "top" })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  return dotsSvg(w, h, cell, (u, v) => {
    const i = Math.min(cols - 1, Math.floor(u * cols));
    const j = Math.min(rows - 1, Math.floor(v * rows));
    const dark = 1 - data[j * cols + i] / 255;
    // Steeper than the site's curve: at card size the light wall drops out and the face reads.
    return Math.pow(Math.max(0, (dark - 0.2) * 1.55), 1.15);
  });
}

// Each project's plate, as a still: the same idea as the live plates on the site.
const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
function segDist(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
) {
  const dx = bx - ax;
  const dy = by - ay;
  const t = Math.min(
    1,
    Math.max(0, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1)),
  );
  return Math.hypot(ax + dx * t - px, ay + dy * t - py);
}

const PLATES: Record<Project["visual"], (u: number, v: number) => number> = {
  // A physics game: three bodies at rest on a floor.
  margin: (u, v) => {
    const balls = [
      [0.3, 0.62, 0.17],
      [0.66, 0.7, 0.12],
      [0.5, 0.33, 0.1],
    ];
    let k = 0.06 + v * 0.08;
    for (const [x, y, r] of balls) {
      const d = Math.hypot(u - x, v - y);
      k = Math.max(k, 1 - smooth(r * 0.75, r, d));
      k = Math.max(k, 0.35 * (1 - smooth(r, r * 1.35, d)));
    }
    if (v > 0.86) k = Math.max(k, 0.85);
    return k;
  },
  // A knowledge graph: nodes and the edges between them.
  graph: (u, v) => {
    const n = [
      [0.22, 0.2],
      [0.68, 0.16],
      [0.46, 0.4],
      [0.18, 0.6],
      [0.8, 0.48],
      [0.52, 0.68],
      [0.3, 0.86],
      [0.76, 0.84],
    ];
    const e = [
      [0, 2],
      [1, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [5, 6],
      [5, 7],
      [4, 7],
      [0, 3],
    ];
    let k = 0.05;
    for (const [a, b] of e) {
      const d = segDist(u, v, n[a][0], n[a][1], n[b][0], n[b][1]);
      k = Math.max(k, 0.55 * (1 - smooth(0.006, 0.02, d)));
    }
    n.forEach(([x, y], i) => {
      const r = i === 2 ? 0.08 : 0.05;
      k = Math.max(k, 1 - smooth(r * 0.6, r, Math.hypot(u - x, v - y)));
    });
    return k;
  },
  // Two tides crossing and trading water.
  // Two crests in solid ink cross over a lighter body of water.
  tide: (u, v) => {
    const a = 0.4 + 0.16 * Math.sin(u * Math.PI * 2 + 0.3);
    const b = 0.56 + 0.16 * Math.sin(u * Math.PI * 2 + 3.4);
    const crest = (y: number) => 1 - smooth(0.012, 0.032, Math.abs(v - y));
    const water = 0.12 + 0.2 * smooth(Math.min(a, b), Math.max(a, b) + 0.1, v);
    return Math.max(
      0.04,
      v > Math.min(a, b) ? water : 0.04,
      crest(a),
      crest(b),
    );
  },
  // A speech spectrogram, scored against an agenda line.
  voice: (u, v) => {
    const col = Math.floor(u * 26);
    const hgt =
      0.25 + 0.55 * Math.abs(Math.sin(col * 1.7) * Math.cos(col * 0.53 + 1));
    const mid = 0.5;
    const inBar = Math.abs(v - mid) < hgt / 2 ? 1 : 0;
    const fade = 1 - Math.abs(v - mid) / (hgt / 2 + 0.001);
    let k = 0.05 + inBar * (0.35 + 0.6 * fade);
    if (Math.abs(v - 0.26) < 0.008) k = Math.max(k, 0.9); // the agenda line
    return k;
  },
};

export function plate(kind: Project["visual"], w: number, h: number, cell = 9) {
  return dotsSvg(w, h, cell, PLATES[kind]);
}

// ---------------------------------------------------------------------------
// Printer's marks

/**
 * Crop marks outside the four corners of the trim, and registration marks top and
 * bottom. Positions are all explicit left/top: the card renderer rejects undefined
 * style values.
 */
export function Marks() {
  const { width: W, height: H } = OG_SIZE;
  const t = 26; // trim inset
  const L = 18; // mark length
  const gap = 4;
  const corners = [
    [t, t],
    [W - t, t],
    [t, H - t],
    [W - t, H - t],
  ];
  const bar = (
    left: number,
    top: number,
    width: number,
    height: number,
    key: string,
  ) => (
    <div
      key={key}
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
        background: INK,
        display: "flex",
      }}
    />
  );
  // A circle with crosshairs through it.
  const reg = (top: number, key: string) => (
    <div
      key={key}
      style={{
        position: "absolute",
        left: W / 2 - 11,
        top: top - 2,
        width: 22,
        height: 22,
        display: "flex",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 14,
          height: 14,
          borderRadius: 9999,
          border: `1px solid ${INK}`,
          display: "flex",
        }}
      />
      {bar(0, 11, 22, 1, `${key}h`)}
      {bar(11, 0, 1, 22, `${key}v`)}
    </div>
  );
  return (
    <>
      {corners.flatMap(([cx, cy], i) => [
        bar(cx === t ? cx - L - gap : cx + gap, cy, L, 1, `h${i}`),
        bar(cx, cy === t ? cy - L - gap : cy + gap, 1, L, `v${i}`),
      ])}
      {reg(4, "rt")}
      {reg(H - 22, "rb")}
    </>
  );
}
