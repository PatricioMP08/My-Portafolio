"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, open, onClose }: {
  project: any | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* panels + content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            {/* left panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.45 }}
              className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-[#60a5fa] to-[#8b5cf6]"
            />
            {/* right panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45 }}
              className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-[#fb7185] to-[#f97316]"
            />

            {/* content box */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="relative w-[min(900px,95%)] max-h-[85vh] overflow-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 pointer-events-auto z-60"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-sm px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800"
              >
                Cerrar
              </button>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

              <div className="flex gap-3 mb-6 flex-wrap">
                {project.tech?.map((t: string) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">{t}</span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">Live Demo</a>
                <a href={project.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700">GitHub</a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
