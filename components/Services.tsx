import AnimatedSection from "@/components/AnimatedSection";

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Développement Web",
      text: "Applications modernes avec React, Next.js et interfaces performantes.",
    },
    {
      icon: "🤖",
      title: "Solutions IA",
      text: "Intégration de fonctionnalités intelligentes et automatisées.",
    },
    {
      icon: "⚙️",
      title: "Backend & API",
      text: "API sécurisées avec Java, Node.js et Spring Boot.",
    },
    {
      icon: "📱",
      title: "Applications mobiles",
      text: "Applications multiplateformes sur iOS et Android.",
    },
  ];

  return (
    <AnimatedSection id="services">
      <div className="container-wrapper">
        <div className="section-header">
          <p className="section-label">Services</p>
          <h2 className="section-heading">Ce que je propose</h2>
          <p className="section-description">
            Mes services couvrent le développement web complet, le backend,
            l&apos;IA et les applications mobiles.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="card-container flex flex-col">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-base text-muted leading-relaxed flex-grow">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
