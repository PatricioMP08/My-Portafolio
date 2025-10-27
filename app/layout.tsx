import "./globals.css";
import { Inter } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeProviderClient from "@/components/ThemeProviderClient";
import BubbleNav from "@/components/BubbleNav";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio de Nombre Apellido",
  description: "Desarrollador Full Stack | Next.js | Laravel | React",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} relative overflow-x-hidden bg-gray-950 text-white`}
        suppressHydrationWarning
      >
        <ThemeProviderClient>
          {/* 🌌 Fondo base fijo */}
          <div className="fixed inset-0 -z-40 bg-gray-950" aria-hidden />

          {/* 🌫 Fondo animado */}
          <AnimatedBackground />

          {/* 🧭 Navegación flotante */}
          <BubbleNav />

          {/* 🔗 Barra lateral de redes */}
          <SocialSidebar />

          {/* 💡 Contenido principal */}
          <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-10">
            {children}
          </main>

          {/* 🦶 Footer (al final del scroll) */}
          <Footer />
        </ThemeProviderClient>
      </body>
    </html>
  );
}
