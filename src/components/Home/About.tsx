import Image from "next/image";
import aboutImg from "@/assets/favicon.png";
import experiences from "../../../public/api/experiences.json";

import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-neutral-100 text-neutral-900"
    >
      {/* About Section */}
      <section className="container mx-auto px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <p className="mb-2 text-xs font-semibold italic tracking-wide text-blue-700 sm:text-sm">
          Nice to meet you!
        </p>

        <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          WELCOME TO
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
            {" "}MY WORLD.
          </span>
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:mt-14 lg:gap-16">
          {/* Profile */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="group relative flex w-full max-w-[300px] items-center justify-center overflow-hidden rounded-3xl border border-white bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 sm:p-10">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl transition group-hover:bg-cyan-400/30" />

              <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-blue-600/15 blur-3xl" />

              <Image
                src={aboutImg}
                alt="Abdur Ratin profile"
                width={250}
                height={300}
                className="relative z-10 h-auto w-full max-w-[220px] object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            <div>
              <h2 className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                ABDUR RATIN
              </h2>

              <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                <span className="font-bold italic text-neutral-800">
                  Full Stack Developer
                </span>{" "}
                based in{" "}
                <span className="font-bold italic text-neutral-800">
                  Bangladesh
                </span>
              </p>

              <a
                href="/cv.pdf"
                download
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs font-bold text-neutral-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Download CV
                <FaArrowUpRightFromSquare className="text-blue-600" />
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="min-w-0">
            {/* Contact details */}
            <div className="grid grid-cols-1 gap-4 border-b border-neutral-200 pb-6 sm:grid-cols-2">
              <a
                href="tel:+8801323781740"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-neutral-200/80 bg-white p-3.5 text-sm font-medium text-neutral-700 transition hover:border-cyan-400 hover:shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FaPhone />
                </span>
                <span className="break-all">+8801323781740</span>
              </a>

              <a
                href="mailto:ratinkhan039@gmail.com"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-neutral-200/80 bg-white p-3.5 text-sm font-medium text-neutral-700 transition hover:border-cyan-400 hover:shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <FaEnvelope />
                </span>
                <span className="break-all">
                  ratinkhan039@gmail.com
                </span>
              </a>

              <div className="flex min-w-0 items-center gap-3 rounded-xl border border-neutral-200/80 bg-white p-3.5 text-sm font-medium text-neutral-700 transition hover:border-cyan-400 sm:col-span-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FaLocationDot />
                </span>
                Kurigram, Rangpur, Bangladesh
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-6 border-b border-neutral-200 py-6 sm:grid-cols-2 sm:gap-5">
              <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 transition hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-4xl font-black text-transparent">
                    1+
                  </span>

                  <span className="text-xs font-bold leading-relaxed text-neutral-700">
                    Years
                    <br />
                    Experience
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  Hello there! My name is{" "}
                  <span className="font-semibold text-blue-700">
                    Abdur Ratin.
                  </span>{" "}
                  I am a web developer passionate about building modern
                  and user-friendly web experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 transition hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-4xl font-black text-transparent">
                    0
                  </span>

                  <span className="text-xs font-bold leading-relaxed text-neutral-700">
                    Clients
                    <br />
                    Worldwide
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  I am continuously improving my frontend and backend
                  skills through hands-on projects, learning, and
                  exploring full-stack development.
                </p>
              </div>
            </div>

            {/* Introduction */}
            <blockquote className="relative mt-6 overflow-hidden rounded-2xl bg-[#171717] px-5 py-6 text-white shadow-lg shadow-neutral-900/10 sm:px-7">
              <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full bg-cyan-500/15 blur-3xl" />

              <div className="relative flex gap-4">
                <span className="font-serif text-5xl leading-none text-cyan-400">
                  “
                </span>

                <p className="text-sm font-medium italic leading-7 text-neutral-200">
                  AI-Driven Full Stack Web Engineer | Next.js | React |
                  TypeScript | JavaScript | Tailwind CSS. Currently
                  applying these technologies to build modern web
                  applications.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-cyan-500 text-white">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/15 blur-[100px]" />

        <div className="container relative mx-auto grid grid-cols-1 gap-10 px-5 py-12 sm:px-8 sm:py-14 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:px-10 lg:py-20">
          {/* Experience Intro */}
          <div>
            <p className="mb-3 text-xs font-semibold italic tracking-wide text-white/90 sm:text-sm">
              Experience
            </p>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              MY EXPERIENCE
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/90 sm:text-base">
              I’m interested in creating modern, responsive,
              user-friendly, and practical web applications. I enjoy
              exploring how frontend, backend, databases, and
              authentication work together to create complete
              applications. I’m continuously improving my skills and
              building projects to strengthen my understanding of
              full-stack development.
            </p>

            <a
              href="/cv.pdf"
              download
              className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#171717] px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-neutral-950"
            >
              Download my resume

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-blue-700 to-cyan-500 text-white">
                <FaArrowUpRightFromSquare size={12} />
              </span>
            </a>
          </div>

          {/* Experience Timeline */}
          <div className="min-w-0">
            {experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.date}`}
                className="border-b border-white/25 py-5 first:pt-0 last:border-b-0"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-white/90 sm:text-sm">
                  <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
                    {experience.date}
                  </span>

                  <span className="font-semibold">
                    {experience.company}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold tracking-wide sm:text-xl lg:text-2xl">
                  {experience.role}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}