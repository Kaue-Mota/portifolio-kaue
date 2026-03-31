import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section className="section-padding">
      <div className="editorial-container">
        <div className="editorial-divider-thick mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <AnimatedSection className="lg:col-span-8">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Desenvolvimento Web · Design · Resultados
            </p>
            <h1 className="headline-xl text-foreground mb-6">
              Desenvolvedor que cria sites que geram resultados
            </h1>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-4 flex flex-col justify-end" delay={0.15}>
            <p className="body-lg mb-8">
              Sites profissionais com foco em performance, conversão e uma
              experiência visual que impressiona. Do conceito à entrega.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/projetos"
                className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide uppercase text-center hover:opacity-90 transition-opacity rounded-lg"
              >
                Ver projetos
              </Link>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-foreground text-foreground px-6 py-3 text-sm font-medium tracking-wide uppercase text-center hover:bg-foreground hover:text-background transition-colors rounded-lg"
              >
                Entrar em contato
              </a>
            </div>
          </AnimatedSection>
        </div>

        <div className="editorial-divider mt-12" />
      </div>
    </section>
  );
};

export default Hero;
