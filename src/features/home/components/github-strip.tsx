"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import type { LatestCommit } from "../lib/github";

function ago(iso: string) {
  const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  const units: [number, string][] = [
    [60 * 60 * 24 * 365, "y"],
    [60 * 60 * 24 * 30, "mo"],
    [60 * 60 * 24 * 7, "w"],
    [60 * 60 * 24, "d"],
    [60 * 60, "h"],
    [60, "m"],
  ];
  for (const [size, unit] of units)
    if (s >= size) return `${Math.floor(s / size)}${unit} ago`;
  return "just now";
}

/**
 * A thin live line under the hero: the latest public commit, how long ago, and a link.
 * Fetched on the server (hourly); the "ago" is computed in the browser so a cached page
 * still reads true. Renders nothing when GitHub could not be reached.
 */
export function GithubStrip({ commit }: { commit: LatestCommit | null }) {
  const [when, setWhen] = useState<string | null>(null);
  useEffect(() => {
    if (!commit) return;
    setWhen(ago(commit.date));
    const t = window.setInterval(() => setWhen(ago(commit.date)), 60_000);
    return () => window.clearInterval(t);
  }, [commit]);

  if (!commit) return null;

  return (
    <div className="relative z-10 px-4 md:px-6">
      <a
        href={commit.url}
        target="_blank"
        rel="noreferrer"
        className="group mx-auto flex max-w-[1440px] items-center gap-3 border-y border-ink py-2 text-xs uppercase md:gap-4 md:text-sm"
      >
        <span className="relative flex size-2 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-ink opacity-50 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-ink" />
        </span>
        <span className="shrink-0">Latest commit</span>
        <span className="shrink-0 text-ink-soft tabular-nums">
          {when ?? " "}
        </span>
        <span className="hidden shrink-0 sm:inline">{commit.repo}</span>
        <span className="min-w-0 truncate normal-case">“{commit.message}”</span>
        <ArrowUpRight
          aria-hidden
          className="ml-auto size-4 shrink-0 transition-transform duration-500 group-hover:rotate-45"
          strokeWidth={1.5}
        />
      </a>
    </div>
  );
}
