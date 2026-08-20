"use client";

import { site } from "@/content/site";

export function BootScreen() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-[#0c0b0e]"
      aria-live="polite"
    >
      <p className="font-display text-xl tracking-wide text-[#efe6d6] sm:text-2xl">
        {site.bootMessage}
      </p>
    </div>
  );
}
