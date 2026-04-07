import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import FloatingDots from "./FloatingDots";

const WHATSAPP_URL =
  "https://wa.me/5561993375795?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20site";

const contactItems = [
  { label: "E-mail", value: "pckaue1234@gmail.com", href: "mailto:pckaue1234@gmail.com" },
  { label: "WhatsApp", value: "(61) 99101-4779", href: WHATSAPP_URL },
  { label: "Localização", value: "Brasil — Remoto", href: null },
];

const Contact = () => (
  <section id="contato" className="section-padding relative overflow-hidden">
    <div className="blob-pink absolute top-32 -right-40 w-[400px] h-[400px] pointer-events-none opacity-20" />
    <div className="blob-blue absolute bottom-32 -left-40 w-[400px] h-[400px] pointer-events-none opacity-15" />

    <FloatingDots paletteIndex={3} />

    <div className="editorial-container relative z-10">
      <AnimatedSection>
        <h2 className="headline-lg text-foreground mb-2">Contato</h2>
        <div className="editorial-divider-thick mb-8 sm:mb-10" />
      </AnimatedSection>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-4">
          <AnimatedSection>
            <p
              className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pronto para ter um site que realmente funciona?
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="body-lg mb-6 sm:mb-8">
              Entre em contato pelo WhatsApp e vamos conversar sobre o seu projeto.
              Resposta rápida, orçamento sem compromisso e processo transparente do
              início ao fim.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center text-sm sm:text-base"
            >
              Falar no WhatsApp
            </a>
          </AnimatedSection>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
          <AnimatedSection className="flex flex-row lg:flex-col gap-6 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" delay={0.15}>
            {contactItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 lg:flex-shrink border-l border-border pl-4"
              >
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="text-foreground hover:opacity-70 transition-opacity no-underline">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground">{item.value}</p>
                )}
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
