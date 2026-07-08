import { siteConfig } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-yellow-600/20 bg-slate-950/80 backdrop-blur-sm"> <br />
      <div className="container-wrapper py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-400">
              © {currentYear}{" "}
              <span className="text-accent font-bold">{siteConfig.name}</span>.
              Tous droits réservés.
            </p>
            <p className="text-xs text-muted mt-2">
              Full Stack Developer • Web • IA • Mobile
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-btn"
            >
              <GitHubIcon /> 
            </a> |
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-btn"
            >
              <LinkedInIcon />
            </a> |
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="icon-btn"
            >
              <MailIcon />
            </a>
          </div>

          <div className="flex flex-wrap justify-start md:justify-end gap-8 text-sm">
            <a
              href="#about"
              className="text-gray-300 font-medium transition hover:text-accent"
            >
              À propos
            </a>
            <a
              href="#projects"
              className="text-gray-300 font-medium transition hover:text-accent"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-gray-300 font-medium transition hover:text-accent"
            >
              Contact
            </a>
          </div>
        </div>
      </div> <br />
    </footer>
  );
}
