import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import courseGenerator from "@/public/course-generator.png";
import ecommerse from "@/public/ECommerse.jpeg";
import doorStepServiceImg from "@/public/DoorStepServices.jpeg"

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
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Pune, India",
    description:
      "Pursuing my B.Tech Degree with an excellent CGPA of 9+",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "QVIPLE, Remote",
    description:
      "Designed and developed mobile-focused websites for optimal user experiences",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Priyam IT Services, Pune",
    description:
      "Delivered web solutions for 10+ clients in IT, e-commerce, and agriculture sectors. Achieved a 95% project completion rate, consistently delivering projects on time and within budget.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Course Generator",
    description:
      "Developed a system that harnesses the power of artificial intelligence (AI) to autonomously generate comprehensive personalized educational courses.",
    tags: ["Nest.js", "MongoDB", "Tailwind", "Prisma", "NGINX", "Docker", ],
    imageUrl: courseGenerator,
  },
  {
    title: "E-commerce for Small Businesses",
    description:
      "Site management for shop owners through a comprehensive dashboard, coupon functionality, and payment processing capabilities.",
    tags: ["React", "Sanity", "Stripe", "Next.js", "Tailwind", "Redux"],
    imageUrl: ecommerse,
  },
  {
    title: "Services Providing Web App",
    description:
      "Developed a platform enabling professionals to offer services and users to easily book services like electrical work.",
    tags: ["React" ,"Node.js", "Express", "SCSS", "MongoDB"],
    imageUrl: doorStepServiceImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "Sanity",
  "Express",
  "PostgreSQL",
  "Python",
  "C++",
  "Framer Motion",
] as const;
