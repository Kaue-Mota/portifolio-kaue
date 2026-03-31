import AnimatedSection from "./AnimatedSection";

const About = () => (
  <section id="sobre" className="section-padding bg-secondary">
    <div className="editorial-container">
      <AnimatedSection>
        <h2 className="headline-lg text-foreground mb-2">Sobre</h2>
        <div className="editorial-divider-thick mb-10" />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <AnimatedSection className="lg:col-span-7">
          <p className="body-lg mb-6">
            Sou Kauê Mota, desenvolvedor web focado em criar experiências
            digitais que funcionam — e que vendem. Cada projeto é tratado com
            atenção ao detalhe, desde a estrutura do código até o pixel final.
          </p>
          <p className="body-lg mb-6">
            Trabalho com empresas e profissionais que entendem que um bom site
            não é luxo, é investimento. Meu objetivo é entregar resultados
            reais: mais visibilidade, mais leads, mais vendas.
          </p>
          <p className="body-lg">
            Utilizo as tecnologias mais modernas do mercado para garantir sites
            rápidos, responsivos e fáceis de manter. Cada projeto é único e
            recebe uma abordagem sob medida.
          </p>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-4 lg:col-start-9" delay={0.15}>
          <div className="border-l-2 border-foreground pl-6 flex flex-col items-center lg:items-start">
            <img width={300} className="rounded-full" src="/images/imagemwb.png" alt="" />
            <blockquote className="font-display text-xl md:text-2xl italic text-foreground leading-snug mb-4">
              "Design não é apenas como algo parece. Design é como algo funciona."
            </blockquote>
            <cite className="font-body text-sm text-muted-foreground not-italic">
              — Steve Jobs
            </cite>

          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default About;
