"use client";

export default function Footer() {
  return (
<footer
  className="
    relative w-full py-3 border-t border-white/10
    bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent
    text-gray-400 text-sm backdrop-blur-sm
  "
>
  <div className="max-w-6xl mx-auto px-6 flex items-center relative">
    <p className="text-xs md:text-sm text-gray-500">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold text-white">Nombre Apellido</span>
    </p>

    <p
      className="
        hidden md:block text-xs text-gray-500 
        absolute right-[-40px]
      "
    >
      Desarrollador Full Stack • Next.js | Laravel | React
    </p>
  </div>
</footer>
  );
}
