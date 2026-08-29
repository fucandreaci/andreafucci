export type ExperienceEntry = {
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Thanks Ben",
    period: "2026 — now",
    description:
      "Frontend and mobile engineer at a Series B scale-up. React Native, Expo, React Web — pick two, we ship all three.",
  },
  {
    company: "Direct Line Group",
    period: "2025 — 2026",
    description:
      "Mobile engineer on a React Native app living a double life as Direct Line and Churchill. Also the year I finally learned how London works.",
  },
  {
    company: "Soldo",
    period: "2022 — 2025",
    description:
      "Frontend engineer at a fintech, three years deep in React and expense reports. Where it all started — for me, and for my imposter syndrome.",
  },
];
