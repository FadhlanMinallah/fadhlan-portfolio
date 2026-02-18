"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  "Frontend": [
    { name: "Next.js", color: "#000000", textColor: "#ffffff" },
    { name: "React", color: "#61DAFB", textColor: "#000000" },
    { name: "Vue.js", color: "#42b883", textColor: "#000000" },
    { name: "Nuxt.js", color: "#00DC82", textColor: "#000000" },
    { name: "Inertia.js", color: "#3B82F6", textColor: "#ffffff" },
    { name: "Tailwind CSS", color: "#06B6D4", textColor: "#ffffff" },
  ],
  "Backend": [
    { name: "Laravel", color: "#FF2D20", textColor: "#ffffff" },
    { name: "Express.js", color: "#000000", textColor: "#ffffff" },
    { name: "MySQL", color: "#4479A1", textColor: "#ffffff" },
    { name: "MongoDB", color: "#47A248", textColor: "#ffffff" },
  ],
  "Mobile": [
    { name: "Flutter", color: "#02569B", textColor: "#ffffff" },
    { name: "React Native", color: "#61DAFB", textColor: "#000000" },
  ],
  "Tools": [
    { name: "Git", color: "#F05032", textColor: "#ffffff" },
    { name: "GitHub", color: "#ffffff", textColor: "#000000" },
    { name: "GitLab", color: "#FC6D26", textColor: "#ffffff" },
    { name: "Figma", color: "#F24E1E", textColor: "#ffffff" },
    { name: "Postman", color: "#FF6C37", textColor: "#ffffff" },
  ],
};

function SkillCard({
  category,
  items,
  index,
}: {
  category: string;
  items: { name: string; color: string; textColor: string }[];
  index: number;
}) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 h-full">
        {/* Header with animated line */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
          <h3 className="text-xl font-semibold text-white">{category}</h3>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-3">
          {items.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}, ${skill.color}88)`,
                }}
              />

              <div className="relative px-4 py-2 bg-neutral-800/80 border border-neutral-700/50 rounded-full hover:border-transparent transition-all duration-300 group-hover:scale-105">
                <span className="text-sm font-medium text-neutral-300">
                  {skill.name}
                </span>

                {/* Dot indicator */}
                <motion.span
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Animated title component
function AnimatedTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.span
        className="inline-block px-4 py-1.5 text-sm font-medium text-purple-400 bg-purple-400/10 rounded-full mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Skills & Expertise
      </motion.span>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Technologies I{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Work With
        </span>
      </h2>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-950 to-neutral-950" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, -50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedTitle />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCard
              key={category}
              category={category}
              items={items}
              index={index}
            />
          ))}
        </div>

        {/* Bottom animated line */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
