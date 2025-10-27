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

        background: { color: "transparent" },

        fpsLimit: 60,

        interactivity: {

          events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: false } },

          modes: { repulse: { distance: 120, duration: 0.3 } },

        },

        particles: {

          number: { value: 45, density: { enable: true, area: 800 } },

          color: { value: ["#60a5fa", "#8b5cf6", "#ec4899"] },

          links: { enable: true, color: "#8b5cf6", distance: 160, opacity: 0.12 },

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