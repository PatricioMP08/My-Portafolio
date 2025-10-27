"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaAward, FaCertificate, FaTrophy, FaExternalLinkAlt } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCertificate className="text-yellow-400 text-3xl" />,
    title: "Certificación en Desarrollo Web Moderno",
    provider: "Udemy",
    year: "2024",
    description: "HTML, CSS, JavaScript, React y Node.js desde cero.",
    link: "https://www.udemy.com/certificate/UXXXXX/",
  },
  {
    icon: <FaTrophy className="text-blue-400 text-3xl" />,
    title: "Hackathon Nacional - 2° Lugar",
    provider: "Universidad de Chile",
    year: "2023",
    description: "Proyecto full stack con integración de APIs y autenticación avanzada.",
    link: "https://example.com/hackathon",
  },
  {
    icon: <FaAward className="text-purple-400 text-3xl" />,
    title: "Certificación en Laravel Avanzado",
    provider: "Platzi",
    year: "2024",
    description: "Desarrollo backend con Laravel, API RESTful y optimización de consultas SQL.",
    link: "https://platzi.com/p/mardones/laravel-avanzado",
  },
  {
    icon: <FaCertificate className="text-green-400 text-3xl" />,
    title: "Curso de UI/UX Design Fundamentals",
    provider: "Coursera",
    year: "2023",
    description: "Principios de diseño centrado en el usuario y prototipado con Figma.",
    link: "https://coursera.org/certificate/UXUID1234",
  },
];

export default function AchievementsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [cardWidth, setCardWidth] = useState(350);
  const gap = 24;

  // Ajuste responsivo
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 768) setCardWidth(300);
      else if (window.innerWidth < 1024) setCardWidth(320);
      else setCardWidth(350);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Función para iniciar scroll infinito
  const startScroll = () => {
    const totalWidth = (cardWidth + gap) * achievements.length;
    const duration = totalWidth / 40;

    controls.start({
      x: [-0, -totalWidth],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: duration, ease: "linear" },
      },
    });
  };

  useEffect(() => {
    startScroll();
  }, [cardWidth]);

  const loopItems = [...achievements, ...achievements];

  // Funciones para pausar y reanudar con suavidad
  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => startScroll();

  return (
    <section id="achievements" className="relative py-24 md:py-32 w-full max-w-6xl mx-auto px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-12"
      >
        <FaCertificate className="text-cyan-400 w-8 h-8 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Certificaciones
        </h2>
      </motion.div>
      {/* contenedor que oculta overflow solo horizontalmente */}
      <div className="relative">
        <div className="overflow-hidden -mx-6 md:-mx-10">
          <motion.div
            ref={containerRef}
            className="flex gap-6 relative z-0"
            animate={controls}
          >
            {loopItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex-shrink-0 bg-gray-800/90 border border-white/10 p-6 rounded-2xl shadow-lg relative"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-blue-400">{item.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-1">
                  <span className="font-medium">{item.provider}</span> • {item.year}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 border border-blue-400/30 px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-200"
                  >
                    Ver certificado <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
