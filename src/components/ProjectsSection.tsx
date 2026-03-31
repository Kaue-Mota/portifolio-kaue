import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";

interface ProjectsSectionProps {
  showAll?: boolean;
}

const ProjectsSection = ({ showAll = false }: ProjectsSectionProps) => {
  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projetos" className="section-padding">
      <div className="editorial-container">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-2">
            <h2 className="headline-lg text-foreground">Projetos</h2>
            {!showAll && (
              <Link
                to="/projetos"
                className="font-body text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Ver todos →
              </Link>
            )}
          </div>
          <div className="editorial-divider-thick mb-10" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
