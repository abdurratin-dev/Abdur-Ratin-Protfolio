"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-5 py-16 text-[#191919] sm:px-8 lg:flex lg:items-center lg:justify-center lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        {/* Contact Information */}
        <div className="flex flex-col">
          <p className="mb-3 font-serif text-sm font-bold italic">Contact</p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            REACH OUT ME
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-6 text-gray-700">
            velakopa, Kurigram Sadar, Kurigram, Rongpur, Bangladesh.
          </p>

          <div className="mt-12 space-y-3">
            <a
              href="tel:+770224440505"
              className="block text-xl font-extrabold transition-colors hover:text-blue-700 sm:text-2xl"
            >
              +880 132 378 1740
            </a>

            <a
              href="mailto:jacob360@gmail.com"
              className="block break-all text-xl font-extrabold transition-colors hover:text-blue-700 sm:text-2xl"
            >
              ratinkhan039@gmail.com
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium">
            <a
              href="https://www.facebook.com/share/1CT6TDugXk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              FACEBOOK
            </a>
            <a
              href="https://wa.me/8801323781740"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              WHATSUP
            </a>
            <a
              href="https://www.linkedin.com/in/abdur-ratin/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-linear-to-r from-blue-700 to-cyan-500 p-7 sm:p-10 md:p-12">
          <h3 className="mb-8 text-2xl font-extrabold text-white sm:text-3xl">
            ANY PROJECT?
          </h3>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = new FormData(form);

              setLoading(true);
              setStatus("");

              try {
                const response = await fetch("/api/contact", {
                  method: "POST",
                  body: formData,
                });

                const result = await response.json();

                if (!response.ok) {
                  toast.error("Email not send.Try again")
                    return 

                }

                setStatus(result.message);
                toast.success(result.message);
                form.reset();
              } catch (error) {
                setStatus(
                  error instanceof Error ? error.message : "Email not send.Try again",
                );
              } finally {
                setLoading(false);
              }
            }}
            className="space-y-7"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[11px] font-medium text-white"
                >
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full border-b border-neutral-300 bg-transparent pb-2 text-sm text-white outline-none placeholder:text-white/60 focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-medium text-white"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full border-b border-neutral-300 bg-transparent pb-2 text-sm text-white outline-none placeholder:text-white/60 focus:border-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[11px] font-medium text-white"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                placeholder="Write your message..."
                required
                className="w-full resize-y border-b border-neutral-300 bg-transparent pb-2 text-sm text-white outline-none placeholder:text-white/60 focus:border-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex min-w-36 items-center justify-center gap-2 bg-black px-6 py-3 text-xs font-medium text-white transition-all hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60 hover:shadow-lg"
            >
              {loading ? "Sending..." : "Submit now"}
            </button>
            {status && (
              <p
                role="status"
                aria-live="polite"
                className="text-sm text-white"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
