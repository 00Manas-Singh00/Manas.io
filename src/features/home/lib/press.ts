/**
 * Shared state between the loader's timeline and the 3D press scene. The loader tweens
 * `p` from 0 to 1 (the roller's journey); the scene reports `ready` after its first
 * frame, so the loader can wait for it rather than start mid-print.
 */
export const pressState = {
  p: 0,
  ready: false,
  onReady: null as null | (() => void),
};

export function markPressReady() {
  if (pressState.ready) return;
  pressState.ready = true;
  pressState.onReady?.();
}

/** Desktop with a fine pointer, WebGL 2 and motion allowed. */
export function canRunPress() {
  if (window.innerWidth < 768) return false;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
    return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return false;
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return false;
  }
}
