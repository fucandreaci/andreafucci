import type { Site, Metadata, NavLink } from "@types";

export const SITE: Site = {
  NAME: "Andrea Fucci",
  EMAIL: "hello@andreafucci.com",
  GITHUB: "https://github.com/fucandreaci",
  LINKEDIN: "https://www.linkedin.com/in/andreafucci",
  INSTAGRAM: "https://instagram.com/fucandreaci",
};

export const HOME: Metadata = {
  TITLE: "Andrea Fucci — Software Engineer, London",
  DESCRIPTION:
    "A software engineer from Puglia, now living in London — building things with care and curiosity, and sharing the process out in the open, half-finished and all.",
};

export const PROJECTS: Metadata = {
  TITLE: "Andrea Fucci — Projects",
  DESCRIPTION: "Things I'm building — mostly half-finished, always in public.",
};

export const STATUS_LABELS: Record<string, string> = {
  wip: "WIP",
  live: "LIVE",
  ongoing: "ONGOING",
  paused: "PAUSED",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];
