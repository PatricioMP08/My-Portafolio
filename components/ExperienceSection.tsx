"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    empresa: "Freelance",
    puesto: "Desarrollador Full Stack",
    fecha: "2023 - Actualidad",
    descripcion:
      "Diseño y desarrollo de aplicaciones web modernas con Next.js, Laravel y MySQL. Enfoque en rendimiento, seguridad y UX limpia.",
    stack: ["Next.js", "Laravel", "MySQL", "Tailwind", "React"],
  },
  {
    empresa: "Proyecto Académico - Elyon",
    puesto: "Desarrollador Backend",
    fecha: "2022 - 2023",
    descripcion:
      "Desarrollo de sistema interno de gestión académica y financiera. Implementación de autenticación segura y panel administrativo.",
    stack: ["Laravel", "PHP", "SQL Server", "Blade"],
  },
  {
    empresa: "Proyectos Personales",
    puesto: "Desarrollador Web",
    fecha: "2021 - 2022",
    descripcion:
      "Creación de sitios personales y herramientas automatizadas como parte del aprendizaje continuo en tecnologías web.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="relative py-28 px-6 md:px-12 scroll-mt-24"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-10">
          <Briefcase className="text-cyan-400 w-8 h-8" />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Experiencia
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-cyan-500/20 pl-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="mb-10 relative"
            >
              {/* Punto del timeline */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-cyan-500 rounded-full border border-white/20 shadow-lg" />

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:bg-white/10 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.puesto}
                  </h3>
                  <span className="text-sm text-gray-400 italic">
                    {exp.fecha}
                  </span>
                </div>
                <p className="text-cyan-400 font-medium mb-2">
                  {exp.empresa}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {exp.descripcion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
