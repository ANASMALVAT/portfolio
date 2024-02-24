import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import BreadAndBreakFast from "@/public/BreadAndBreakfast.jpg";
import Omnicent from "@/public/omnicent.png";
import Alpha from "@/public/Alpha.png"
import IDE from "@/public/IDE.png"
import DMS from "@/public/DMS.png"
import Rento from "@/public/car-rent.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "RiskTec Systems",
    description: "Full Stack Developer at RiskTec Systems skilled in Python Django, DRF, TypeScript, React, Next.Js, Redux, Docker; noted for secure back-end architecture, data model refinement, and collaborative teamwork.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Present",
  },
  {
    title: "Founder",
    location: "Alpha Algo",
    description: "Founded and actively developing Alpha Algo, a dynamic coding platform with a user base exceeding 50 individuals.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023",
  },
  {
    title: "Freelance Software Developer",
    location: "Dalhousie University",
    description:
    "Developed a comprehensive GitLab Visualization tool aimed at monitoring student activities across three courses for Dalhousie University.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Dec 2023",
  },
  {
    title: "Software Developer co-op",
    location: "Canada Revenue Agency",
    description: "Developed a highly efficient microservice in an Agile environment, leveraging cutting-edge technologies to streamline processes and enhance overall efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - May 2023",
  },
  {
    title: "Software Developer",
    location: "Cromson Technologies",
    description:"Utilized Agile development methodologies to elevate e-commerce engagement, employing a diverse tech stack including Django, Spring, React, and Node.js.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2020 - Nov 2021",
  },
] as const;

export const educationData = [
  {
    title: "MACS",
    location: "Dalhousie University",
    description:"Completed a Master's in Applied Computer Science from Dalhousie University with a GPA of 4.23.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - May 2023",
  },
  {
    title: "BEng In Information Technology",
    location: "Gujarat Technological University",
    description:"I graduated in Information Technology from Gujarat Technological University with a CGPA of 8.92.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2017 - Aug 2021",
  },

] as const;


export const projectsData = [
  
  {
    title: "ALPHA ALGO",
    description:"Founded and actively developing Alpha Algo, a dynamic coding platform with a user base exceeding 50 individuals.",
    tags: ["React", "Node", "AWS", "Redux", "CSS ..."],
    imageUrl: Alpha,
    projectUrl:"https://www.alphaalgos.com"
  },
  {
    title: "OMNICENT",
    description: "My First SaaS product. With Omnicent you can interact with your PDF just like you interact with chatGPT.",
    tags: ["NextJs", "TypeScript", "tRPC", "Prisma", "AWS S3", "MySQL ..."],
    imageUrl: Omnicent,
    projectUrl:"https://omnigpt-five.vercel.app"
  },
  
  {
    title: "ONLINE CODE EDITOR",
    description:"Online code editor, facilitating code compilation across 40+ languages.",
    tags: ["React", "TailwindCSS", "REST API", "RAPID API ..."],
    imageUrl: IDE,
    projectUrl: "https://online-ide-ruddy.vercel.app/"
  },
  {
    title: "RENTOCAR",
    description:
    "An app for easy car reservations with online payment, reviews, comparison, offers, support, and job applications.",
    tags: ["React", "Node.js","Express.js","MongoDB","MySQL","AWS", "Git"],
    imageUrl: Rento,
    projectUrl: "https://rent-car-seven.vercel.app/"
  },
  {
    title: "DAL - MULTIFAITH SERVICE",
    description:
    "Designed the platform following agile methodology to help 20000+ students overcome mental health issues.",
    tags: ["React", "Python", "Django","MongoDB","MySQL"],
    imageUrl: DMS,
    projectUrl: "https://dal-multifaith-frontend-deploy.vercel.app/"
  },

] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Java",
  "MongoDB",
  "Redux",
  "Python",
  "Django",
  "Express",
  "PostgreSQL",
  "Linux (Bash)",
  "Amazon Web Services",
  "Docker",
  "Kubernetes",
  "C/C++",
  "Competitive Coding",
  "Framer Motion",
] as const;
