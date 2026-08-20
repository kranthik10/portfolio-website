import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/content/site";

export function StaticShell({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-[#1c1712] text-[#efe6d6]">
      <header className="mx-auto flex w-full max-w-2xl items-baseline justify-between px-6 py-8">
        <Link href="/" className="font-display text-xl">
          {site.name}
        </Link>
        <nav className="flex gap-4 text-sm text-[#efe6d6]/70">
          <Link href="/" className="hover:text-[#efe6d6]">
            Room
          </Link>
          <Link href="/about" className="hover:text-[#efe6d6]">
            About
          </Link>
          <Link href="/work" className="hover:text-[#efe6d6]">
            Work
          </Link>
          <Link href="/contact" className="hover:text-[#efe6d6]">
            Contact
          </Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-2xl px-6 pb-20">
        <p className="font-display italic text-[#efe6d6]/55">{kicker}</p>
        <h1 className="mt-1 font-display text-4xl sm:text-5xl">{title}</h1>
        <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[#efe6d6]/85">
          {children}
        </div>
      </main>
    </div>
  );
}
