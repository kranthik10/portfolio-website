import type { Metadata } from "next";
import { StaticShell } from "@/components/ui/StaticShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
  description: site.sections.work.intro,
};

export default function WorkPage() {
  const work = site.sections.work;

  return (
    <StaticShell title={work.title} kicker={work.kicker}>
      <p>{work.intro}</p>
      <ul className="space-y-6 pt-2">
        {work.projects.map((project) => (
          <li key={project.title}>
            <a
              href={project.href}
              className="font-display text-2xl underline decoration-white/25 underline-offset-4"
            >
              {project.title}
            </a>
            <p className="mt-1">{project.blurb}</p>
          </li>
        ))}
      </ul>
    </StaticShell>
  );
}
