"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "PT Ayodya Dialog Semesta",
    role: "Frontend Engineer",
    period: "Nov 2025 – Present",
    description:
      "Developed real-time driver monitoring dashboards, map visualizations, route & polygon rendering, reporting features, and API integrations.",
    technologies: ["React", "Next.js", "TypeScript", "Maps API"],
  },
  {
    company: "PT Intek Sarana Sejahtera",
    role: "Web Developer",
    period: "Jun 2019 – Mar 2025",
    description:
      "Built LMS platforms, smart classroom systems, and mobile applications with responsive and accessible UI implementations.",
    technologies: ["Vue.js", "Laravel", "Flutter", "MySQL"],
  },
  {
    company: "Freelancer",
    role: "Fullstack Developer",
    period: "Jul 2023 – Apr 2025",
    description:
      "Developed POS systems, attendance apps, landing pages, digital signage, and Android applications for real-world business needs.",
    technologies: ["React Native", "Next.js", "Node.js", "Firebase"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-400/10 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Work History
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-neutral-800 border-2 border-cyan-500 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-cyan-500"
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>

              {/* Content card */}
              <div
                className={`ml-8 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                  <div className="relative bg-neutral-900/60 border border-neutral-800 rounded-xl p-5 backdrop-blur-sm">
                    {/* Company & Period */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {exp.company}
                      </h3>
                      <span className="flex-shrink-0 px-2.5 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    {/* Role */}
                    <p className="text-sm text-purple-400 font-medium mb-3">
                      {exp.role}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs text-neutral-400 bg-neutral-800/80 border border-neutral-700/50 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
