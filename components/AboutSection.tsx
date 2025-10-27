"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative py-28 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 scroll-mt-24"
    >

      {/* Imagen o avatar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg ring-2 ring-cyan-400/30 hover:ring-cyan-400/60 transition-all duration-500"
      >
        <Image
          src="/images/profile.jpg" 
          alt="Nombre Apellido"
          width={300}
          height={300}
          className="object-cover"
        />
      </motion.div>

      {/* Texto descriptivo */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl text-center md:text-left backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Sobre mí
        </h2>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Soy <span className="text-cyan-400 font-medium">Nombre Apellido</span>, 
          un desarrollador <strong>Full Stack</strong> enfocado en construir soluciones web limpias, 
          seguras y optimizadas para la experiencia del usuario.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Me apasiona el desarrollo con <strong>Laravel, Next.js y React</strong>, 
          combinando la eficiencia del backend con la fluidez de las interfaces modernas.  
          Disfruto crear proyectos funcionales que ayuden a empresas y personas a digitalizar sus ideas.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-4">
          <a
            href="/cv-nombre.pdf"
            target="_blank"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-105 transition-transform shadow-lg"
          >
            Descargar CV
          </a>

          <a
            href="#contacto"
            className="px-6 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all"
          >
            Contáctame
          </a>
        </div>
      </motion.div>
    </section>
  );
}
