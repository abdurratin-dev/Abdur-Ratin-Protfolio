"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "#about", id: "about" },
  {
    label: "Specialties",
    href: "#specialties",
    id: "specialties",
  },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Blogs", href: "/blogs", id: "blogs" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [acnav, setAcnav] = useState("home");
  const [year, setYear] = useState<number>();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleNavClick = (id: string) => {
    setAcnav(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 px-5 py-4 backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => handleNavClick("home")}
            className="text-2xl font-black tracking-wide"
          >
            Ratin<span className="text-cyan-400">.</span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition hover:border-cyan-400/50 hover:text-cyan-400"
          >
            {menuOpen ? (
              <HiX size={25} />
            ) : (
              <HiMenuAlt3 size={25} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute inset-x-0 top-full border-b border-white/10 bg-[#080b12]/95 px-5 py-5 shadow-2xl backdrop-blur-xl">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`block rounded-xl px-4 py-3 font-semibold transition ${
                      acnav === link.id
                        ? "bg-gradient-to-r from-blue-700/30 to-cyan-500/10 text-cyan-300"
                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-5 border-t border-white/10 pt-5">
              <a
                href="https://github.com/abdurratin-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-400 transition hover:text-cyan-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdur-ratin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 transition hover:text-cyan-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/share/1CT6TDugXk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-neutral-400 transition hover:text-cyan-400"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Desktop Sidebar */}
      <nav className="sticky top-0 hidden h-screen w-56 shrink-0 border-r border-white/10 bg-[#080b12] text-white md:block lg:w-60">
        <div className="relative flex h-full flex-col justify-between overflow-hidden px-6 py-7">
          {/* Background glow */}
          <div className="pointer-events-none absolute -left-20 top-16 h-48 w-48 rounded-full bg-blue-700/15 blur-[90px]" />
          <div className="pointer-events-none absolute -right-20 bottom-32 h-48 w-48 rounded-full bg-cyan-500/10 blur-[90px]" />

          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleNavClick("home")}
            className="relative w-fit text-3xl font-black tracking-wide"
          >
            Ratin
            <span className="text-cyan-400">.</span>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-500">
              Full Stack Developer
            </p>
          </Link>

          {/* Navigation */}
          <ul className="relative flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`group relative flex w-full items-center overflow-hidden rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    acnav === link.id
                      ? "bg-gradient-to-r from-blue-700/20 to-cyan-500/10 text-white"
                      : "text-neutral-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-gradient-to-b from-blue-700 to-cyan-400 transition-opacity duration-300 ${
                      acnav === link.id
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-60"
                    }`}
                  />

                  <span
                    className={`transition-all duration-300 ${
                      acnav === link.id
                        ? "translate-x-1 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    {link.label}
                  </span>

                  {acnav === link.id && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links and copyright */}
          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
              <a
                href="https://github.com/abdurratin-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/abdur-ratin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="https://www.facebook.com/share/1CT6TDugXk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <FaFacebook size={19} />
              </a>
            </div>

            <div className="mb-4 h-px bg-gradient-to-r from-blue-700/60 via-cyan-400/30 to-transparent" />

            <p className="text-[11px] leading-5 text-neutral-500">
              Copyright © {year ?? "2026"} Abdur Ratin.
              <span className="block">
                All Rights Reserved.
              </span>
            </p>
          </div>
        </div>
      </nav>

      {/* Spacer for the fixed mobile header */}
      <div className="h-[65px] shrink-0 md:hidden" />
    </>
  );
}