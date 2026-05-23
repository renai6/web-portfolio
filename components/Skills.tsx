"use client";

import { motion } from "framer-motion";
import {
  badgeVariants,
  containerVariants,
  itemVariants,
} from "@/lib/animations";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "⚡",
    description:
      "Building modern, scalable, and responsive user interfaces using modern JavaScript frameworks and state management solutions.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Zustand",
      "Vue",
      "Vuex",
      "Pinia",
      "TanStack",
      "Material UI",
      "Tailwind",
      "Shadcn",
    ],
  },
  {
    title: "Backend Engineering",
    icon: "🛠",
    description:
      "Designing scalable backend architectures, APIs, authentication systems, and enterprise-grade services.",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "KoaJS",
      "GraphQL",
      "PHP",
      "Laravel",
      "Django",
      "FastAPI",
    ],
  },
  {
    title: "Databases",
    icon: "🗄",
    description:
      "Working with relational and NoSQL databases optimized for scalability, reliability, and performance.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MariaDB",
      "MSSQL",
      "MongoDB",
      "Supabase",
      "Firebase",
    ],
  },
  {
    title: "Testing & QA",
    icon: "🧪",
    description:
      "Ensuring software quality and reliability through unit, integration, and end-to-end testing strategies.",
    skills: [
      "Jest",
      "React Testing Library",
      "Unit Testing",
      "Cypress",
      "Playwright",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    description:
      "Deploying and maintaining scalable cloud infrastructure, CI/CD pipelines, and secure production environments.",
    skills: ["AWS", "GCP", "Docker", "CI/CD", "API Gateway", "Linode", "Auth0"],
  },
  {
    title: "AI-Assisted Engineering",
    icon: "🤖",
    description:
      "Accelerating development workflows and rapid prototyping using modern AI-powered engineering tools.",
    skills: ["GitHub Copilot", "OpenAI", "Claude", "Cursor", "v0"],
  },
];

export function Skills() {
  return (
    <section className="relative py-28 px-6 lg:px-10 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-600/10 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 text-sm mb-6"
          >
            ✦ Technical Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-6xl font-black tracking-tight"
          >
            Skills &
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              {" "}
              Technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Experienced Full Stack Software Engineer with 8 years of expertise
            in building scalable applications and silently judging poorly named
            variables.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:border-green-500/30 transition-all duration-500"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"
              />

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/10 blur-3xl"
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.08,
                  }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-3xl mb-6"
                >
                  {category.icon}
                </motion.div>

                <h3 className="text-3xl font-bold">{category.title}</h3>

                <p className="mt-5 text-gray-300 leading-7 text-lg">
                  {category.description}
                </p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3 mt-8"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-gray-200 hover:border-emerald-400/30 hover:bg-emerald-500/10 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
