"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { experiences } from "@/lib/page-data";
import { SectionHeader } from "@/components/SectionHeader";

export function Experiences() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeader label="Career" title="Work Experience" />

      <div>
        {experiences.map((experience) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="border-t border-white/10 py-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="text-xl md:text-2xl font-semibold">
                {experience.role}
              </h3>

              <span className="text-sm text-gray-500 whitespace-nowrap">
                {experience.period}
              </span>
            </div>

            <p className="mt-1 text-green-300">
              {experience.company}
              <span className="text-gray-500">
                {" "}
                · {experience.industry.join(" · ")}
              </span>
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-xs text-green-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2.5 text-gray-400">
              {experience.description.map((desc) => (
                <li key={desc} className="flex gap-3 leading-7">
                  <span className="text-green-400 select-none" aria-hidden>
                    –
                  </span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
