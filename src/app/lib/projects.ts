import { Project } from "@/app/types/project";

export const projects: Project[] = [
  {
    id: "streamvibe",
    title: "StreamVibe",
    description:
      "StreamVibe is a streaming platform concept showcasing responsive UI design and seamless navigation. Built with Next.js and Tailwind CSS, focusing on user experience and scalability.",
    year: 2023,
    role: "Front-end Developer",
    githubUrl: "https://github.com/Saba-Vardosanidze/StreamVibe",
    demoUrl: "https://streamvibe.vercel.app", // if deployed
    image: "/images/streamvibe.png",
  },
  {
    id: "shop-co",
    title: "Shop-Co",
    description:
      "Shop-Co is a modern e-commerce web app designed to provide a clean and intuitive shopping experience. Built with Next.js and TypeScript, featuring reusable components and Tailwind CSS for styling.",
    year: 2023,
    role: "Front-end Developer",
    githubUrl: "https://github.com/lekoooooo/shop-co",
    demoUrl: "https://shop-co.vercel.app",
    image: "/images/shopco.webp",
  },
];
