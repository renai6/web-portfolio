"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socials } from "@/lib/page-data";

const credentials = [
  "8+ Years Experience",
  "Senior Software Engineer @ Grow, Inc.",
  "Arc Certified Developer @ Arc.dev",
  "Electronic Data Processing Specialist - DICT",
];

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/RAFFI_MULOC.pdf";
    link.download = "RAFFI_MULOC.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSocialRedirect = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden">
      {/* GREEN GLOW */}
      <div className="pointer-events-none absolute -top-48 left-1/3 w-[600px] h-[600px] bg-green-600/10 blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-6"
      >
        {/* TOP BAR */}
        <header className="flex items-center justify-between py-8">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-200">
            Raffi Muloc
          </span>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <button
                key={s.name}
                aria-label={s.name}
                onClick={() => handleSocialRedirect(s.link)}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center cursor-pointer hover:border-emerald-400/40 transition-colors [&_svg]:w-5 [&_svg]:h-5"
              >
                {s.svg}
              </button>
            ))}
          </div>
        </header>

        {/* HERO BODY */}
        <div className="grid items-center gap-12 py-16 lg:py-28 lg:grid-cols-[1fr_auto]">
          {/* TEXT */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Full Stack Engineer
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                &amp; System Architect
              </span>
            </h1>

            <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />

            <p className="mt-8 max-w-xl text-gray-400 text-base md:text-lg leading-8">
              Experienced Full Stack Software Engineer with 8 years of
              expertise in building scalable applications and silently judging
              badly named variables.
            </p>

            {/* CREDENTIALS */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-400">
              {credentials.map((credential, index) => (
                <li key={credential} className="flex items-center gap-3">
                  {index > 0 && (
                    <span className="text-green-400/60" aria-hidden>
                      ·
                    </span>
                  )}
                  {credential}
                </li>
              ))}
            </ul>

            <button
              onClick={handleDownloadResume}
              className="mt-10 inline-flex items-center gap-2.5 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-[#020617] cursor-pointer hover:from-green-300 hover:to-emerald-400 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download Resume
            </button>
          </div>

          {/* PHOTO */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-[240px] h-[300px] sm:w-[280px] sm:h-[350px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-[0_0_80px_rgba(16,185,129,0.08)]">
              <Image
                src="/raffi_photo.jpg"
                alt="Raffi Muloc"
                fill
                className="object-cover"
                style={{
                  objectPosition: "90% 10%",
                }}
                priority
              />
              <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
