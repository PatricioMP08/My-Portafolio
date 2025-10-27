"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider >
      <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
