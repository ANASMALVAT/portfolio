import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import BreadAndBreakFast from "@/public/BreadAndBreakfast.jpg";
import Ddbms from "@/public/ddbms.jpg";
import DMS from "@/public/DMS.png"

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
    title: "Founder",
    location: "Alpha Algo",
    description:"Founded and actively developed Alpha Algo, a dynamic coding platform with a user base exceeding 50 individuals.",
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
    description:"Developed a highly efficient microservice in an Agile environment, leveraging cutting-edge technologies to streamline processes and enhance overall efficiency.",
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
    title: "SERVERLESS B&B",
    description:"Developed a cloud-based hotel reservation system facilitating accommodation booking, restaurant food orders, and personalized trip package requests.",
    tags: ["React","Python","AWS","JavaScript","Git"],
    imageUrl: BreadAndBreakFast,
  },
  {
    title: "DAL - MULTIFAITH SERVICE",
    description:
    "Designed the platform following agile methodology to help 20000+ students overcome mental health issues.",
    tags: ["React", "Python", "Django","MongoDB","MySQL"],
    imageUrl: DMS,
  },
  {
    title: "DISTRIBUTED DBMS",
    description:
    "Developed a distributed Java-based DBMS for multi-site processing, incorporating global/local metadata, secure data storage, user authentication, and transaction logging.",
    tags: ["Java", "Git", "GCP", "Linux"],
    imageUrl: Ddbms,
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