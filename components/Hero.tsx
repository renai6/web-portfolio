"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socials } from "@/lib/page-data";

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
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* GREEN GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-600/20 blur-[160px]" />

      {/* STATIC STARS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(140)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              filter: `blur(${Math.random() * 1}px)`,
              boxShadow: "0 0 10px rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid gap-16 items-center lg:grid-cols-[1fr_auto]">
        {/* IMAGE SECTION */}
        <div className="flex flex-col items-center order-1 lg:order-2">
          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="relative mx-auto w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px]"
          >
            {/* OUTER GLOW */}
            <div className="absolute inset-0 rounded-full border border-white/5 bg-white/5 shadow-[0_0_120px_rgba(16,185,129,0.12)]" />

            {/* INNER RING */}
            <div className="absolute inset-5 rounded-full border-4 border-emerald-400/20" />

            {/* IMAGE */}
            <div className="absolute inset-8 rounded-full overflow-hidden bg-slate-900 shadow-inner shadow-black/40">
              <Image
                src="/raffi_photo.jpg"
                alt="Raffi Muloc"
                fill
                className="object-cover object-center"
                style={{
                  objectPosition: "90% 10%",
                }}
                priority
              />

              {/* GREEN OVERLAY */}
              <div className="absolute inset-0 rounded-full bg-emerald-900/20 pointer-events-none z-10" />
            </div>

            {/* DARK VIGNETTE */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_60%,rgba(15,23,42,0.86)_100%)] pointer-events-none" />
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="flex items-center justify-center gap-4 mt-6 flex-wrap"
          >
            {socials.map((s) => (
              <button
                key={s.name}
                aria-label={s.name}
                onClick={() => handleSocialRedirect(s.link)}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center hover:scale-110 hover:border-emerald-400/40 transition-all"
              >
                {s.svg}
              </button>
            ))}
          </motion.div>
        </div>

        {/* TEXT SECTION */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight break-words"
          >
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              RAFFI MULOC
            </span>
          </motion.h1>

          {/* LINE */}
          <motion.div
            initial={{
              opacity: 0,
              width: 0,
            }}
            animate={{
              opacity: 1,
              width: "100%",
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="h-[4px] max-w-[600px] rounded-full bg-gradient-to-r from-green-500 to-emerald-400 mx-auto lg:mx-0 mt-8"
          />

          {/* SUBTITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed"
          >
            Full Stack Engineer & System Architect
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="mt-6 max-w-3xl mx-auto lg:mx-0 text-gray-300 text-sm sm:text-base md:text-lg leading-7 md:leading-8"
          >
            Experienced Full Stack Software Engineer with 8 years of expertise
            in building scalable applications and silently judging badly named
            variables.
          </motion.p>

          {/* BADGES */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-10"
          >
            {[
              "8+ Years Experience",
              "Senior Software Engineer @ Grow, Inc.",
              "Arc Certified Developer @ Arc.dev",
              "Electronic Data Processing Specialist - DICT",
            ].map((badge) => (
              <div
                key={badge}
                className="px-4 sm:px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl text-gray-200 text-xs sm:text-sm md:text-base hover:bg-white/[0.08] transition whitespace-normal text-center"
              >
                <motion.span
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="mr-2 inline-block text-green-400"
                >
                  ✦
                </motion.span>

                {badge}
              </div>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
            }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-12"
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{
                x: 4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group relative flex items-center gap-3 text-lg md:text-xl font-semibold text-white"
            >
              <span className="mb-3 flex gap-2 items-center cursor-pointer">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
              </span>

              <motion.div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full w-full" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
