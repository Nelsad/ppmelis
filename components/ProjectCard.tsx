import Image from "next/image";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {

  return (
    <div className="project-card group h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-melis-navy/50 to-transparent" />
      </div>

      <div className="p-4 sm:p-6">
        <p className="text-xs font-medium text-melis-cyan transition-transform duration-300 group-hover:translate-x-1 sm:text-sm">
          {project.location}
        </p>
        <h3 className="mt-1 font-serif text-lg font-bold text-melis-navy transition-colors duration-300 group-hover:text-melis-cyan sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-melis-gray">
          {project.description}
        </p>
      </div>
    </div>
  );
}
