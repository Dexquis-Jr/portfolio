import AnimatedSection from "@/components/AnimatedSection";

export default function Experience() {
  const experiences = [
    {
      date: "2026",
      title: "Développeur Full Stack",
      desc: "Création d'applications web modernes avec React, Next.js et backend API performantes.",
    },
    {
      date: "2025",
      title: "Solutions IA",
      desc: "Développement de fonctionnalités intelligentes avec Python, FastAPI et intégration IA.",
    },
    {
      date: "2024",
      title: "Projets Web & Mobile",
      desc: "Conception d'applications mobiles et plateformes web hautes performances.",
    },
  ];

  return (
    <AnimatedSection id="experience">
      <div className="container-wrapper">
        <div className="section-header">
          <p className="section-label">Expérience</p>
          <h2 className="section-heading">Mon parcours</h2>
          <p className="section-description">
            Étapes marquantes de mon expérience professionnelle et mes domaines
            d&apos;expertise.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.date}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div
                  className={`md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="card-container">
                    <span className="text-sm font-bold uppercase tracking-widest text-accent">
                      {exp.date}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="mt-4 text-base text-muted leading-7">
                      {exp.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-yellow-400 ring-4 ring-yellow-400/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
