"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { FaProjectDiagram } from "react-icons/fa";

// Datos
const projects = [
  {
    id: "p1",
    title: "Sistema de pagos",
    description:
      "Aplicación web para gestión de pagos, creada con Laravel y Vue.",
    image: "/images/proyecto1.jpg",
    demo: "https://example.com/demo1",
    repo: "https://github.com/your/repo1",
    tech: ["Laravel", "MySQL", "Vue"],
  },
  {
    id: "p2",
    title: "Portafolio interactivo",
    description:
      "Landing page moderna con animaciones 3D y diseño minimalista.",
    image: "/images/proyecto2.jpg",
    demo: "https://example.com/demo2",
    repo: "https://github.com/your/repo2",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: "p3",
    title: "Dashboard administrativo",
    description: "Panel de control con estadísticas y gestión de usuarios.",
    image: "/images/proyecto3.jpg",
    demo: "#",
    repo: "#",
    tech: ["React", "Node.js", "MongoDB"],
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
    <section id="proyectos" className="relative py-28 px-6 md:px-12 scroll-mt-24">
      {/* ✨ Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col items-center mb-14"
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

      {/* 🌈 Grid de proyectos animado en cascada */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
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
              className="w-full max-w-[360px]"
            >
              <div
                className="group relative rounded-2xl overflow-hidden bg-white/80 
                           dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 
                           shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
                onClick={() => openModal(p)}
              >
                {/* 🖼 Imagen */}
                <div className="relative overflow-hidden rounded-2xl h-[200px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay hover */}
                  <div className="absolute inset-0 z-10 rounded-2xl bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-3"
                    >
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
                    </motion.div>
                  </div>
                </div>

                {/* 📝 Texto */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
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
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {/* 🪟 Modal */}
      <ProjectModal
        project={openProject}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
