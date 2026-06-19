import AnimateOnScroll from "@/components/AnimateOnScroll";
import ProjectCard from "@/components/ProjectCard";
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
      className={`py-20 md:py-28 ${isOngoing ? "bg-gray-50" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimateOnScroll className="mb-12 text-center">
          <h2
            id={`${id}-title`}
            className="font-serif text-3xl font-bold text-melis-navy md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-lg text-melis-gray">{subtitle}</p>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <AnimateOnScroll
              key={project.id}
              variant="fade-up"
              delay={index * 150}
            >
              <ProjectCard project={project} variant={variant} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
