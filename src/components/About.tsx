import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { label: "Projetos", value: "10+" },
  { label: "Tecnologias", value: "10" },
  { label: "Foco", value: "Resultados" },
];

const About = () => (
  <section id="sobre" className="section-padding relative overflow-hidden">
    <div className="hidden md:block blob-purple absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none" />
    <div className="hidden md:block blob-blue absolute -bottom-40 -left-40 w-[500px] h-[500px] pointer-events-none" />

    <div className="editorial-container relative z-10">
      <AnimatedSection>
        <h2 className="headline-lg text-foreground mb-2">Sobre</h2>
        <div className="editorial-divider-thick mb-10" />
      </AnimatedSection>

      {/* Mobile: stats first, then text. Desktop: text first, stats aside */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
          <AnimatedSection>
            <p className="body-lg mb-6">
              Sou Kauê Mota, desenvolvedor web focado em criar experiências
              digitais que funcionam — e que vendem. Cada projeto é tratado com
              atenção ao detalhe, desde a estrutura do código até o pixel final.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="body-lg mb-6">
              Trabalho com empresas e profissionais que entendem que um bom site
              não é luxo, é investimento. Meu objetivo é entregar resultados
              reais: mais visibilidade, mais leads, mais vendas.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="body-lg">
              Utilizo as tecnologias mais modernas do mercado para garantir sites
              rápidos, responsivos e fáceis de manter. Cada projeto é único e
              recebe uma abordagem sob medida.
            </p>
          </AnimatedSection>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
          <AnimatedSection className="flex flex-col sm:flex-row lg:flex-col gap-6" delay={0.15}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l border-border pl-4"
              >
                <p
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}

            <motion.blockquote
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-l border-border pl-4"
            >
              <p
                className="text-base sm:text-lg italic text-foreground/80 leading-snug"
                style={{ fontFamily: "var(--font-italic)" }}
              >
                "Design não é apenas como algo parece. Design é como algo funciona."
              </p>
              <cite className="text-xs text-muted-foreground mt-2 block not-italic">
                — Steve Jobs
              </cite>
            </motion.blockquote>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default About;
