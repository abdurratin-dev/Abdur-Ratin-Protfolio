import { IProjectsType } from "@/types/type";
import Image from "next/image";

interface IProjectsCardProps{
    project: IProjectsType
}
export default function ProjectsCard({project}:IProjectsCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} project`}
      className="group block min-w-0 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
    >
      <article className="grid min-w-0 grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-center gap-4 rounded-2xl border border-transparent p-2 transition-all duration-300 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 sm:gap-5 sm:p-3">
        {/* Project Information */}
        <div className="flex min-w-0 flex-col items-start py-2">
          <span className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-blue-700 sm:px-3 sm:text-[10px] sm:tracking-[0.16em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500" />
            <span className="truncate">{project.category}</span>
          </span>

          <h3 className="break-words text-sm font-extrabold leading-snug tracking-tight text-neutral-900 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent sm:text-lg lg:text-xl">
            {project.title}
          </h3>

          {/* Project Link Icon */}
          <span
            aria-hidden="true"
            className="relative mt-4 inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white text-lg text-neutral-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-700/20 sm:mt-5 sm:h-11 sm:w-11 sm:text-xl"
          >
            ↗
          </span>
        </div>

        {/* Project Image */}
        <div className="relative aspect-[1.05/1] min-w-0 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-100 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-900/10 sm:aspect-[1.27/1]">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 300px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Blue-cyan overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-950/30 via-blue-700/5 to-cyan-400/10 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Decorative corner accent */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 rounded-r-full bg-gradient-to-r from-blue-700 to-cyan-500 transition-all duration-500 group-hover:w-full" />

          {/* Preview badge */}
          <span className="absolute right-2 top-2 rounded-full border border-white/40 bg-neutral-950/60 px-2 py-1 text-[9px] font-semibold text-white opacity-0 shadow-sm backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 sm:right-3 sm:top-3 sm:px-3 sm:text-[10px]">
            Preview ↗
          </span>
        </div>
      </article>
    </a>
  );
}
