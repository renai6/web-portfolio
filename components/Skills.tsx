"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";

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
    <section className="max-w-5xl mx-auto px-6 py-24">
      <SectionHeader label="Technical Expertise" title="Skills & Technologies" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-green-500/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                {category.icon}
              </span>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            <p className="mt-3 text-sm text-gray-400 leading-6">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
