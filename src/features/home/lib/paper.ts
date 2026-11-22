/**
 * Paper by time of day. The stock shifts with the visitor's local clock: cool and grey
 * at dawn, the house #f3efe6 at midday, warm toward golden hour, and a lamp-lit cream
 * late at night (for anyone who chose the light theme). The shifts are small on
 * purpose: you notice them across visits, not within one.
 *
 * After dark the site turns to its dark theme by itself, unless the visitor has picked
 * a theme. An automatic pick is flagged so it can follow the clock back to light.
 */

/** [hour, colour], wrapping round midnight. */
export const PAPER_STOPS: [number, string][] = [
  [0, "#efe9dd"],
  [5, "#eaece8"],
  [8, "#eff0ea"],
  [13, "#f3efe6"],
  [17, "#f5ecdb"],
  [19.5, "#f6e5cc"],
  [22, "#f1e8d8"],
];

export const AUTO_THEME_KEY = "manas-io:auto-theme";

/** Night is 20:00 to 06:00. */
export function isNight(h: number) {
  return h >= 20 || h < 6;
}

const hex = (c: string) =>
  [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));

export function paperAt(h: number) {
  const s = PAPER_STOPS;
  let i = s.length - 1;
  while (i > 0 && s[i][0] > h) i--;
  const [h0, c0] = s[i];
  const [h1raw, c1] = s[(i + 1) % s.length];
  const h1 = h1raw <= h0 ? h1raw + 24 : h1raw;
  const t = (h - h0) / (h1 - h0);
  const a = hex(c0);
  const b = hex(c1);
  return `#${a
    .map((v, k) =>
      Math.round(v + (b[k] - v) * t)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}

export function hourNow() {
  const d = new Date();
  return d.getHours() + d.getMinutes() / 60;
}

/** The visitor picked a theme themselves: stop following the clock. */
export function markThemeChosen() {
  try {
    localStorage.removeItem(AUTO_THEME_KEY);
  } catch {}
}

/**
 * Runs in <head> before paint: tints the paper and, if the theme is not the visitor's
 * own choice, picks light or dark by the clock (before next-themes reads it).
 */
export const paperScript = String.raw`
  try {
    var d = new Date(), h = d.getHours() + d.getMinutes() / 60
    var s = ${JSON.stringify(PAPER_STOPS)}
    var i = s.length - 1
    while (i > 0 && s[i][0] > h) i--
    var n = s[(i + 1) % s.length], h1 = n[0] <= s[i][0] ? n[0] + 24 : n[0]
    var t = (h - s[i][0]) / (h1 - s[i][0]), out = '#'
    for (var k = 1; k < 7; k += 2) {
      var a = parseInt(s[i][1].slice(k, k + 2), 16), b = parseInt(n[1].slice(k, k + 2), 16)
      out += ('0' + Math.round(a + (b - a) * t).toString(16)).slice(-2)
    }
    document.documentElement.style.setProperty('--paper-tod', out)
    if (!('theme' in localStorage) || localStorage['${AUTO_THEME_KEY}']) {
      localStorage.theme = (h >= 20 || h < 6) ? 'dark' : 'light'
      localStorage['${AUTO_THEME_KEY}'] = '1'
    }
  } catch (_) {}
`;
