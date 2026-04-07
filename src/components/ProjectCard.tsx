import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
    className="project-card group"
  >
    <div className="overflow-hidden rounded-xl mb-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl" />
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        width={800}
        height={544}
        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg">
          <ExternalLink className="w-4 h-4 text-foreground" />
        </div>
      </div>
    </div>

    <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
      {project.category}
    </p>

    <h3 className="headline-md text-foreground mb-3 group-hover:opacity-80 transition-opacity">
      {project.title}
    </h3>

    <p className="body-md mb-4">{project.description}</p>

    <a
      href={project.link}
      className="project-link"
    >
      Ver projeto →
    </a>
  </motion.article>
);

export default ProjectCard;
