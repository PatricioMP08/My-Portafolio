"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs, SiLaravel, SiReact, SiTailwindcss,
  SiMysql, SiPython, SiPhp, SiNodedotjs,
  SiGit, SiGithub, SiGitlab, SiFigma
} from "react-icons/si";
import { FaDatabase, FaProjectDiagram, FaLaptopCode } from "react-icons/fa";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PHP", icon: SiPhp, color: "#8892BF" },
    ],
  },
  {
    title: "Base de Datos",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#00618A" },
      { name: "SQL Server", icon: FaDatabase, color: "#CC2927" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: SiGit, color: "#F05033" },
      { name: "GitHub", icon: SiGithub, color: "#171515" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Visual Paradigm", icon: FaProjectDiagram, color: "#1E90FF" },
    ],
  },
];

export default function TechGrid() {
  return (
    <section
      id="tecnologias"
      className="relative py-28 px-6 md:px-12 scroll-mt-24"
    >
      {/* 🔹 Título con animación visible cada vez que se entra */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center gap-3 mb-12"
      >
        <FaLaptopCode className="text-cyan-400 w-8 h-8 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Tecnologías
        </h2>
      </motion.div>

      {/* 🔹 Cuadrícula con animaciones de entrada */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-6 hover:bg-white/15 transition-all duration-500"
          >
            <h3 className="text-lg font-semibold text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {cat.title}
            </h3>

            {/* 🔸 Animación secuencial de íconos */}
            <motion.div
              className="grid grid-cols-2 gap-4 justify-center"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            >
              {cat.items.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.7, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 10 }}
                  whileHover={{ scale: 1.15 }}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div
                    className="p-2 rounded-lg shadow-sm"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={22} color="white" />
                  </div>
                  <span className="text-xs font-medium text-gray-200">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
