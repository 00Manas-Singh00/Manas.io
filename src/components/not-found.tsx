import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { fontDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/** 404 in the home page's language: paper, one ink, hairlines and very large light capitals. */
export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        fontDisplay.variable,
        "home flex min-h-[100svh] flex-col px-4 py-4 md:px-6 md:py-6",
        className,
      )}
    >
      <div className="flex justify-between border-b border-ink pb-2 text-xs uppercase md:text-sm">
        <span>Manas Singh</span>
        <span>/page not found/</span>
      </div>

      <div className="flex flex-1 flex-col justify-end">
        <p className="text-[clamp(7rem,32vw,28rem)] leading-[0.78] font-light">
          404
        </p>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6 border-t border-ink pt-4">
          <p className="max-w-[36ch] text-lg leading-relaxed md:text-xl">
            This page shipped somewhere else, or never shipped at all.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-base text-paper uppercase transition-transform active:scale-[0.97] md:text-lg"
          >
            Back to the home page
            <ArrowUpRight className="size-5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
