// Tiny pub/sub so the hero can start its entrance exactly when the loader hands off.
let done = false;
const subscribers = new Set<() => void>();

export function markIntroDone() {
  if (done) return;
  done = true;
  subscribers.forEach((fn) => fn());
  subscribers.clear();
}

export function onIntroDone(fn: () => void) {
  if (done) {
    fn();
    return () => {};
  }
  subscribers.add(fn);
  return () => {
    subscribers.delete(fn);
  };
}
