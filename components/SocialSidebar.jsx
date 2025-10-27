"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function SocialSidebar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const goToContact = () => {
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Mostrar el botón cuando se hace scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons = [
    {
      id: "github",
      icon: <FaGithub size={22} />,
      color: "bg-gray-800 hover:bg-blue-500",
      link: "https://github.com/",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin size={22} />,
      color: "bg-blue-700 hover:bg-blue-500",
      link: "https://linkedin.com/",
    },
    {
      id: "correo",
      icon: <FaEnvelope size={22} />,
      color: "bg-purple-600 hover:bg-blue-500",
      action: goToContact,
    },
  ];

  return (
    <>
      {/* Barra lateral de redes */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col items-center gap-4 z-50"
      >
        {icons.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 + 0.3, duration: 0.5, ease: "easeOut" }}
          >
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white transition-all shadow-lg hover:scale-110 ${item.color}`}
                title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
              >
                {item.icon}
              </a>
            ) : (
              <button
                onClick={item.action}
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white transition-all shadow-lg hover:scale-110 ${item.color}`}
                title="Contacto"
              >
                {item.icon}
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* 🔼 Botón para ir arriba (abajo a la derecha) */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center 
                     rounded-full bg-cyan-500 text-white shadow-lg 
                     hover:bg-cyan-400 hover:scale-110 transition-all z-50"
          title="Ir arriba"
        >
          <FaArrowUp size={22} />
        </motion.button>
      )}
    </>
  );
}
