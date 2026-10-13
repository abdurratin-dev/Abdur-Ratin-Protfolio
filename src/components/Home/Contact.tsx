"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        const errorMessage = result.message || "Email not sent. Try again.";

        setStatus(errorMessage);
        toast.error(errorMessage);
        return;
      }

      setStatus(result.message || "Message sent successfully!");
      toast.success(result.message || "Message sent successfully!");
      form.reset();
    } catch {
      const errorMessage = "Email not sent. Please try again.";

      setStatus(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-neutral-100 px-5 py-16 text-neutral-900 sm:px-8 sm:py-20 lg:flex lg:items-center lg:justify-center lg:px-12 scroll-mt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        {/* Contact Information */}
        <div className="flex flex-col">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            <span className="h-px w-8 bg-gradient-to-r from-blue-700 to-cyan-500" />
            Contact
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            REACH OUT ME
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-600">
            Velakopa, Kurigram Sadar, Kurigram, Rangpur, Bangladesh.
          </p>

          <div className="mt-10 space-y-4 sm:mt-12">
            <a
              href="tel:+8801323781740"
              className="block w-fit max-w-full break-words text-xl font-extrabold tracking-tight transition-colors duration-300 hover:text-blue-700 sm:text-2xl lg:text-3xl"
            >
              +880 132 378 1740
            </a>

            <a
              href="mailto:ratinkhan039@gmail.com"
              className="block max-w-fit break-all text-lg font-extrabold tracking-tight transition-colors duration-300 hover:text-blue-700 sm:text-xl lg:text-2xl"
            >
              ratinkhan039@gmail.com
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold tracking-wider sm:mt-12">
            <a
              href="https://www.facebook.com/share/1CT6TDugXk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-blue-700"
            >
              FACEBOOK
            </a>

            <a
              href="https://wa.me/8801323781740"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-green-600"
            >
              WHATSAPP
            </a>

            <a
              href="https://www.linkedin.com/in/abdur-ratin/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-blue-700"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-6 shadow-xl shadow-blue-900/10 sm:p-8 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative">
            <h3 className="mb-8 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              ANY PROJECT?
            </h3>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] font-bold tracking-widest text-white/90"
                  >
                    NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="w-full border-b border-white/40 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/60 focus:border-white focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-bold tracking-widest text-white/90"
                  >
                    EMAIL
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    autoComplete="email"
                    required
                    className="w-full border-b border-white/40 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/60 focus:border-white focus:ring-0"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-bold tracking-widest text-white/90"
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-y border-b border-white/40 bg-transparent px-0 py-3 text-sm leading-6 text-white outline-none transition-colors duration-300 placeholder:text-white/60 focus:border-white focus:ring-0"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 min-w-36 items-center justify-center gap-2 rounded-lg bg-neutral-950 px-6 py-3 text-xs font-bold tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  "Submit now"
                )}
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-sm leading-6 text-white"
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}