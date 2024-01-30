import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#competences",
  },
  {
    name: "Parcours",
    hash: "#parcours",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Développeur Javascript React, Openclassrooms",
    location: "Bordeaux",
    description:
      "Développement de 14 applications sur un an.",
    icon: React.createElement(LuGraduationCap),
    date: "Juin 2022- Août 2023",
  },
  {
    title: "Coworkez Malin",
    location: "Bordeaux",
    description:
      "Création, design, conception et développement d'une application communautaire de coworking.",
    icon: React.createElement(CgWorkAlt),
    date: "Juin 2023 - Aujourd'hui",
  },
  {
    title: "Freelancing",
    location: "Bordeaux",
    description:
      "Création de sites vitrine et application pour des clients. Stack : React, Next.js, TypeScript, Tailwind, Prisma.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Aujourd'hui",
  },
  {
    title: "Bootcamp Fullstack - PHP & Symfony",
    location: "Bordeaux",
    description:
      "Réalisation d'une application ecommerce intégrale en 4 jours  chrono avec Symfony 6 et Bootstrap.",
    icon: React.createElement(LuGraduationCap),
    date: "Novembre 2023 - Janvier 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Coworkez Malin",
    description:
      "Application communautaire sur laquelle les utilisateurs peuvent consulter et ajouter des endroits où coworker gratuitement.",
    tags: ["Typescript", "React", "Redux", "Next.js", "PostgreSQL", "Google API"],
    imageUrl: "/project3.png",
    webLink: "https://coworkezmalin.com",
  },
  {
    title: "MIRACL.ai",
    description:
      "Site et blog du laboratoire de recherche en cardiologie et intelligence artificielle, MIRACL.ai, du CHU de Lariboisière.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Sanity"],
    imageUrl: "/project4.png",
    webLink: "https://miracl-ai.com",
  },
  {
    title: "Métaphore Coaching",
    description:
      "Site vitrine avec système de réservation pour un coach professionnel, Christophe Jacques.",
    tags: ["Typescript", "React", "Next.js", "Tailwind", "Calendly"],
    imageUrl: "/project5.png",
    webLink: "https://metaphorecoaching.com",
  },
  {
    title: "Culinaria",
    description:
      "Application e-commerce complète réalisée en 4 jours. Gestion de panier, des commandes, back office complet pour les admins, confirmation mail etc.",
    tags: ["PHP", "Symfony", "MySQL", "EasyAdmin", "Mailer"],
    imageUrl: "/project2.png",
    webLink: "https://culinaria.netlify.app",
  },
  {
    title: "Chiaroscuro",
    description:
      "Site vitrine pour un restaurant thématique fictif, réalisé dans le cadre d'un concours. Intègre un système de réservation dynamique avec confirmation mail.",
    tags: ["Typescript", "React", "Node.js", "Express", "MongoDB"],
    imageUrl: "/project1.png",
    webLink: "https://restaurant-app-67d7.vercel.app/",
  },
] as const;

export const skillsData = [
  {
    name: "TypeScript",
    logo: "/skill-ts.svg",
  },
  {
    name: "React",
    logo: "/skill-react.svg",
  },
  {
    name: "Next.js",
    logo: "/skill-next.svg",
  },
  {
    name: "Node.js",
    logo: "/skill-node.svg",
  },
  {
    name: "PHP",
    logo: "/skill-php.svg",
  },
  {
    name: "Symfony",
    logo: "/skill-symfony.svg",
  },
  {
    name: "PostgreSQL",
    logo: "/skill-post.svg",
  },
  {
    name: "MySQL",
    logo: "/skill-my.svg",
  }
] as const;
