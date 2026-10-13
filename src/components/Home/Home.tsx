import Image from "next/image";
import {
  FaSquareArrowUpRight,
  FaSquarePhone,
} from "react-icons/fa6";
import HeroImg from "@/assets/20261012_211554.png";
import txtDwonImg from "@/assets/20261012_215708.png";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 py-16 bg-neutral-100 text-black sm:px-8 lg:px-10 scroll-mt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-56 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-14 lg:min-h-[650px] lg:flex-row lg:gap-8">

          {/* Left content */}
          <div className="relative z-10 grid w-full gap-8 lg:w-3/5 lg:gap-9">
            <div className="relative grid gap-5 sm:gap-6">

              {/* Decorative image */}
              <div className="pointer-events-none absolute -left-4 -top-8 -z-10 opacity-70 sm:-left-7 sm:-top-10 sm:opacity-90">
                <Image
                  src={txtDwonImg}
                  alt=""
                  width={150}
                  height={200}
                  className="w-20 sm:w-28 lg:w-36"
                />
              </div>

              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0461C5] sm:text-sm">
                <span className="h-px w-8 bg-gradient-to-r from-blue-700 to-cyan-400" />
                Welcome to my portfolio
              </p>

              <h1 className="relative z-10 text-4xl font-semibold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                Hi, my name
                <span className="block">is</span>
                <span className="mt-1 block bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-200 bg-clip-text font-extrabold text-transparent">
                  Abdur Ratin.
                </span>
              </h1>

              {/* Typing text */}
              <div className="max-w-full overflow-hidden">
                <img
                  src="https://readme-typing-svg.demolab.com?font=Saira+Code&size=20&duration=3000&pause=1000&color=0461C5&width=600&lines=Full+Stack+Developer;React+%7C+Next.js+%7C+TypeScript;Node.js+%7C+Express.js+%7C+MongoDB;Always+Learning+%7C+Always+Building"
                  alt="Full Stack Developer | React | Next.js | TypeScript | Node.js"
                  className="h-auto max-w-full"
                />
              </div>

              <p className="max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                I build modern, responsive web applications with
                clean UI, scalable architecture, and a focus on
                great user experiences.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:from-cyan-500 hover:to-blue-700 hover:shadow-cyan-500/20 sm:px-6 sm:text-base"
            >
              Let&apos;s talk with me
              <FaSquareArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Contact information */}
            <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-neutral-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-4">
              <a
                href="tel:+8801323781740"
                className="flex w-fit items-center gap-2 transition-colors hover:text-cyan-400"
              >
                <FaSquarePhone className="text-lg text-cyan-400" />
                +8801323781740
              </a>

              <a
                href="mailto:ratinkhan039@gmail.com"
                className="flex w-fit min-w-0 items-center gap-2 transition-colors hover:text-cyan-400"
              >
                <MdEmail className="shrink-0 text-lg text-cyan-400" />
                <span className="break-all">
                  ratinkhan039@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex w-full items-center justify-center lg:w-2/5 lg:justify-end">
            {/* Image glow */}
            <div className="absolute h-56 w-56 rounded-full bg-blue-600/25 blur-[70px] sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

            {/* Decorative ring */}
            <div className="absolute h-64 w-64 rounded-full border border-cyan-400/10 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]" />

            <div className="relative w-full max-w-[320px] transition-transform duration-500 hover:scale-[1.03] sm:max-w-[400px] lg:max-w-[500px]">
              <Image
                src={HeroImg}
                alt="Abdur Ratin - Full Stack Developer"
                priority
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 500px"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_0_35px_rgba(37,99,235,0.15)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}