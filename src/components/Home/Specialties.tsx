"use client";

import { useState } from "react";
import specialties from "../../../public/api/specialties.json";

export default function Specialties() {
  const [activeIndex, setActiveIndex] = useState<number | null>();

  return (
    <section
      id="specialties"
      className="relative overflow-hidden border-t border-neutral-200 bg-neutral-100 text-neutral-900 scroll-mt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="container relative mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Section heading */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            <span className="h-px w-8 bg-gradient-to-r from-blue-700 to-cyan-500" />
            What I Do
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            MY{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              SPECIALTIES
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Building modern, scalable, and intelligent web experiences
            with cutting-edge technologies.
          </p>
        </div>

        {/* Specialties accordion */}
        <div className="border-y border-neutral-200">
          {specialties.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={item.title}
                className={`border-b border-neutral-200 last:border-b-0 `}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-1 items-center gap-3 py-5 text-left transition-colors duration-300 sm:py-6 md:grid-cols-[1fr_1fr_32px] md:gap-6 lg:py-7"
                >
                  {/* Title */}
                  <span className="flex items-start gap-3">
                    <span
                      className={`mt-2 h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]"
                          : "bg-neutral-400"
                      }`}
                    />

                    <span
                      className={`text-base font-bold transition-colors duration-300 sm:text-lg lg:text-xl ${
                        isOpen
                          ? "bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent"
                          : "text-neutral-800"
                      }`}
                    >
                      {item.title}
                    </span>
                  </span>

                  {/* Description */}
                  <span className="pl-5 text-sm leading-6 text-neutral-500 md:pl-0">
                    {item.description}
                  </span>

                  {/* Accordion icon */}
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 items-center justify-center justify-self-end rounded-full border text-xl transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-blue-600 bg-gradient-to-r from-blue-700 to-cyan-500 text-white"
                        : "border-neutral-300 text-neutral-700"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="grid grid-cols-1 gap-5 pb-6 md:grid-cols-[1fr_1fr_32px] md:gap-6">
                    <div className="hidden md:block" />

                    <div className="min-w-0 animate-in fade-in duration-300">
                      {/* Expertise card */}
                      <div className="group relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 p-5 text-white shadow-lg shadow-blue-700/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/20 sm:p-7">
                        <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-36 w-36 rounded-full border border-white/20 transition-transform duration-500 group-hover:scale-125" />

                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-xs">
                          My Expertise
                        </p>

                        <h3 className="max-w-md text-xl font-extrabold leading-snug sm:text-2xl">
                          AI-Driven Full Stack Web Engineer
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
                          Turning ideas into modern, responsive, and
                          user-focused web experiences.
                        </p>
                      </div>

                      {/* Details */}
                      <p className="mt-5 text-sm leading-7 text-neutral-600">
                        {item.details}
                      </p>

                      {/* Technologies */}
                      <div className="mt-5">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-500">
                          Technologies & Tools
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-50 hover:text-blue-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block" />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Footer text */}
        <div className="mt-8 border-l-2 border-cyan-500 pl-4 sm:mt-10">
          <p className="text-sm font-semibold leading-7 text-neutral-700 sm:text-base">
            AI-Driven Full Stack Web Engineer | Next.js | React |
            TypeScript | JavaScript | Tailwind CSS
          </p>

          <p className="mt-1 text-xs leading-6 text-neutral-500 sm:text-sm">
            Technologies currently used in my projects.
          </p>
        </div>
      </div>
    </section>
  );
}