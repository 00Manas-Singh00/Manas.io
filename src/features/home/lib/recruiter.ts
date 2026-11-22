/**
 * Recruiter view state. Mirrored in the URL as ?view=recruiter, so a recruiter can send
 * a colleague the exact view, and it opens straight away on that link.
 */

const PARAM = "view";
const VALUE = "recruiter";
let open = false;
const listeners = new Set<(open: boolean) => void>();

export function isRecruiterOpen() {
  return open;
}

export function onRecruiterChange(fn: (open: boolean) => void) {
  listeners.add(fn);
  return () => void listeners.delete(fn);
}

export function setRecruiter(next: boolean) {
  if (next === open) return;
  open = next;
  const url = new URL(window.location.href);
  if (next) url.searchParams.set(PARAM, VALUE);
  else url.searchParams.delete(PARAM);
  window.history.replaceState(window.history.state, "", url);
  listeners.forEach((fn) => fn(open));
}

/** Call once on mount: opens the view if the page was loaded from a shared link. */
export function readRecruiterFromUrl() {
  const fromUrl =
    new URL(window.location.href).searchParams.get(PARAM) === VALUE;
  if (fromUrl) setRecruiter(true);
}
