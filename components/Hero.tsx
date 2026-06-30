"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcons";

const HERO_TITLE = siteConfig.name;

export default function Hero() {
  const [display, setDisplay] = useState("");
  const [photoHovered, setPhotoHovered] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplay(HERO_TITLE.slice(0, index));
      index += 1;

      if (index > HERO_TITLE.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-wrapper min-h-screen flex items-center">
      <div className="container-wrapper">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-bold text-lg tracking-widest uppercase">
                {siteConfig.title.toUpperCase()}
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
                {display}
                <span className="text-accent animate-pulse">|</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-muted font-semibold">
                {siteConfig.tagline}
              </h2>
            </div>

            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              Je conçois des applications modernes, performantes et intelligentes
              avec les technologies web actuelles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="btn-primary text-center">
                Voir mes projets
              </a>

              <a
                href={siteConfig.cvPath}
                download
                className="btn-secondary text-center"
              >
                Télécharger CV
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-btn"
              >
                <GitHubIcon />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-btn"
              >
                <LinkedInIcon />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="icon-btn"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div
              className="relative w-72 h-96 sm:w-80 sm:h-[28rem]"
              onMouseEnter={() => setPhotoHovered(true)}
              onMouseLeave={() => setPhotoHovered(false)}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-3xl blur-2xl" />
              <Image
                src={siteConfig.profileImages.primary}
                alt={`Photo de ${siteConfig.name}`}
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className={`relative object-cover rounded-3xl border-2 border-yellow-500/30 shadow-2xl transition-all duration-700 ${
                  photoHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
                }`}
                priority
              />
              <Image
                src={siteConfig.profileImages.secondary}
                alt={`Photo de ${siteConfig.name}`}
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className={`relative object-cover rounded-3xl border-2 border-yellow-500/30 shadow-2xl transition-all duration-700 ${
                  photoHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
