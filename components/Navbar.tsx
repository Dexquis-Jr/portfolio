"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import CvModal from "@/components/CvModal";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-yellow-600/20 bg-slate-950/95 backdrop-blur-md">
      <div className="container-wrapper flex items-center justify-between py-5">
        <a
          href="#"
          className="text-2xl font-black tracking-tight text-accent hover:text-yellow-200 transition"
        >
          DEXQUIS
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${activeSection === link.href
                ? "text-accent"
                : "text-gray-300 hover:text-accent"
                }`}
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => setCvOpen(true)}
            className="btn-primary text-sm px-6 py-2"
          >
            CV
          </button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex p-2 text-gray-300 transition hover:text-accent hover:bg-slate-900/50 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-yellow-600/20 bg-slate-950/98 px-6 pb-6">
          <div className="flex flex-col gap-3 pt-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg border px-4 py-3 text-sm font-medium transition ${activeSection === link.href
                  ? "border-accent text-accent bg-accent/10"
                  : "border-yellow-600/20 bg-slate-900/50 text-gray-200 hover:border-accent hover:text-accent hover:bg-accent/5"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setCvOpen(true);
              }}
              className="btn-primary w-full text-center"
            >
              CV
            </button>
          </div>
        </div>
      )}
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </nav>
  );
}

