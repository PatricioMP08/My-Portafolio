"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function BackgroundParticles() {
  const init = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        // Establece el color de fondo a un negro muy oscuro para coincidir con la imagen.
        background: { color: "#0a0a0a" }, // se puede ajustar este tono de negro/gris oscuro.
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: false } },
          modes: { repulse: { distance: 120, duration: 0.3 } },
        },
        particles: {
          number: { value: 45, density: { enable: true, area: 800 } },
          // Colores ajustados para simular los tonos turquesa/cian del gradiente
          // en la imagen.se puede ajustar para un resultado más preciso.
          color: { value: ["#48D1CC", "#20B2AA", "#008B8B"] }, // Cian medio, Turquesa brillante, Turquesa oscuro
          links: { enable: true, color: "#20B2AA", distance: 160, opacity: 0.12 },
          move: { enable: true, speed: 0.6 },
          size: { value: { min: 1, max: 4 } },
          opacity: { value: 0.6 },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}