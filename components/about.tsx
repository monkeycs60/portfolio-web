"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("A propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>A propos</SectionHeading>
      <p className="mb-3">
        Après une formation d'un an sur l'écosystème {" "}
        <span className="font-medium">Javascript</span>, je me suis spécialisé sur le framework <span className="font-medium">React</span>. J'ai ensuite appris à maîtriser le {" "}
        <span className="font-medium"> développement full-stack</span> avec <span className="font-medium">NextJS et Typescript</span> {" "} en autodidacte.{" "}
        Dans le but de simplifier ma vie quotidienne et celle des autres, j'ai développé une application communautaire, <Link target="_blank" href={"https://coworkezmalin.com"} className="underline">Coworkez Malin</Link>,
        qui permet de trouver des espaces de travail gratuits à proximité de chez soi.

      </p>
      <p>
        J'ai par ailleurs suivi un bootcamp de 3 mois sur <span className="font-medium"> PHP et le framework Symfony</span>, suite à quoi j'ai créé une application e-commerce complète en 4 jours chrono. En freelance, j'ai aussi co-désigné et développé plusieurs sites, notamment pour un laboratoire du <span className="italic">CHU de Lariboisière.</span>
      </p>
      <p className="mt-3">
        Je suis aujourd'hui à la recherche d'un <span className="underline">poste de développeur full-stack</span>, en remote ou à Bordeaux.
      </p>
    </motion.section>
  );
}
