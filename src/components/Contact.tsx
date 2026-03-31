import AnimatedSection from "./AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20site";

const Contact = () => (
  <section id="contato" className="section-padding bg-secondary">
    <div className="editorial-container">
      <AnimatedSection>
        <h2 className="headline-lg text-foreground mb-2">Contato</h2>
        <div className="editorial-divider-thick mb-10" />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <AnimatedSection className="lg:col-span-7">
          <p className="headline-md text-foreground mb-4">
            Pronto para ter um site que realmente funciona?
          </p>
          <p className="body-lg mb-8">
            Entre em contato pelo WhatsApp e vamos conversar sobre o seu projeto.
            Resposta rápida, orçamento sem compromisso e processo transparente do
            início ao fim.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide uppercase hover:opacity-90 transition-opacity rounded-lg"
          >
            Falar no WhatsApp
          </a>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-4 lg:col-start-9 flex items-end" delay={0.15}>
          <div>
            <p className="font-body text-sm text-muted-foreground mb-1 uppercase tracking-wide">
              E-mail
            </p>
            <p className="font-body text-foreground mb-6">contato@kauemota.dev</p>
            <p className="font-body text-sm text-muted-foreground mb-1 uppercase tracking-wide">
              Localização
            </p>
            <p className="font-body text-foreground">Brasil — Remoto</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Contact;
