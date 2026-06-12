"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { projects } from "@/lib/page-data";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-28">
      <SectionHeader label="Selected Work" title="Featured Projects" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 gap-5"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-green-500/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{project.year}</p>
              </div>

              {project.link && (
                <button
                  type="button"
                  aria-label={`Open ${project.title}`}
                  onClick={() =>
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                  className="w-9 h-9 shrink-0 rounded-lg border border-white/10 flex items-center justify-center text-gray-300 cursor-pointer hover:border-emerald-400/40 hover:text-emerald-300 transition-colors"
                >
                  ↗
                </button>
              )}
            </div>

            <p className="mt-4 text-gray-400 leading-7">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
