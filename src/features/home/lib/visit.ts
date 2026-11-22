/**
 * What this visit has seen, kept in memory only: which sections were reached, in what
 * order, and when the visit started. Used by the "print my visit" poster. Nothing is
 * stored or sent anywhere.
 */
export const visit = {
  start: typeof performance !== "undefined" ? performance.now() : 0,
  seen: new Set<string>(),
  all: [] as string[],
};

export function markSeen(label: string) {
  visit.seen.add(label);
}

export function setSections(labels: string[]) {
  visit.all = labels;
}
