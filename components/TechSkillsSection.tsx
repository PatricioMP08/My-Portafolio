"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript / TypeScript", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel / PHP", level: 85 },
      { name: "Node.js / Express", level: 70 },
      { name: "MySQL / PostgreSQL", level: 75 },
    ],
  },
  {
    title: "Herramientas & Otros",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 70 },
    ],
  },
];

export default function TechSkillsSection() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setInView(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      className="relative z-10 py-24 md:py-32 max-w-6xl mx-auto px-6 md:px-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 md:text-4xl font-bold text-center mb-12"
      >
        🧠 Habilidades Técnicas
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-gray-900/60 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {cat.title}
            </h3>

            <ul className="space-y-4">
              {cat.skills.map((skill, j) => (
                <li key={j}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.3 + j * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
