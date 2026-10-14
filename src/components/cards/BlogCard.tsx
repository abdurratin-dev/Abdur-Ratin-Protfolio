import { IGithubtype } from "@/types/type";

interface IBlogCardProps {
  repo: IGithubtype;
}
export default function BlogCard({ repo }: IBlogCardProps) {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const formatTitle = (name: string) =>
    name
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  return (
    <article
      className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"
    >
      {/* GitHub Repository Preview */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${repo.name} repository`}
        className="relative block aspect-[4/3] overflow-hidden bg-neutral-100"
      >
        <img
          src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
          alt={`${repo.name} GitHub repository preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* GitHub Badge */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-neutral-950/70 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1.01 1.73 2.66 1.23 3.31.94.1-.73.4-1.23.72-1.51-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.69.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.31-2.64 5.27-5.15 5.55.41.35.77 1.03.77 2.08v3.1c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
          </svg>
          GitHub
          <span aria-hidden="true">↗</span>
        </span>

        {/* Language badge */}
        {repo.language && (
          <span className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-md">
            {repo.language}
          </span>
        )}
      </a>

      {/* Repository Information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Updated date */}
        <div className="mb-4 flex items-center gap-2 text-xs font-medium text-neutral-500">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>

          <time dateTime={repo.updated_at}>
            Updated {formatDate(repo.updated_at)}
          </time>
        </div>

        {/* Project title */}
        <h3 className="text-lg font-extrabold leading-snug tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-xl">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            {formatTitle(repo.name)}
          </a>
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-neutral-600">
          {repo.description ||
            "Explore this project and its development history on GitHub."}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-100 pt-5">
          <span className="inline-flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700">
            <span aria-hidden="true">★</span>
            {repo.stargazers_count} stars
          </span>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:from-blue-800 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-700/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            View Project
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
