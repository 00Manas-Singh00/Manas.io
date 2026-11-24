/**
 * The easter eggs, and which ones this visitor has found. Kept in this browser only
 * (localStorage); nothing is sent anywhere. The footer hints at one not yet found, and
 * the back of the last page keeps the tally.
 */

export type Egg = "proof" | "riso" | "ship" | "page" | "cord";

export const EGGS: Egg[] = ["proof", "riso", "ship", "page", "cord"];

/** Eggs that need a keyboard or a fine pointer; touch visitors are only hinted the rest. */
export const DESKTOP_ONLY: Egg[] = ["proof", "riso", "ship", "cord"];

const KEY = "manas-io:eggs";
const VISITS = "manas-io:visits";
const EVENT = "eggs:found";

export function foundEggs(): Set<Egg> {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? "[]") as Egg[];
    return new Set(raw.filter((e) => EGGS.includes(e)));
  } catch {
    return new Set();
  }
}

export function markFound(egg: Egg) {
  const found = foundEggs();
  if (found.has(egg)) return;
  found.add(egg);
  try {
    localStorage.setItem(KEY, JSON.stringify([...found]));
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

export function onEggFound(fn: () => void) {
  window.addEventListener(EVENT, fn);
  return () => window.removeEventListener(EVENT, fn);
}

/** Counts this visit once per tab session, so each visit starts on a different hint. */
export function visitNumber() {
  try {
    const seen = sessionStorage.getItem(VISITS);
    if (seen) return Number(seen);
    const n = Number(localStorage.getItem(VISITS) ?? "0") + 1;
    localStorage.setItem(VISITS, String(n));
    sessionStorage.setItem(VISITS, String(n));
    return n;
  } catch {
    return 1;
  }
}
