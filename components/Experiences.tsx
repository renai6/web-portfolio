"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight, fadeUp } from "@/lib/animations";
import { experiences } from "@/lib/page-data";

export function Experiences() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex items-center gap-4 mb-20"
      >
        <div className="w-14 h-[2px] bg-green-500" />

        <span className="uppercase tracking-[0.3em] text-green-300 text-sm">
          Work Experience
        </span>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500 via-emerald-500 to-transparent" />

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={index % 2 === 0 ? slideLeft : slideRight}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-8 w-11 h-11 rounded-full border-4 border-[#0a2414] bg-gradient-to-r from-green-500 to-emerald-500 shadow-[0_0_30px_rgba(22,163,74,0.6)]" />

              <div className="group rounded-[32px] border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-xl hover:border-green-500/30 hover:bg-white/[0.07] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-bold">{experience.role}</h2>

                      <div className="flex gap-4 justify-start items-center mt-2">
                        <p className="text-green-300 text-lg mt-2">
                          {experience.company}
                        </p>
                        <div className="flex gap-3">
                          {experience.industry.map((ind, i) => (
                            <div
                              key={i}
                              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-gray-300 text-sm"
                            >
                              ✦ {ind}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-gray-300 text-sm">
                      {experience.period}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-7">
                    {experience.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-200 hover:scale-105 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-8 space-y-4 text-gray-300">
                    {experience.description.map((desc) => (
                      <li key={desc} className="flex gap-3 leading-7">
                        <span className="text-green-400 mt-1">✦</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
