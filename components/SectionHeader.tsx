"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mb-14"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-[2px] bg-green-500" />
        <span className="uppercase tracking-[0.3em] text-green-300 text-sm">
          {label}
        </span>
      </div>

      <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}
