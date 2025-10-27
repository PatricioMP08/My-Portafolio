"use client";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import BubbleNav from "@/components/BubbleNav";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BubbleNav />
      <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
