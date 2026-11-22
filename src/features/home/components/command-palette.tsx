"use client";

import { CornerDownLeft } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { NAV_ITEMS, PROFILE, PROJECTS, SOCIALS } from "../data";
import { inkNavigate } from "../lib/ink-bleed";
import { decodeEmail, scroller, scrollToId } from "../lib/lenis";
import { setRecruiter } from "../lib/recruiter";
import { isSoundOn, setSound } from "../lib/sound";
import { openPoster } from "./poster";
import { printResume } from "./print-resume";
import { toggleProof } from "./proof-mode";
import { RollText } from "./roll-text";

const EASE = [0.16, 1, 0.3, 1] as const;
const OPEN_EVENT = "palette:open";

type Command = {
  id: string;
  group: "Go to" | "Projects" | "Actions" | "Links";
  label: string;
  hint?: string;
  run: () => void;
};

/** Opens the palette from anywhere (the compact bar's ⌘K button uses it). */
export function openPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function isMac() {
  return (
    typeof navigator !== "undefined" &&
    /Mac|iPhone|iPad/i.test(navigator.platform)
  );
}

/** The shortcut label, shown after mount so server and client agree. */
export function useShortcutLabel() {
  const [label, setLabel] = useState("Ctrl K");
  useEffect(() => setLabel(isMac() ? "⌘K" : "Ctrl K"), []);
  return label;
}

/** Fuzzy score: every query char must appear in order; tighter, earlier runs win. */
function score(text: string, query: string) {
  if (!query) return 1;
  const t = text.toLowerCase();
  const q = query.toLowerCase();
  let ti = 0;
  let s = 0;
  let run = 0;
  for (const ch of q) {
    const found = t.indexOf(ch, ti);
    if (found < 0) return 0;
    run = found === ti ? run + 1 : 0;
    s += 1 + run * 2 - Math.min(found - ti, 4) * 0.1;
    ti = found + 1;
  }
  return s + (t.startsWith(q) ? 5 : 0);
}

/**
 * ⌘K / Ctrl+K: search and jump to anything on the site. Sections (with the page turn),
 * case studies, actions (copy email, résumé, recruiter view, theme, sound, ship it)
 * and social links. Arrow keys move, Enter runs, Esc closes.
 */
export function CommandPalette() {
  const reduce = useReducedMotion();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [flash, setFlash] = useState<string | null>(null);
  const list = useRef<HTMLUListElement>(null);

  const commands = useMemo<Command[]>(
    () => [
      {
        id: "go-top",
        group: "Go to",
        label: "Top",
        run: () =>
          scroller.lenis ? scroller.lenis.scrollTo(0) : window.scrollTo(0, 0),
      },
      ...NAV_ITEMS.map<Command>((n) => ({
        id: `go-${n.id}`,
        group: "Go to",
        label: n.label,
        run: () => scrollToId(n.id),
      })),
      ...PROJECTS.map<Command>((p) => ({
        id: `project-${p.id}`,
        group: "Projects",
        label: p.title,
        hint: p.caption,
        run: () => void inkNavigate((h) => router.push(h), `/projects/${p.id}`),
      })),
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        run: async () => {
          try {
            await navigator.clipboard.writeText(decodeEmail(PROFILE.emailB64));
            setFlash("Email copied");
          } catch {
            window.location.href = `mailto:${decodeEmail(PROFILE.emailB64)}`;
          }
        },
      },
      {
        id: "resume",
        group: "Actions",
        label: "Open résumé (PDF)",
        run: () => window.open(PROFILE.resumeHref, "_blank"),
      },
      {
        id: "print-resume",
        group: "Actions",
        label: "Print résumé",
        hint: "One page, A4",
        run: printResume,
      },
      {
        id: "recruiter",
        group: "Actions",
        label: "Recruiter view",
        hint: "Everything on one screen",
        run: () => setRecruiter(true),
      },
      {
        id: "theme",
        group: "Actions",
        label: `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`,
        run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
      {
        id: "sound",
        group: "Actions",
        label: isSoundOn() ? "Turn sound off" : "Turn sound on",
        run: () => setSound(!isSoundOn()),
      },
      {
        id: "poster",
        group: "Actions",
        label: "Print my visit",
        hint: "A poster of your visit",
        run: openPoster,
      },
      {
        id: "proof",
        group: "Actions",
        label: "Proof mode",
        hint: "Or hold Shift",
        run: toggleProof,
      },
      {
        id: "ship",
        group: "Actions",
        label: "Ship it",
        hint: "You'll see",
        run: () => window.dispatchEvent(new Event("ship-it")),
      },
      ...SOCIALS.map<Command>((s) => ({
        id: `link-${s.label}`,
        group: "Links",
        label: s.label,
        hint: s.href.replace(/^https?:\/\//, ""),
        run: () => window.open(s.href, "_blank", "noopener"),
      })),
    ],
    // Labels for theme and sound must refresh each time the palette opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router, resolvedTheme, setTheme, open],
  );

  const results = useMemo(() => {
    const q = query.trim();
    return commands
      .map((c) => ({ c, s: score(`${c.label} ${c.hint ?? ""}`, q) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => (q ? b.s - a.s : 0))
      .map((r) => r.c);
  }, [commands, query]);

  // Open with ⌘K / Ctrl+K from anywhere, or from openPalette().
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    scroller.lenis?.stop();
    return () => scroller.lenis?.start();
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    list.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  useEffect(() => {
    if (!flash) return;
    const t = window.setTimeout(() => setFlash(null), 1600);
    return () => window.clearTimeout(t);
  }, [flash]);

  const run = (c: Command | undefined) => {
    if (!c) return;
    setOpen(false);
    // Let the palette leave before page turns or route changes start.
    window.setTimeout(() => c.run(), reduce ? 0 : 180);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") return setOpen(false);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[active]);
    }
  };

  let lastGroup = "";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[68] flex items-start justify-center bg-ink/20 px-4 pt-[12vh] backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              data-lenis-prevent
              className="w-full max-w-[620px] border border-ink bg-paper text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]"
              initial={{ y: -16, clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
            >
              <div className="flex items-center gap-3 border-b border-ink px-4 py-3">
                <span aria-hidden className="text-sm text-ink-soft">
                  /
                </span>
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Jump to a section, a project, or an action"
                  role="combobox"
                  aria-expanded="true"
                  aria-controls="palette-list"
                  aria-activedescendant={
                    results[active] ? `cmd-${results[active].id}` : undefined
                  }
                  className="w-full bg-transparent text-lg font-light outline-none placeholder:text-ink-soft/70"
                />
                <kbd className="shrink-0 rounded border border-ink/40 px-1.5 text-xs text-ink-soft">
                  Esc
                </kbd>
              </div>

              <ul
                ref={list}
                id="palette-list"
                role="listbox"
                className="max-h-[min(60vh,440px)] overflow-y-auto py-2"
              >
                {results.length === 0 && (
                  <li className="px-4 py-6 text-center text-sm text-ink-soft">
                    Nothing matches “{query}”. Try “work” or “email”.
                  </li>
                )}
                {results.map((c, i) => {
                  const header = c.group !== lastGroup && !query;
                  lastGroup = c.group;
                  return (
                    <li key={c.id} role="none">
                      {header && (
                        <p className="px-4 pt-3 pb-1 text-[11px] text-ink-soft uppercase">
                          {c.group}
                        </p>
                      )}
                      <button
                        type="button"
                        id={`cmd-${c.id}`}
                        role="option"
                        aria-selected={i === active}
                        data-index={i}
                        onMouseMove={() => setActive(i)}
                        onClick={() => run(c)}
                        className={cn(
                          "flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-2.5 text-left",
                          i === active && "bg-ink text-paper",
                        )}
                      >
                        <span className="min-w-0">
                          <span className="text-base uppercase">{c.label}</span>
                          {c.hint && (
                            <span
                              className={cn(
                                "ml-3 truncate text-sm",
                                i === active
                                  ? "text-paper/70"
                                  : "text-ink-soft",
                              )}
                            >
                              {c.hint}
                            </span>
                          )}
                        </span>
                        {i === active && (
                          <CornerDownLeft
                            aria-hidden
                            className="size-4 shrink-0"
                            strokeWidth={1.5}
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation for actions that have no visible result, like copying. */}
      <AnimatePresence>
        {flash && (
          <motion.p
            role="status"
            className="fixed bottom-6 left-1/2 z-[68] -translate-x-1/2 rounded-full bg-ink px-5 py-2 text-sm text-paper uppercase"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
          >
            {flash}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}

/** The ⌘K pill for the compact bar. */
export function PaletteButton({ className }: { className?: string }) {
  const label = useShortcutLabel();
  return (
    <button
      type="button"
      onClick={openPalette}
      aria-label="Open command palette"
      className={cn("group cursor-pointer text-sm uppercase", className)}
    >
      <RollText text={label} />
    </button>
  );
}
