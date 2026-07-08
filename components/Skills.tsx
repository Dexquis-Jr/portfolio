import AnimatedSection from "@/components/AnimatedSection";

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "Vue.js",
        "HTML/CSS/Javascript",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Laravel",
        "Nest.js",
        "Python",
        "Php",
      ],
    },
    {
      title: "Base de données",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Docker"],
    },
  ];

  return (
    <AnimatedSection id="skills">
      <div className="container-wrapper">
        <div className="section-header">
          <p className="section-label">Compétences</p>
          <h2 className="section-heading">Mes compétences</h2>
          <p className="section-description">
            Technologies que j&apos;utilise pour construire des solutions
            modernes et scalables.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.title} className="card-container group">
              <h3 className="text-2xl font-bold text-accent group-hover:translate-x-1 transition-transform">
                {skill.title}
              </h3><br /> <hr /> <br />
              <div className="mt-8 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span key={item} className="tech-badge-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
