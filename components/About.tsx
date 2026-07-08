import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="container-wrapper">
        <div className="section-header">
          <p className="section-label">À propos</p>
          <h2 className="section-heading">Qui je suis</h2>
          <p className="section-description">
            Développeur Full Stack spécialisé dans les expériences web modernes,
            performantes et adaptées à l&apos;utilisateur.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] items-start">
          <div className="space-y-8">
            <p className="text-xl leading-8 text-gray-200">
              Je suis{" "}
              <span className="text-accent font-bold">
                OUFFOUET DEXQUIS JUNIOR
              </span>
              , un développeur passionné par la création de solutions numériques
              élégantes et robustes.
            </p>

            <p className="text-lg leading-8 text-muted">
              J&apos;interviens sur le frontend avec React et Next.js, et sur le
              backend avec Laravel, Nest.js, Node.js et API modernes. Mon
              objectif est de transformer des idées ambitieuses en produits
              fiables, rapides et agréables à utiliser.
            </p>

            <p className="text-lg leading-8 text-muted">
              Avec une attention particulière à l&apos;accessibilité et aux
              performances, je construis des applications qui comptent
              réellement pour l&apos;utilisateur final.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-container text-center">
              <p className="text-5xl font-black text-accent">10+</p>
              <p className="mt-3 text-sm text-muted font-medium">
                Technologies maîtrisées
              </p>
            </div>
            <div className="card-container text-center">
              <p className="text-5xl font-black text-accent">20+</p>
              <p className="mt-3 text-sm text-muted font-medium">
                Projets réalisés
              </p>
            </div>
            <div className="card-container text-center">
              <p className="text-3xl font-black text-accent">⚡</p>
              <p className="mt-3 text-sm text-muted font-medium">
                Performance optimale
              </p>
            </div>
            <div className="card-container text-center">
              <p className="text-3xl font-black text-accent">✨</p>
              <p className="mt-3 text-sm text-muted font-medium">
                Code maintenable
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
