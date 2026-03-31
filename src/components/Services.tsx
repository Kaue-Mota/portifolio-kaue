import AnimatedSection from "./AnimatedSection";
import serviceSitesImg from "@/assets/service-sites.jpg";
import serviceLandingImg from "@/assets/service-landing.jpg";
import serviceSystemsImg from "@/assets/service-systems.jpg";

const services = [
  {
    title: "Criação de Sites",
    description:
      "Sites institucionais e portfólios profissionais com design sob medida, performance otimizada e foco em resultados.",
    image: serviceSitesImg,
  },
  {
    title: "Landing Pages",
    description:
      "Páginas de alta conversão com copywriting estratégico, design persuasivo e integração com ferramentas de marketing.",
    image: serviceLandingImg,
  },
  {
    title: "Sistemas Simples",
    description:
      "Painéis administrativos, dashboards e ferramentas web personalizadas para otimizar processos do seu negócio.",
    image: serviceSystemsImg,
  },
];

const Services = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="editorial-container">
      <AnimatedSection>
        <h2 className="headline-lg mb-2">Serviços</h2>
        <div className="w-full h-[2px] bg-primary-foreground/30 mb-10" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1}>
            <div className="bg-card text-card-foreground rounded-[var(--radius)] overflow-hidden border border-border/20 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="headline-md mb-3">{service.title}</h3>
                <p className="body-md">{service.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
