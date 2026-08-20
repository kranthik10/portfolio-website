import type { Metadata } from "next";
import { StaticShell } from "@/components/ui/StaticShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: "How to reach Jordan Hale.",
};

export default function ContactPage() {
  const contact = site.sections.contact;

  return (
    <StaticShell title={contact.title} kicker={contact.kicker}>
      {contact.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
      <ul className="space-y-2 pt-2">
        {contact.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="underline decoration-white/30 underline-offset-4">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </StaticShell>
  );
}
