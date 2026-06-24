type Project = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Plateforme E-commerce",
    image: "🛒",
    description:
      "Solution complète avec gestion produits, paiement, espace administrateur.",
    tech: ["Next.js", "Node.js", "MySQL"],
    link: "#",
  },
  {
    title: "Assistant IA Santé",
    image: "🤖",
    description:
      "Chatbot intelligent capable d'accompagner les utilisateurs.",
    tech: ["Python", "FastAPI", "IA"],
    link: "#",
  },
  {
    title: "Application Mobile",
    image: "📱",
    description:
      "Application mobile cross-platform avec authentification OAuth.",
    tech: ["React Native", "Expo", "Firebase"],
    link: "#",
  },
];

export default function Projects(): JSX.Element {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-6xl font-black text-center">
        Mes projets
      </h2>

      <p className="text-center text-gray-400 mt-5">
        Quelques réalisations qui démontrent mes compétences
      </p>

      <div className="grid md:grid-cols-3 gap-10 mt-16">
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="group bg-slate-900 rounded-2xl p-8 border border-yellow-600/20 hover:border-yellow-500 transition hover:-translate-y-3"
          >
            <div className="text-6xl">{project.image}</div>

            <h3 className="text-2xl font-bold mt-6">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t: string) => (
                <span
                  key={t}
                  className="bg-yellow-600/20 px-3 py-1 rounded-full text-yellow-400 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <button className="mt-8 text-yellow-400 font-bold">
              Voir le projet →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}