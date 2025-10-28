"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    id: "p1",
    title: "Sistema de pagos",
    description: "Aplicación web para gestión de pagos, creada con Laravel y Vue.",
    image: "/images/proyecto1.jpg",
    demo: "https://example.com/demo1",
    repo: "https://github.com/your/repo1",
    tech: ["Laravel", "MySQL", "Vue"],
  },
  {
    id: "p2",
    title: "Portafolio interactivo",
    description: "Landing page moderna con animaciones 3D y diseño minimalista.",
    image: "/images/proyecto2.jpg",
    demo: "https://example.com/demo2",
    repo: "https://github.com/your/repo2",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: "p3",
    title: "Dashboard administrativo",
    description: "Panel de control con estadísticas y gestión de usuarios.",
    image: "",
    demo: "#",
    repo: "#",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "p4",
    title: "App de tareas",
    description: "Aplicación fullstack con autenticación JWT.",
    image: "",
    demo: "#",
    repo: "#",
    tech: ["React", "Express", "PostgreSQL"],
  },
  {
    id: "p5",
    title: "Plataforma educativa",
    description: "Sistema para gestión de cursos, alumnos y evaluaciones online.",
    image: "/images/proyecto5.jpg",
    demo: "#",
    repo: "#",
    tech: ["Laravel", "Vue", "MySQL"],
  },
];

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (proj: any) => {
    setOpenProject(proj);
    setModalOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="proyectos"
      className="relative py-40 px-6 md:px-12 scroll-mt-24 w-full"
    >
      {/* ✨ Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col items-center mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <FaProjectDiagram className="text-cyan-400 w-8 h-8 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Proyectos
          </h2>
        </div>
        <p className="text-gray-300 text-center max-w-2xl">
          Algunos de los proyectos que he desarrollado, enfocados en rendimiento,
          seguridad y una experiencia moderna.
        </p>
      </motion.div>

      {/* 🌈 Grid con 3 columnas en escritorio */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full max-w-[1500px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.12}
              scale={1.02}
              className="w-full h-[400px] max-w-[480] mx-auto" // ← responsivo
            >
              <div
                onClick={() => openModal(p)}
                className="group relative flex flex-col w-full h-full rounded-2xl overflow-hidden
                           bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 
                           shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                {/* 🖼 Imagen */}
                <div className="relative w-full h-[200px] bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full text-gray-400 text-sm select-none">
                      <FaProjectDiagram className="text-3xl mb-2 opacity-50" />
                      <span>Sin imagen</span>
                    </div>
                  )}
                </div>

                {/* 📝 Contenido */}
                <div className="flex flex-col justify-between flex-grow p-5 overflow-hidden">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2 truncate">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm h-[60px] overflow-hidden text-ellipsis line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex gap-2 flex-wrap mt-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 🪄 Overlay hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-3">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 bg-white/90 text-gray-800 rounded-full font-semibold shadow 
                                 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 border border-white/70 text-white rounded-full font-semibold 
                                 transition-all duration-300 hover:bg-white/20 hover:border-white hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal
        project={openProject}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
