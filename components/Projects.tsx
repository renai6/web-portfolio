"use client";

import { motion } from "framer-motion";
import { fadeUp, containerVariants, itemVariants } from "@/lib/animations";
import { projects } from "@/lib/page-data";

export function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex items-center gap-4 mb-14"
      >
        <div className="w-14 h-[2px] bg-green-500" />
        <span className="uppercase tracking-[0.3em] text-green-300 text-sm">
          Featured Projects
        </span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid lg:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-green-500/30 transition overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-green-500/10 to-emerald-500/10" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                </div>

                <button
                  type="button"
                  aria-label={`Open ${project.title}`}
                  onClick={() =>
                    project.link &&
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                  className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center font-bold transition-transform hover:-translate-y-1"
                >
                  ↗
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-gray-300 leading-8">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
