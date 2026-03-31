import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="overflow-hidden rounded-lg mb-4">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        width={800}
        height={544}
        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>

    <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
      {project.category}
    </p>

    <h3 className="headline-md text-foreground mb-2 group-hover:opacity-80 transition-opacity">
      {project.title}
    </h3>

    <p className="body-md mb-4">{project.description}</p>

    <a
      href={project.link}
      className="inline-block font-body text-sm font-medium uppercase tracking-wide text-foreground border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity"
    >
      Ver projeto →
    </a>
  </motion.article>
);

export default ProjectCard;
