import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import rattleImg from "@/public/rattle.png"
import dashboardImg from "@/public/dashboard.png"
import phonebookImg from "@/public/phonebook.png"
import wordanalyticsImg from "@/public/wordanalytics.png"

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Graduated from ANU",
    location: "Canberra, ACT",
    description:
      "I graduated from ANU with a Bachelor of Advanced Computing (Honours).",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2020 - Oct 2024",
  },
  {
    title: "ANU Software Engineer Intern",
    location: "Canberra, ACT",
    description:
      "Served as a core developer in the modernization upgrade project (RattleNG) of Rattle, a widely used data science teaching tool with over 15 years of service to governments and universities (including ANU). Key contributions included developing text word cloud functionality, leading core widget design and development to enhance tool usability and stability and designing automated testing frameworks.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Oct 2024",
  },
  {
    title: "ANU Instructor",
    location: "Canberra, ACT",
    description:
      "Courses: Algorithms and Data Structures, Python. Raising course satisfaction from 67% in 2022 to 92%, setting a new record for the course.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - Present",
  },

  {
    title: "ANU Software Engineer",
    location: "Canberra, ACT",
    description:
      "Engineered the interactive data dashboard for the below zero emission project with python and plotly dash which guides ANU's policy on sustainability. Continued engineering the core UI widgets for Rattle V6 in Flutter - a data mining application widely used in industry and academia.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Present",
  },
] as const

export const projectsData = [
  {
    title: "Rattle",
    description:
      "Rattle The R Analytical Tool To Learn Easily is a popular GUI for data mining using R.",
    tags: [
      "Flutter",
      "Dart",
      "R",
      "Data Science",
      "UI/UX",
      "Inter-process communication",
    ],
    imageUrl: rattleImg,
  },
  {
    title: "Below Zero Emission",
    description:
      "Interactive dashboard for the Below Zero Emission project that guides ANU's policy on sustainability.",
    tags: ["Python", "Plotly Dash", "Numpy", "Pandas", "Data Analytics"],
    imageUrl: dashboardImg,
  },
  {
    title: "Phonebook",
    description:
      "Full-stack contact book application with full CRUD operations, data validation, real-time updates, and robust error handling.",
    tags: ["React", "Node", "MongoDB", "Vite", "REST API", "Express"],
    imageUrl: phonebookImg,
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Bootstrap",
  // "TypeScript",
  "React",
  // "Next.js",
  "Node.js",
  "Vite",
  "Express",
  "Flutter",
  "Dart",
  "Git",
  "Github",
  "Machine Learning",
  "UI/UX",
  // "Tailwind",
  // "Prisma",
  "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  "PostgreSQL",
  "SQLite",
  "Java",
  "C/C++",
  "Python",
  "Numpy",
  "Pandas",
  "Flask",
  "Plotly Dash",
  "Cyber Security",
  "Operating Systems",
  "Computer Networks",
  "Parallel Systems",
  "High Performance Computing",
  "Human-Computer Interaction",

  // "Django",
  // "Framer Motion",
] as const
