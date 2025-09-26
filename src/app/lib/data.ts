// src/lib/data.ts

export type Experience = {
  role: string;
  company?: string;
  date: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Freelance Developer",
    date: "Nov 2023 – Present",
    description:
      "Worked on multiple freelance projects delivering clean, responsive, and accessible websites. Focused on React, Next.js, and Tailwind CSS.",
  },
  {
    role: "Front-End Intern",
    company: "Roos Tech",
    date: "Sep 2023 – Nov 2023",
    description:
      "Contributed to the front-end development of client projects, writing reusable components and improving UI consistency across web apps.",
  },
];

export type ContactLink = {
  name: string;
  href: string;
  icon: string;
};

export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    href: "mailto:levdidebashvili@gmail.com",
    icon: "/images/email.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/lekoooooo",
    icon: "/images/lilhub.svg",
  },

  {
    name: "Instagram",
    href: "https://instagram.com/YOUR_INSTAGRAM",
    icon: "/images/instagram.svg",
  },
];
