import { motion } from "framer-motion";

const technologies = [
  { name: "Vite", icon: "vitejs", description: "Build tooling rápido" },
  { name: "Tailwind CSS", icon: "tailwindcss", description: "Styling utility-first" },
  { name: "HTML5", icon: "html5", description: "Estrutura semântica" },
  { name: "CSS3", icon: "css3", description: "Layouts e animações" },
  { name: "TypeScript", icon: "typescript", description: "Tipagem e segurança" },
  { name: "Node.js", icon: "nodejs", description: "Runtime no servidor" },
  { name: "Express", icon: "express", description: "APIs e middlewares" },
  { name: "PostgreSQL", icon: "postgresql", description: "Banco relacional" },
  { name: "Docker", icon: "docker", description: "Containerização" },
  { name: "Prisma", icon: "prisma", description: "ORM type-safe" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 18 },
  },
};

const Technologies = () => (
  <section id="tecnologias" className="section-padding relative overflow-hidden">
    <div className="blob-purple absolute -top-32 -left-20 w-[500px] h-[500px] pointer-events-none opacity-60" />
    <div className="blob-blue absolute -bottom-32 right-10 w-[500px] h-[500px] pointer-events-none opacity-60" />

    <div className="editorial-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-accent text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
          Stack
        </p>
        <h2 className="headline-lg text-foreground mb-2">
          Tecnologias
        </h2>
        <div className="editorial-divider-thick mb-6" />
        <p className="body-lg max-w-2xl mb-12">
          Ferramentas modernas que utilizo para construir soluções rápidas,
          escaláveis e com qualidade profissional.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
      >
        {technologies.map((tech) => (
          <motion.div key={tech.name} variants={cardVariants}>
            <div className="tech-card group h-full">
              <div className="w-12 h-12 mb-4 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500 rounded-xl" />
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <h3 className="font-body text-sm font-semibold text-foreground mb-1">
                {tech.name}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-snug">
                {tech.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Technologies;
