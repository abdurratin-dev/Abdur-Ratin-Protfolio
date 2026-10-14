"use client";

import { useState } from "react";
import testimonials from "../../../public/api/testimonials.json";
import projects from "../../../public/api/projects.json";
import ProjectsCard from "../cards/ProjectsCard";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonial = testimonials[activeTestimonial];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-neutral-100 text-neutral-950 scroll-mt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 top-[45%] h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Projects section */}
      <section className="relative">
        <div className="container mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          {/* Heading */}
          <header className="mb-8 sm:mb-10">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              <span className="h-px w-8 bg-gradient-to-r from-blue-700 to-cyan-500" />
              Work
            </p>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              RECENT{" "}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              A selection of projects showcasing my skills in building modern,
              responsive, and user-friendly web applications.
            </p>
          </header>

          {/* Project grid */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
            {projects
              .slice(0, showAll ? projects.length : 4)
              .map((project, index) => (
                <ProjectsCard key={index} project={project}/>
              ))}
          </div>

          {/* Load more / Show less */}
          {projects.length > 4 && (
            <div className="mt-10 flex justify-center sm:mt-12">
              <button
                type="button"
                onClick={() => setShowAll((previous) => !previous)}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                {showAll ? "Show less" : "Load more"}
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  {showAll ? "↑" : "↗"}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section
          id="testimonials"
          className="relative isolate overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-10 lg:py-20"
        >
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-52 w-52 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
              Testimonials
            </p>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              WHAT THEY SAY
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/80">
              Feedback and thoughts from people about their experience.
            </p>
          </div>

          {/* Testimonial content */}
          <div className="mx-auto mt-10 grid max-w-4xl items-center gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:gap-12 lg:mt-14">
            {/* Illustration */}
            <div className="relative mx-auto flex h-48 w-full max-w-56 items-end justify-center sm:h-56">
              <div className="absolute left-2 top-4 h-28 w-28 rounded-full bg-white/20 blur-2xl" />

              <div className="absolute left-5 top-8 h-12 w-12 rotate-45 rounded-lg bg-cyan-200/60" />

              <div className="relative z-10 flex h-40 w-36 flex-col items-center justify-center rounded-t-full border border-white/30 bg-white/15 p-4 text-center shadow-xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 sm:h-48 sm:w-40">
                <span className="text-5xl font-light leading-none">“</span>

                <span className="mt-2 text-xs font-bold leading-6 tracking-[0.15em] sm:text-sm">
                  YOUR
                  <br />
                  SUCCESS
                  <br />
                  MATTERS
                </span>
              </div>
            </div>

            {/* Quote */}
            <div className="min-w-0">
              <span
                aria-hidden="true"
                className="text-5xl font-black leading-none text-white/40"
              >
                “
              </span>

              <blockquote className="text-base font-medium italic leading-8 text-white sm:text-lg lg:text-xl">
                {testimonial.quote}
              </blockquote>

              <div className="mt-5">
                <p className="font-bold">{testimonial.name}</p>
                <p className="mt-1 text-sm text-white/75">{testimonial.role}</p>
              </div>

              {/* Slider controls */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial(
                      (activeTestimonial - 1 + testimonials.length) %
                        testimonials.length,
                    )
                  }
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-lg transition-all hover:bg-white hover:text-blue-700"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial(
                      (activeTestimonial + 1) % testimonials.length,
                    )
                  }
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-lg transition-all hover:bg-white hover:text-blue-700"
                >
                  →
                </button>

                <span className="ml-2 text-xs font-medium text-white/75">
                  {activeTestimonial + 1} / {testimonials.length}
                </span>
              </div>
            </div>
          </div>

          {/* Partner names */}
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-5 border-t border-white/25 pt-6 text-center text-xs font-bold tracking-wide text-white/80 sm:grid-cols-4 sm:text-sm">
            <span>◧ square</span>
            <span>◩ PAPERZ</span>
            <span>⬡ cuebiq</span>
            <span>▥ Martino</span>
          </div>
        </section>
      )}
    </section>
  );
}
