import AnimateOnScroll from "@/components/AnimateOnScroll";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import type { Project } from "@/lib/content";

type ProjectsProps = {
  id: string;
  title: string;
  subtitle: string;
  projects: Project[];
  variant: "completed" | "ongoing";
};

export default function Projects({
  id,
  title,
  subtitle,
  projects,
  variant,
}: ProjectsProps) {
  const isOngoing = variant === "ongoing";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`overflow-hidden py-14 sm:py-20 md:py-28 ${isOngoing ? "bg-gray-50" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id={`${id}-title`}
          title={title}
          subtitle={subtitle}
          className="mb-8 sm:mb-12"
        />

        <div className="grid gap-5 sm:gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <AnimateOnScroll
              key={project.id}
              variant="fade-up"
              delay={index * 150}
            >
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
