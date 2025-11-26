"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden bg-zinc-50 py-20 sm:py-28 md:py-36 lg:py-48 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* --- BACKGROUND EFFECTS --- */}

      {/* 1. The Massive Glow (Pulsing Orb) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-indigo-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse dark:bg-indigo-500/20" />

      {/* 2. Secondary Glow (Purple tint) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] dark:bg-purple-500/10" />

      {/* 3. Grid Pattern Overlay (Simulando partículas estáticas) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* 4. Radial Mask (Para que el fondo se funda con el negro en los bordes) */}
      <div className="absolute inset-0 bg-zinc-50/80 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_70%)] dark:bg-zinc-950/80" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white border border-zinc-200 shadow-2xl shadow-indigo-500/10 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-indigo-500/20"
        >
          <Terminal className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-indigo-500 dark:text-indigo-400" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight"
        >
          ¿Listo para desplegar tu <br className="hidden sm:block" />
          <span
            className={cn(
              "bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r",
              "from-indigo-600 via-purple-600 to-indigo-600",
              "dark:from-indigo-300 dark:via-white dark:to-indigo-300"
            )}
          >
            próxima gran idea?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8 sm:mb-10 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 px-2"
        >
          Únete a más de 10,000 desarrolladores que ya están construyendo el
          futuro. Empieza gratis, escala cuando lo necesites.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/signup"
            className="group relative inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-6 sm:px-8 font-medium text-sm sm:text-base text-white transition-all hover:bg-zinc-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-zinc-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-950"
          >
            <span className="mr-2">Empieza gratis</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center rounded-full px-6 sm:px-8 font-medium text-sm sm:text-base text-zinc-600 transition-colors hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900"
          >
            Habla con Ventas
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-600 px-4"
        >
          No necesitas tarjeta de crédito • Prueba gratis de 14 días en planes
          Pro
        </motion.p>
      </div>
    </section>
  );
}
