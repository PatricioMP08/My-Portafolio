"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const roles = ["Engineer", "Developer", "Designer"];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseTime = 1500;

  // Typewriter cíclico
  useEffect(() => {
    const current = roles[roleIndex];
    let timeoutId: number;

    if (!isDeleting && displayText.length < current.length) {
      timeoutId = window.setTimeout(
        () => setDisplayText(current.slice(0, displayText.length + 1)),
        typingSpeed
      );
    } else if (isDeleting && displayText.length > 0) {
      timeoutId = window.setTimeout(
        () => setDisplayText(current.slice(0, displayText.length - 1)),
        deletingSpeed
      );
    } else if (!isDeleting && displayText.length === current.length) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => window.clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="inicio"
      className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden text-white"
    >
      {/* Hero Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center z-10 flex flex-col items-center gap-6"
      >
        {/* Nombre */}
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="tracking-[0.35em] text-sm text-gray-300"
        >
          NOMBRE APELLIDO
        </motion.p>

        {/* Título + Typewriter */}
        <motion.h1
          initial={{ y: 30, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-2"
        >
          Software{" "}
          <span className="relative inline-block">
            <motion.span
              initial={{ rotate: -5 }}
              animate={{ rotate: [ -5, 5, -5 ] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              {displayText}
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="absolute right-[-2px] top-0 text-cyan-400"
            >
              |
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Transformo ideas en experiencias digitales fluidas y elegantes con{" "}
          <span className="text-cyan-400 font-semibold">Next.js</span>,{" "}
          <span className="text-blue-400 font-semibold">Laravel</span> y{" "}
          <span className="text-purple-400 font-semibold">diseño interactivo</span>.
        </motion.p>

        {/* Botón con glow brutal */}
        <motion.a
          href="#proyectos"
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.15,
            boxShadow:
              "0 0 40px rgba(56,189,248,0.8), 0 0 60px rgba(139,92,246,0.6)",
            textShadow: "0 0 10px rgba(56,189,248,0.75)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block mt-8 px-10 py-3 rounded-full border border-cyan-400 
                     text-cyan-400 font-semibold tracking-wide 
                     hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 hover:text-black transition-all duration-300"
        >
          Ver proyectos
        </motion.a>
      </motion.div>
    </section>
  );
}
