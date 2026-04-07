import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FloatingDots from "./FloatingDots";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import type { Lang } from "@/translations";
import { translations } from "@/translations";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

interface ProjectsSectionProps {
  showAll?: boolean;
  lang?: Lang;
}

const PROJECT_KEY_MAP: Record<string, { title: string; desc: string; category: string }> = {
  "1": { title: "proj_barber_title", desc: "proj_barber_desc", category: "proj_barber_cat" },
  "2": { title: "proj_eternare_title", desc: "proj_eternare_desc", category: "proj_eternare_cat" },
  "3": { title: "proj_kmoveis_title", desc: "proj_kmoveis_desc", category: "proj_kmoveis_cat" },
  "4": { title: "proj_lelaluminio_title", desc: "proj_lelaluminio_desc", category: "proj_lelaluminio_cat" },
};

const ProjectsSection = ({ showAll = false, lang = "pt" }: ProjectsSectionProps) => {
  const t = translations[lang];
  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projetos" className="section-padding relative overflow-hidden">
      <FloatingDots paletteIndex={1} />

      <div className="editorial-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-accent text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            {t.section_portfolio}
          </p>
          <div className="flex items-end justify-between mb-2">
            <h2 className="headline-lg text-foreground">{t.section_projects}</h2>
            {!showAll && (
              <Link
                to="/projetos"
                className="group font-accent text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                {t.section_viewall}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </div>
          <div className="editorial-divider-thick mb-10" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12"
        >
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} lang={lang} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, lang = "pt" }: { project: Project; index: number; lang?: Lang }) => {
  const t = translations[lang];
  const keys = PROJECT_KEY_MAP[project.id] ?? {
    title: project.title,
    desc: project.description,
    category: project.category,
  };
  const title = typeof keys.title === "string" && t[keys.title as keyof typeof t] ? t[keys.title as keyof typeof t] : project.title;
  const desc = typeof keys.desc === "string" && t[keys.desc as keyof typeof t] ? t[keys.desc as keyof typeof t] : project.description;
  const category = typeof keys.category === "string" && t[keys.category as keyof typeof t] ? t[keys.category as keyof typeof t] : project.category;

  return (
    <motion.div variants={cardVariants} className="group/proj">
      <div className="project-card-main">
        {/* Image */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${index % 2 === 1 ? "lg:order-2" : ""} block overflow-hidden`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-shadow duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <img
              src={project.image}
              alt={title}
              loading="lazy"
              width={800}
              height={544}
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-block px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-background/90 backdrop-blur-sm text-foreground">
                {category}
              </span>
            </div>
            {/* CTA */}
            <div className="absolute bottom-4 right-4 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <div className="bg-background text-foreground p-3 rounded-full shadow-xl">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </a>

        {/* Info */}
        <div className={`space-y-3 lg:pt-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
          <p
            className="headline-md text-foreground text-xl sm:text-2xl lg:text-3xl font-bold leading-tight group-hover/proj:opacity-80 transition-opacity"
          >
            {title}
          </p>
          <p className="body-md leading-relaxed">{desc}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-accent text-sm font-medium uppercase tracking-wide text-foreground group/link"
          >
            <span className="border-b-2 border-foreground pb-0.5 transition-all group-hover/link:border-border">
              {t.proj_view}
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
