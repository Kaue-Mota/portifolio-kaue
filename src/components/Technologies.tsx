import { motion } from "framer-motion";
import FloatingDots from "./FloatingDots";
import type { Lang } from "@/translations";
import { translations } from "@/translations";

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

interface TechItem {
  name: string;
  icon: string;
  description: string;
}

const getTechnologies = (lang: Lang): TechItem[] => [
  { name: "Vite", icon: "vitejs", description: translations[lang].tech_vite as string },
  { name: "Tailwind CSS", icon: "tailwindcss", description: translations[lang].tech_tailwind as string },
  { name: "HTML5", icon: "html5", description: translations[lang].tech_html5 as string },
  { name: "CSS3", icon: "css3", description: translations[lang].tech_css3 as string },
  { name: "TypeScript", icon: "typescript", description: translations[lang].tech_typescript as string },
  { name: "React", icon: "react", description: translations[lang].tech_react as string },
  { name: "Node.js", icon: "nodejs", description: translations[lang].tech_nodejs as string },
  { name: "Express", icon: "express", description: translations[lang].tech_express as string },
  { name: "PostgreSQL", icon: "postgresql", description: translations[lang].tech_postgresql as string },
  { name: "Docker", icon: "docker", description: translations[lang].tech_docker as string },
  { name: "Prisma", icon: "prisma", description: translations[lang].tech_prisma as string },
];

const Technologies = ({ lang }: { lang: Lang }) => {
  const techData = getTechnologies(lang);
  const t = translations[lang];

  return (
    <section id="tecnologias" className="section-padding relative overflow-hidden">
      <div className="blob-purple absolute top-24 -left-60 w-[500px] h-[500px] pointer-events-none" />
      <div className="blob-blue absolute bottom-24 -right-60 w-[500px] h-[500px] pointer-events-none" />

      <FloatingDots paletteIndex={1} />

      <div className="editorial-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-accent text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            {t.section_stack}
          </p>
          <h2 className="headline-lg text-foreground mb-2">
            {t.section_technologies}
          </h2>
          <div className="editorial-divider-thick mb-6" />
          <p className="body-lg max-w-2xl mb-12">
            {t.tech_subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {techData.map((tech) => (
            <motion.div key={tech.name} variants={cardVariants}>
              <div className="tech-card group h-full">
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500 rounded-xl" />
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                    alt={tech.name}
                    width={28}
                    height={28}
                    className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
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
};

export default Technologies;
