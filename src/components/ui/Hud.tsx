"use client";

import Link from "next/link";
import { useExperience } from "@/components/experience/ExperienceContext";
import { sectionIds, site } from "@/content/site";

export function Hud() {
  const { active, openSection } = useExperience();

  return (
    <>
      <Link
        href="/work"
        className="absolute left-4 top-4 z-20 rounded-sm bg-[#efe6d6] px-2 py-1 text-xs text-[#2a2118] opacity-0 focus:opacity-100"
      >
        {site.skipToWork}
      </Link>
      <header className="pointer-events-none absolute left-0 right-0 top-0 z-10 flex items-start justify-between p-5 sm:p-8">
        <div>
          <p className="font-display text-2xl leading-none text-[#efe6d6] sm:text-4xl">
            {site.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-[#efe6d6]/70">
            {site.role}, based in {site.basedIn}, from {site.from}.
          </p>
        </div>
        <p className="hidden max-w-[10rem] text-right text-xs text-[#efe6d6]/55 sm:block">
          {site.lookAround}
        </p>
      </header>
      <nav
        aria-label="Room sections"
        className="pointer-events-auto absolute bottom-5 left-1/2 z-10 flex w-[min(100%-1.5rem,40rem)] -translate-x-1/2 flex-wrap justify-center gap-1.5 sm:bottom-8"
      >
        {sectionIds.map((id) => {
          const selected = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => openSection(id)}
              className={`rounded-full border px-2.5 py-1 text-[11px] tracking-wide uppercase ${
                selected
                  ? "border-[#efe6d6] bg-[#efe6d6] text-[#2a2118]"
                  : "border-white/20 bg-black/30 text-[#efe6d6]/90 backdrop-blur-sm hover:border-white/50"
              }`}
            >
              {site.sections[id].label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
