"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

export default function Blog() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function getRepositories() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://api.github.com/users/abdurratin-dev/repos?sort=updated&per_page=100",
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Unable to load GitHub repositories.");
        }

        const data: GitHubRepo[] = await response.json();

        setRepos(data.filter((repo) => !repo.fork));
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError("GitHub projects load করা যায়নি। আবার চেষ্টা করো।");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    getRepositories();

    return () => controller.abort();
  }, []);

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
    <section
      id="blog"
      className="relative isolate overflow-hidden border-t border-neutral-200 bg-neutral-100 px-5 py-14 text-neutral-950 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <header className="mb-10 sm:mb-12">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            <span className="h-px w-8 bg-gradient-to-r from-blue-700 to-cyan-500" />
            My Journey
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                MY{" "}
                <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                  GITHUB JOURNEY
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                Explore my coding journey, projects, and development
                experiments through my GitHub repositories.
              </p>
            </div>

            <a
              href="https://github.com/abdurratin-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold transition-all duration-300 hover:border-cyan-500 hover:text-blue-700 hover:shadow-md"
            >
              GitHub Profile <span>↗</span>
            </a>
          </div>
        </header>

        {/* Loading skeleton */}
        {loading && (
          <div
            className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Loading GitHub repositories"
            aria-busy="true"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <article key={index} className="animate-pulse">
                <div className="aspect-[4/3] rounded-xl bg-neutral-200" />

                <div className="pt-4">
                  <div className="h-3 w-28 rounded bg-neutral-200" />
                  <div className="mt-4 h-5 w-3/4 rounded bg-neutral-200" />
                  <div className="mt-3 h-3 w-full rounded bg-neutral-200" />
                  <div className="mt-2 h-3 w-2/3 rounded bg-neutral-200" />
                  <div className="mt-5 h-px w-full bg-neutral-200" />
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-white p-8 text-center"
          >
            <p className="font-semibold text-neutral-800">
              Could not load repositories
            </p>

            <p className="mt-2 text-sm text-red-600">{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Try again
            </button>
          </div>
        )}

        {/* Repository cards */}
        {!loading && !error && repos.length > 0 && (
          <>
            <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <article
                  key={repo.id}
                  className="group flex min-w-0 flex-col"
                >
                  {/* GitHub repository preview */}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} repository`}
                    className="relative block aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-900/10"
                  >
                    <img
                      src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
                      alt={`${repo.name} GitHub repository preview`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute right-3 top-3 rounded-full border border-white/40 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      GitHub ↗
                    </span>
                  </a>

                  {/* Repository information */}
                  <div className="flex flex-1 flex-col pt-4">
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <time
                        dateTime={repo.updated_at}
                        className="text-neutral-500"
                      >
                        Updated {formatDate(repo.updated_at)}
                      </time>

                      {repo.language && (
                        <>
                          <span className="text-neutral-300">/</span>
                          <span className="text-blue-700">
                            {repo.language}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="text-lg font-extrabold leading-snug transition-colors duration-300 group-hover:text-blue-700">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {formatTitle(repo.name)}
                      </a>
                    </h3>

                    <p className="mt-2 line-clamp-3 min-h-[3.75rem] text-sm leading-6 text-neutral-600">
                      {repo.description ||
                        "Explore this project and its development history on GitHub."}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-3 border-b border-neutral-200 pb-4 pt-5 text-xs">
                      <span className="font-medium text-neutral-500">
                        ★ {repo.stargazers_count} stars
                      </span>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-neutral-800 transition-colors hover:text-blue-700"
                      >
                        View Project ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Empty state */}
        {!loading && !error && repos.length === 0 && (
          <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-12 text-center">
            <p className="font-semibold text-neutral-800">
              No repositories found.
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Check the GitHub profile again later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}