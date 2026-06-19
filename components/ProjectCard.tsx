import Image from "next/image";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
  variant: "completed" | "ongoing";
};

export default function ProjectCard({ project, variant }: ProjectCardProps) {
  const isOngoing = variant === "ongoing";

  return (
    <div className="group h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold transition-transform duration-300 group-hover:scale-105 ${
            isOngoing
              ? "bg-melis-cyan text-melis-navy"
              : "bg-melis-navy text-white"
          }`}
        >
          {isOngoing ? "U toku" : "Završeno"}
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <p className="text-xs font-medium text-melis-cyan sm:text-sm">{project.location}</p>
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
