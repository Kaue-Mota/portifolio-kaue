import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";
import serviceSitesImg from "@/assets/service-sites.png";
import serviceLandingImg from "@/assets/service-landing.png";
import serviceSystemsImg from "@/assets/service-systems.png";
import type { Lang } from "@/translations";
import { translations } from "@/translations";

const Services = ({ lang }: { lang: Lang }) => {
  const t = translations[lang];

  const services = [
    {
      title: t.svc_sites_title,
      description: t.svc_sites_desc,
      image: serviceSitesImg,
    },
    {
      title: t.svc_landing_title,
      description: t.svc_landing_desc,
      image: serviceLandingImg,
    },
    {
      title: t.svc_systems_title,
      description: t.svc_systems_desc,
      image: serviceSystemsImg,
    },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <div className="blob-purple absolute top-32 -right-80 w-[500px] h-[500px] pointer-events-none opacity-30" />

      <FloatingDots paletteIndex={2} />

      <div className="editorial-container relative z-10">
        <AnimatedSection>
          <h2 className="headline-lg mb-2">{t.section_services}</h2>
          <div className="w-full h-[2px] bg-primary-foreground/30 mb-8 sm:mb-10" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="bg-card text-card-foreground rounded-xl overflow-hidden border border-border/20 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
