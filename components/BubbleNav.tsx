"use client";

import { motion } from "framer-motion";
import { FaHome, FaUser, FaBriefcase, FaAward, FaLaptopCode, FaServer, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

const items = [
  { id: "inicio", icon: <FaHome />, label: "Inicio" },
  { id: "sobre-mi", icon: <FaUser />, label: "Sobre mí" },
  { id: "experiencia", icon: <FaBriefcase />, label: "Experiencia" },
  { id: "achievements", icon: <FaAward />, label: "Certificaciones" },
  { id: "tecnologias", icon: <FaLaptopCode />, label: "Tecnologías" },
  { id: "proyectos", icon: <FaServer />, label: "Proyectos" },
  { id: "contacto", icon: <FaEnvelope />, label: "Contáctame" },
];

export default function BottomDockNav() {
  const [active, setActive] = useState("inicio");

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const offsetTop = el.offsetTop;
        const offsetHeight = el.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActive(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // verificar al inicio
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 0; // Ajusta si tienes header fijo
    const target = el.offsetTop - navHeight;

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 sm:gap-6
                 bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg
                 border border-white/10 rounded-full px-4 sm:px-8 py-3 shadow-xl overflow-x-auto"
    >
      {items.map((it) => {
        const isActive = active === it.id;
        return (
          <motion.button
            key={it.id}
            onClick={() => scrollTo(it.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center text-[10px] sm:text-xs transition-all flex-shrink-0 ${
              isActive ? "text-cyan-400" : "text-gray-400 hover:text-cyan-300"
            }`}
          >
            <motion.div
              animate={{ scale: isActive ? 1.4 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {it.icon}
            </motion.div>
            <span className="hidden sm:block mt-1 text-center">{it.label}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
