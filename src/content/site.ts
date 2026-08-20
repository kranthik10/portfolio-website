export const sectionIds = [
  "about",
  "work",
  "awards",
  "writing",
  "location",
  "hobbies",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export type SiteLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  blurb: string;
  href: string;
};

export type Mention = {
  date: string;
  title: string;
  source: string;
  href: string;
};

export type Award = {
  date: string;
  title: string;
  detail: string;
};

export const site = {
  name: "Jordan Hale",
  role: "Creative developer",
  basedIn: "London",
  from: "the coast",
  emailDisplay: "hello(at)jordanhale.dev",
  emailHref: "mailto:hello@jordanhale.dev",
  tagline:
    "Creative developer, based in London. I build interfaces people can wander through.",
  bootMessage: "Setting up the room…",
  lookAround: "Look around. Click an object.",
  skipToWork: "Skip to work",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "X", href: "https://x.com/" },
  ] satisfies SiteLink[],
  sections: {
    about: {
      label: "About",
      title: "Jordan Hale",
      kicker: "Creative developer",
      paragraphs: [
        "Hi — I'm a programmer who likes making things you can step into: tools, games, and the odd spatial interface. I started by breaking the family computer, then by putting it back together, and I never really stopped.",
        "These days I work at the overlap of product engineering and playful 3D on the web. I notice when a tool doesn't exist yet and treat that as an invitation to prototype. Placeholder copy lives here so you can swap in a real biography later — edit src/content/site.ts.",
        "I'm self-taught, based in London, and I still think the best work happens when people can share a space, even if that space is mostly rendered.",
      ],
      links: [
        { label: "GitHub →", href: "https://github.com/" },
        { label: "LinkedIn →", href: "https://www.linkedin.com/" },
      ] satisfies SiteLink[],
    },
    work: {
      label: "Work",
      title: "Projects & work",
      kicker: "Things I’ve built",
      intro:
        "A handful of stand-ins for shipped products. Replace titles, blurbs, and links with your own.",
      projects: [
        {
          title: "Atlas Room",
          blurb:
            "A spatial docs browser: rooms instead of folders, objects instead of files. Built for teams who think in places.",
          href: "https://example.com/atlas",
        },
        {
          title: "Lampshade",
          blurb:
            "A design-system playground that previews components in a tiny 3D apartment. Click the lamp, see the token change.",
          href: "https://example.com/lampshade",
        },
        {
          title: "Northline",
          blurb:
            "A local-first changelog that writes itself from git and screenshots, then publishes when you say so.",
          href: "https://example.com/northline",
        },
      ] satisfies Project[],
    },
    awards: {
      label: "Awards",
      title: "Awards & hackathons",
      kicker: "Trophy shelf",
      intro: "Placeholder accolades, newest first. Swap for the real trophy shelf.",
      items: [
        {
          date: "2026",
          title: "City Prototype Cup — 1st",
          detail: "A weekend build that turned a bus stop into a shared AR noticeboard.",
        },
        {
          date: "2025",
          title: "Open Tools Grant",
          detail: "Funding to keep a small creative-coding library public and boringly documented.",
        },
        {
          date: "2024",
          title: "Studio Jam, honourable mention",
          detail: "A desk-scale skatepark you ride with two fingers. Physics, not canned animation.",
        },
      ] satisfies Award[],
    },
    writing: {
      label: "Writing",
      title: "Articles, mentions & talks",
      kicker: "Press, coverage & speaking",
      intro: "A shelf of places this work (or the placeholder version of it) might show up.",
      items: [
        {
          date: "Jun 2026",
          title: "Why portfolios should be rooms",
          source: "Imaginary Magazine",
          href: "https://example.com/rooms",
        },
        {
          date: "Nov 2025",
          title: "Lighting a scene with one window",
          source: "Talk, London WebGL",
          href: "https://example.com/window-light",
        },
        {
          date: "Mar 2025",
          title: "Local-first changelogs",
          source: "Engineering notes",
          href: "https://example.com/changelogs",
        },
      ] satisfies Mention[],
    },
    location: {
      label: "London",
      title: "London",
      kicker: "Where I am now",
      paragraphs: [
        "Based in London — a good city for walking, workshops, and looking at other people's windows after dark.",
        "I grew up by the coast and still measure a week by whether I saw the water. The window in this room is a stand-in for that horizon.",
      ],
    },
    hobbies: {
      label: "Off-duty",
      title: "Hobbies",
      kicker: "Off the clock",
      paragraphs: [
        "Skateboarding (poorly, with enthusiasm), making small songs, and soldering things that blink. The plant is real in spirit; in this scene it is a few icosahedrons.",
        "I like tools you can hold. Keyboards, boards, cheap cameras. If it has a grain or a scratch, even better.",
      ],
    },
    contact: {
      label: "Contact",
      title: "Say hi",
      kicker: "The best way to reach me",
      paragraphs: [
        "For work, collaborations, or a question about how this room is put together — write anytime. This address is a placeholder.",
      ],
      links: [
        { label: "hello(at)jordanhale.dev", href: "mailto:hello@jordanhale.dev" },
        { label: "LinkedIn", href: "https://www.linkedin.com/" },
        { label: "GitHub", href: "https://github.com/" },
      ] satisfies SiteLink[],
    },
  },
} as const;

export const hotspotAnchors: Record<
  SectionId,
  { position: [number, number, number]; labelY: number }
> = {
  about: { position: [-4.05, 0, -1.85], labelY: 2.55 },
  work: { position: [0.55, 0, -3.35], labelY: 1.55 },
  awards: { position: [3.55, 0, -3.45], labelY: 2.15 },
  writing: { position: [-1.45, 1.55, -4.62], labelY: 1.15 },
  location: { position: [2.05, 1.75, -4.62], labelY: 1.35 },
  hobbies: { position: [-3.35, 0, 1.55], labelY: 1.45 },
  contact: { position: [3.65, 0, 0.85], labelY: 1.25 },
};

export const cameraViews: Record<
  SectionId | "home",
  { position: [number, number, number]; target: [number, number, number] }
> = {
  home: { position: [6.35, 3.85, 7.15], target: [0.1, 1.35, -0.45] },
  about: { position: [-0.85, 2.15, 1.35], target: [-4.05, 1.45, -1.85] },
  work: { position: [0.55, 2.25, -0.55], target: [0.55, 0.85, -3.35] },
  awards: { position: [1.45, 2.35, -1.15], target: [3.55, 1.25, -3.45] },
  writing: { position: [-1.45, 2.15, -2.15], target: [-1.45, 1.7, -4.62] },
  location: { position: [2.05, 2.25, -2.05], target: [2.05, 1.85, -4.62] },
  hobbies: { position: [-0.65, 1.95, 3.35], target: [-3.35, 0.7, 1.55] },
  contact: { position: [1.25, 2.05, 3.05], target: [3.65, 0.65, 0.85] },
};
