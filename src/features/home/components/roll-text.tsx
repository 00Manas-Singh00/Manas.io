import { cn } from "@/lib/utils";

/** Letter-roll label. Hover (or focus) the nearest `.group` ancestor to trigger. */
export function RollText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={cn("roll", className)} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="roll-char"
          data-char={ch}
          style={{ "--i": i } as React.CSSProperties}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

/** Sets data-dir on the element so `.ink-fill` grows from the edge the pointer came in on. */
export function setFillDirection(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.dataset.dir =
    e.clientY - r.top < r.height / 2 ? "top" : "bottom";
}
