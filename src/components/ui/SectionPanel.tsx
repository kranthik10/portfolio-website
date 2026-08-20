"use client";

import { useEffect, useRef } from "react";
import { useExperience } from "@/components/experience/ExperienceContext";
import { site, type SectionId } from "@/content/site";

export function SectionPanel() {
  const { active, closeSection } = useExperience();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) {
      return;
    }
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSection();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }
      const focusable = [
        ...panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      ];
      if (focusable.length === 0) {
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) {
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, closeSection]);

  if (!active) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-20 flex justify-end bg-black/25">
      <button
        type="button"
        aria-label="Close panel and return to room"
        className="absolute inset-0 cursor-default"
        onClick={closeSection}
      />
      <article
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="section-panel-title"
        className="relative m-3 flex max-h-[calc(100%-1.5rem)] w-full max-w-md flex-col overflow-hidden rounded-sm bg-[#f3ead8] text-[#2a2118] shadow-2xl sm:m-6"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#2a2118]/10 px-5 py-4 sm:px-7">
          <div>
            <p className="font-display text-sm italic text-[#2a2118]/55">
              {site.sections[active].kicker}
            </p>
            <h2
              id="section-panel-title"
              className="font-display text-3xl leading-tight"
            >
              {site.sections[active].title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeSection}
            className="grid h-9 w-9 place-items-center rounded-full text-xl leading-none hover:bg-[#2a2118]/8"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-5 text-sm leading-relaxed sm:px-7">
          <PanelBody id={active} />
        </div>
      </article>
    </div>
  );
}

function PanelBody({ id }: { id: SectionId }) {
  if (id === "work") {
    const section = site.sections.work;
    return (
      <div className="space-y-5">
        <p>{section.intro}</p>
        <ul className="space-y-4">
          {section.projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                className="font-display text-lg underline decoration-[#2a2118]/25 underline-offset-4 hover:decoration-[#2a2118]"
                target="_blank"
                rel="noreferrer"
              >
                {project.title}
              </a>
              <p className="mt-1 text-[#2a2118]/80">{project.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (id === "awards") {
    const section = site.sections.awards;
    return (
      <div className="space-y-4">
        <p>{section.intro}</p>
        <ul className="space-y-3">
          {section.items.map((item) => (
            <li key={item.title}>
              <p className="text-xs uppercase tracking-wide text-[#2a2118]/50">
                {item.date}
              </p>
              <p className="font-medium">{item.title}</p>
              <p className="text-[#2a2118]/80">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (id === "writing") {
    const section = site.sections.writing;
    return (
      <div className="space-y-4">
        <p>{section.intro}</p>
        <ul className="space-y-3">
          {section.items.map((item) => (
            <li key={item.title}>
              <p className="text-xs uppercase tracking-wide text-[#2a2118]/50">
                {item.date} · {item.source}
              </p>
              <a
                href={item.href}
                className="underline decoration-[#2a2118]/25 underline-offset-4 hover:decoration-[#2a2118]"
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (id === "about" || id === "location" || id === "hobbies") {
    const section = site.sections[id];
    return (
      <div className="space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
        {"links" in section
          ? section.links.map((link) => (
              <p key={link.href}>
                <a
                  href={link.href}
                  className="underline decoration-[#2a2118]/25 underline-offset-4 hover:decoration-[#2a2118]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </p>
            ))
          : null}
      </div>
    );
  }

  const section = site.sections.contact;
  return (
    <div className="space-y-4">
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
      <ul className="space-y-2">
        {section.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="underline decoration-[#2a2118]/25 underline-offset-4 hover:decoration-[#2a2118]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
