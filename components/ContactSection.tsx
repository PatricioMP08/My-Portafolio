"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section
      id="contacto"
      className="relative py-28 px-6 md:px-12 scroll-mt-24"
    >
      {/* Animación principal única */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        {/* Título igual que las otras secciones */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <FaPaperPlane className="text-cyan-400 w-8 h-8" />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Contáctame
          </h2>
        </div>

        {/* Formulario sin animación interna (para evitar doble efecto) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative max-w-xl w-full mx-auto p-10 rounded-3xl
          bg-white/5 border border-white/10 backdrop-blur-[6px]
          shadow-[0_0_45px_rgba(139,92,246,0.15)] 
          transition-all duration-500 z-10"
        >
          <div className="grid gap-6">
            <input
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 
                        text-white placeholder-gray-300 focus:outline-none 
                        focus:ring-2 focus:ring-cyan-400/60 transition-all duration-300"
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 
                        text-white placeholder-gray-300 focus:outline-none 
                        focus:ring-2 focus:ring-cyan-400/60 transition-all duration-300"
              placeholder="Tu correo"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 
                        text-white placeholder-gray-300 focus:outline-none 
                        focus:ring-2 focus:ring-cyan-400/60 transition-all duration-300"
              placeholder="Tu mensaje"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {/* Botón */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(139,92,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 rounded-full 
                        bg-gradient-to-r from-cyan-400/70 via-blue-500/70 to-purple-500/70
                        text-white font-semibold shadow-lg flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Enviar</span>
              <FaPaperPlane className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <div className="text-sm text-gray-200 text-center sm:text-right">
              o escríbeme a{" "}
              <a
                href="mailto:correo@example.com"
                className="text-cyan-400 hover:text-purple-400 transition"
              >
                correo@example.com
              </a>
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
