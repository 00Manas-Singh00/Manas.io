"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";

import { inkNavigate, isModifiedClick } from "../lib/ink-bleed";

/**
 * A next/link that travels with the ink bleed. Modified clicks (new tab, etc.) and
 * keyboard activation without a pointer still behave like a normal link.
 */
export function InkLink({
  href,
  onClick,
  ...props
}: ComponentProps<typeof Link> & { href: string }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || isModifiedClick(e)) return;
        e.preventDefault();
        // Keyboard "clicks" report 0,0; start those from the link's centre instead.
        const r = e.currentTarget.getBoundingClientRect();
        const origin =
          e.clientX || e.clientY
            ? { x: e.clientX, y: e.clientY }
            : { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        void inkNavigate((h) => router.push(h), href, origin);
      }}
    />
  );
}
