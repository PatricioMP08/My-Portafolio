"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Tecnologías", href: "#tecnologias" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border-b border-gray-200/20 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-xl text-blue-500">
          PM.dev
        </Link>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-500 transition-colors text-sm md:text-base"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
