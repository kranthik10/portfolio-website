import type { Metadata } from "next";
import { StaticShell } from "@/components/ui/StaticShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: site.tagline,
};

export default function AboutPage() {
  const about = site.sections.about;
  const location = site.sections.location;
  const hobbies = site.sections.hobbies;
  const awards = site.sections.awards;
  const writing = site.sections.writing;

  return (
    <StaticShell title={about.title} kicker={about.kicker}>
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
      <p>
        {about.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mr-4 underline decoration-white/30 underline-offset-4"
          >
            {link.label}
          </a>
        ))}
      </p>
      <h2 className="font-display pt-6 text-2xl">{location.title}</h2>
      {location.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
      <h2 className="font-display pt-6 text-2xl">{hobbies.title}</h2>
      {hobbies.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
      <h2 className="font-display pt-6 text-2xl">{awards.title}</h2>
      <p>{awards.intro}</p>
      <ul className="list-disc space-y-2 pl-5">
        {awards.items.map((item) => (
          <li key={item.title}>
            <span className="text-[#efe6d6]/50">{item.date} · </span>
            {item.title} — {item.detail}
          </li>
        ))}
      </ul>
      <h2 className="font-display pt-6 text-2xl">{writing.title}</h2>
      <ul className="list-disc space-y-2 pl-5">
        {writing.items.map((item) => (
          <li key={item.title}>
            <a href={item.href} className="underline decoration-white/30 underline-offset-4">
              {item.title}
            </a>{" "}
            <span className="text-[#efe6d6]/50">
              ({item.date}, {item.source})
            </span>
          </li>
        ))}
      </ul>
    </StaticShell>
  );
}
