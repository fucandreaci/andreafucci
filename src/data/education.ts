export type EducationEntry = {
  institution: string;
  institutionUrl: string;
  program: string;
  programUrl: string;
  period: string;
  description: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Politecnico di Milano",
    institutionUrl:
      "https://www.polimi.it/en/education/laurea-programmes/programme-detail/engineering-of-computing-systems",
    program: "ELIS Digital Engineering",
    programUrl: "https://www.elis.org/formazione/ingegneria-digitale/",
    period: "2020 — 2023",
    description:
      "A BSc in Computer Engineering, with ELIS layered on top: hands-on courses in the technologies companies actually use that a standard degree leaves out, plus four months of internship every year at major Italian companies.",
  },
];
