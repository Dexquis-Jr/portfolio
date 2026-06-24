type SkillCategory = {
  title: string;
  items: string[];
};

const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Java", "Spring Boot", "Python", "FastAPI"],
  },
  {
    title: "Base de données & Cloud",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Docker", "AWS"],
  },
];

export default function Skills(): JSX.Element {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-black">
          Mes compétences
        </h2>

        <p className="text-gray-400 mt-4">
          Technologies que j'utilise pour construire des solutions modernes
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {skills.map((skill: SkillCategory) => (
          <div
            key={skill.title}
            className="bg-slate-900 rounded-2xl p-8 border border-yellow-600/30 hover:border-yellow-500 transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-yellow-500">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-3 mt-6">
              {skill.items.map((item: string) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-yellow-600/20 rounded-full text-yellow-300 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}