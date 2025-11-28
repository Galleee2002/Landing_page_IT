"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { handleScrollLink: baseHandleScrollLink } = useSmoothScroll();

  // Detectar scroll para efectos visuales del navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Características", href: "#features" },
    { name: "Código", href: "#code" },
    { name: "Contacto", href: "#cta" },
  ];

  // Wrapper que cierra el menú móvil después del scroll
  const handleScrollLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    baseHandleScrollLink(e, href, () => {
      setIsMobileMenuOpen(false);
    });
    // Cerrar inmediatamente para mejor UX
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Custom ease for smooth entry
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <nav
          className={cn(
            "relative flex items-center justify-between w-full max-w-5xl rounded-full border px-6 py-3 transition-all duration-300 ease-in-out",
            
            // --- ESTILOS BASE (Glassmorphism) ---
            "bg-white/70 border-zinc-200 shadow-lg shadow-zinc-200/50", 
            "dark:bg-zinc-900/60 dark:border-white/10 dark:shadow-black/5",
            "backdrop-blur-md",

            // --- NUEVO: HOVER EFFECTS (Sombra y Glow) ---
            // 1. Light Mode: Sombra más pronunciada, borde más oscuro y glow sutil
            "hover:bg-white/90 hover:border-zinc-400 hover:shadow-2xl hover:shadow-zinc-300/60 hover:shadow-[0_0_20px_rgba(0,0,0,0.08)]",
            
            // 2. Dark Mode: El borde se aclara y aparece un resplandor Índigo (Glow)
            "dark:hover:border-zinc-700 dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
            
            // 3. Interacción al hacer scroll: fondo más opaco cuando se hace scroll
            isScrolled && "bg-white/90 dark:bg-zinc-900/90"
          )}
        >
          {/* 1. Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Terminal size={18} />
            </div>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
              DevScale
            </span>
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollLink(e, link.href)}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/login"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 text-white px-4 text-sm font-medium transition-transform hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-zinc-50 dark:focus:ring-offset-zinc-950"
            >
              Empieza ahora
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* 4. Mobile Menu Overlay (Simple version) */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-zinc-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/95 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollLink(e, link.href)}
                className="text-base font-medium text-zinc-700 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2" />
            <Link
              href="/login"
              className="flex w-full items-center justify-center rounded-lg bg-zinc-900 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
            >
              Empieza ahora
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
