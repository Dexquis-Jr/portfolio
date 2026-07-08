"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Project = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Freeads",
    image: "/images/freeads.png",
    description:
      "Un site qui permet de faire une annonce et gérer ses annonces.",
    tech: ["Laravel(Full)"],
    link: "https://freeads.freedev.app",
  },
  // {
  //   title: "Application Web Full Stack",
  //   image: "/images/ph-pro2.png",
  //   description:
  //     "Application web complète avec interface utilisateur soignée et backend performant.",
  //   tech: ["React", "Node.js", "Java"],
  //   link: siteConfig.github,
  // },
  // {
  //   title: "Solutions IA & API",
  //   image: "/images/ph-pro1.png",
  //   description:
  //     "Intégration de fonctionnalités intelligentes et APIs sécurisées pour des produits innovants.",
  //   tech: ["Python", "FastAPI", "IA"],
  //   link: siteConfig.github,
  // },
];

export default function Projects() {
  return (
    <AnimatedSection id="projects">
      <div className="container-wrapper">
        <div className="section-header">
          <p className="section-label">Projets</p>
          <h2 className="section-heading">Mes projets</h2>
          <p className="section-description">
            Réalisations qui démontrent mes compétences techniques et visuelles.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-container flex flex-col group overflow-hidden p-0"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div><br />

              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-base text-muted leading-7 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div><br />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent group-hover:text-yellow-200 transition"
                >
                  Voir le projet
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
