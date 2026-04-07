import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import FloatingDots from "./FloatingDots";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import type { Lang } from "@/translations";
import { translations } from "@/translations";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardImageVariants = {
  hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)", scale: 1.15 },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0 0 0)",
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 16,
      duration: 0.8,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.6 },
  },
};

const shineKeyframes = {
  shine: {
    x: [0, 0, 200, 200, 0],
    opacity: [0, 0, 1, 0, 0],
  },
};

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
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8 md:space-y-14"
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
  const isEven = index % 2 === 0;
  const keys = PROJECT_KEY_MAP[project.id] ?? {
    title: project.title,
    desc: project.description,
    category: project.category,
  };
  const title = typeof keys.title === "string" && t[keys.title as keyof typeof t] ? t[keys.title as keyof typeof t] : project.title;
  const desc = typeof keys.desc === "string" && t[keys.desc as keyof typeof t] ? t[keys.desc as keyof typeof t] : project.description;
  const category = typeof keys.category === "string" && t[keys.category as keyof typeof t] ? t[keys.category as keyof typeof t] : project.category;

  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const bgLight = useTransform(
    [rotateX, rotateY],
    ([rx, ry]: [number, number]) =>
      `radial-gradient(circle at ${50 + ry * 5}% ${50 + rx * 5}%, rgba(255,255,255,0.06) 0%, transparent 60%)`
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * 6);
    rotateY.set(-x * 6);
  }, [rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <motion.div
      variants={cardVariants}
      className={`group/proj ${isEven ? "" : ""}`}
      style={{ perspective: 1200 }}
    >
      <div className="project-card-main">
        {/* Image */}
        <motion.a
          ref={ref}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${isEven ? "lg:order-1" : "lg:order-2"} block`}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
            transformStyle: "preserve-3d",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Animated border gradient */}
          <div className="relative rounded-2xl overflow-hidden bg-card/50"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: isHovered
                ? "0 0 0 1px hsl(var(--border) / 0.4), 0 20px 60px -15px rgba(0,0,0,0.3)"
                : "0 4px 20px -10px rgba(0,0,0,0.15)",
              transition: "box-shadow 0.5s ease, border-color 0.5s ease",
            }}
          >
            {/* Image wrapper with clip reveal */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                variants={cardImageVariants}
                className="relative"
              >
                <motion.img
                  src={project.image}
                  alt={title}
                  loading="lazy"
                  width={800}
                  height={544}
                  className="w-full aspect-[4/3] object-cover"
                  style={{
                    scale: useTransform([rotateX, rotateY], () => isHovered ? 1.06 : 1),
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Shine sweep effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 70%)",
                    left: "-60%",
                    width: "30%",
                  }}
                  animate={{ left: isHovered ? "120%" : "-60%" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Category badge */}
                <motion.div
                  className="absolute top-4 left-4 z-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <span className="inline-block px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-background/90 backdrop-blur-sm text-foreground border border-border/20">
                    {category}
                  </span>
                </motion.div>

                {/* Project number stamp */}
                <motion.div
                  className="absolute top-4 right-4 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-xs font-bold border border-border/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>

                {/* Corner decorations */}
                <motion.div
                  className="absolute bottom-4 left-4 z-20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M0 32V8C0 3.58 3.58 0 8 0H32"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* CTA button */}
                <motion.div
                  className="absolute bottom-4 right-4 z-20"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.3 }}
                >
                  <motion.div
                    className="bg-background/90 backdrop-blur-md text-foreground p-3 rounded-full shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.15, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
                {/* Shimmer / glass reflection top band */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px overflow-hidden pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.a>

        {/* Info */}
        <motion.div
          className={`space-y-4 lg:pt-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-px bg-foreground/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: isEven ? "right" : "left" }}
            />
            <p className="font-accent text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
              Case {String(index + 1).padStart(2, "0")}
            </p>
          </div>
          <p
            className="headline-md text-foreground text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </p>
          <p className="body-md leading-relaxed">{desc}</p>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-accent text-sm font-medium uppercase tracking-wide text-foreground group/link"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("span")?.classList.add("border-purple-500");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("span")?.classList.remove("border-purple-500");
            }}
          >
            <span className="border-b-2 border-foreground/50 pb-0.5 transition-all duration-300 group-hover/link:border-foreground">
              {t.proj_view}
            </span>
            <motion.div
              whileHover={{ x: 4, y: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowUpRight className="w-4 h-4 transition-colors duration-300 group-hover/link:text-purple-500" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface ProjectsSectionProps {
  showAll?: boolean;
  lang?: Lang;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

export default ProjectsSection;
