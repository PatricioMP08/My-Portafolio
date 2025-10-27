"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function AnimatedSection({ id, className, children }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // 👈 vuelve a animar al entrar
      className={`relative py-28 px-6 md:px-12 scroll-mt-24 ${className || ""}`}
    >
      {children}
    </motion.section>
  );
}
