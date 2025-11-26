"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 min-h-screen w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* --- BACKGROUND ELEMENTS --- */}

      {/* 1. Grid Pattern */}
      {/* Usamos background-image con gradientes CSS puros para crear la grilla. */}
      {/* 'bg-[size:...] define el tamaño de cada celda */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] md:bg-[size:20px_20px] lg:bg-[size:24px_24px]"></div>

      {/* 2. Radial Gradient (The Spotlight) */}
      {/* Esto crea el efecto de luz que sale del centro hacia afuera */}
      <div className="absolute z-0 left-0 right-0 top-0 -mt-20 h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-full bg-indigo-500 opacity-20 blur-[80px] md:blur-[100px]" />

      {/* 3. Gradient Mask (Fade to black) */}
      {/* Hace que la grilla se desvanezca suavemente hacia abajo para que no corte abruptamente */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-100 via-transparent to-transparent dark:from-zinc-950" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-8 text-center max-w-5xl mx-auto w-full">
        {/* A. Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 sm:mb-8 flex items-center justify-center"
        >
          <Link
            href="/changelog"
            className="group flex items-center gap-1.5 sm:gap-2 rounded-full border border-zinc-200 bg-white/80 p-1 pr-3 sm:pr-4 text-xs sm:text-sm text-zinc-600 backdrop-blur-md transition-all hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/80 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          >
            <span className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2 sm:px-3 py-1 text-xs font-semibold text-indigo-400 shadow-[inset_0_0_8px_rgba(99,102,241,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              v2.0
            </span>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Ya disponible
            </span>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-300" />
          </Link>
        </motion.div>

        {/* B. Main Title (H1) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 sm:mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight"
        >
          Despliega a la <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            velocidad del pensamiento
          </span>
        </motion.h1>

        {/* C. Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 px-4 sm:px-0"
        >
          La plataforma de infraestructura diseñada para equipos de ingeniería
          modernos. Escalabilidad global, seguridad Zero-Trust y DX
          incomparable.
        </motion.p>

        {/* D. CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0"
        >
          {/* Primary Button (Glowy) */}
          <Link
            href="/signup"
            className="group relative inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-lg bg-indigo-600 px-6 sm:px-8 font-medium text-sm sm:text-base text-white transition-all duration-300 hover:bg-indigo-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-zinc-50 dark:focus:ring-offset-zinc-950"
          >
            <span className="mr-2">Empieza a crear</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

            {/* Inner shimmer effect */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]" />
          </Link>

          {/* Secondary Button (Ghost/Outline) */}
          <Link
            href="https://github.com"
            target="_blank"
            className="inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-zinc-200 bg-white px-6 sm:px-8 text-sm sm:text-base text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Da una estrella en GitHub</span>
            <span className="sm:hidden">GitHub</span>
          </Link>
        </motion.div>
      </div>

      {/* --- OPTIONAL: CODE SNIPPET VISUAL (Bottom) --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mt-12 sm:mt-16 md:mt-20 w-full max-w-4xl px-4 sm:px-6"
      >
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-zinc-200 bg-white/90 shadow-2xl backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          {/* Fake Window Header */}
          <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-100 px-3 sm:px-4 py-2 sm:py-3 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex gap-1 sm:gap-1.5">
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500/20" />
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500/20" />
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500/20" />
            </div>
            <div className="ml-3 sm:ml-4 text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              deploy.config.ts
            </div>
          </div>

          {/* Fake Code Content */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 overflow-x-auto">
            <div className="flex text-xs sm:text-sm">
              <span className="w-6 sm:w-8 select-none text-zinc-400 dark:text-zinc-600">
                1
              </span>
              <span className="text-purple-400">export</span>{" "}
              <span className="text-blue-400 ml-1 sm:ml-2">default</span>{" "}
              <span className="text-yellow-200 ml-1 sm:ml-2">defineConfig</span>
              ({`{`}
            </div>
            <div className="flex text-xs sm:text-sm">
              <span className="w-6 sm:w-8 select-none text-zinc-400 dark:text-zinc-600">
                2
              </span>
              <span className="ml-3 sm:ml-4 text-zinc-400">region:</span>{" "}
              <span className="text-green-400 ml-1 sm:ml-2">'us-east-1'</span>,
            </div>
            <div className="flex text-xs sm:text-sm">
              <span className="w-6 sm:w-8 select-none text-zinc-400 dark:text-zinc-600">
                3
              </span>
              <span className="ml-3 sm:ml-4 text-zinc-400">runtime:</span>{" "}
              <span className="text-green-400 ml-1 sm:ml-2">'edge'</span>,
            </div>
            <div className="flex text-xs sm:text-sm">
              <span className="w-6 sm:w-8 select-none text-zinc-400 dark:text-zinc-600">
                4
              </span>
              <span className="ml-3 sm:ml-4 text-zinc-400">security:</span>{" "}
              {`{`} <span className="text-zinc-400">mfa:</span>{" "}
              <span className="text-blue-400">true</span> {`}`},
            </div>
            <div className="flex text-xs sm:text-sm">
              <span className="w-6 sm:w-8 select-none text-zinc-400 dark:text-zinc-600">
                5
              </span>
              <span>{`}`}</span>);
            </div>
            {/* Cursor animado */}
            <div className="flex mt-1">
              <span className="w-6 sm:w-8 select-none text-zinc-400 dark:text-zinc-600">
                6
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="h-4 sm:h-5 w-1.5 sm:w-2 bg-indigo-500 ml-3 sm:ml-4"
              />
            </div>
          </div>
        </div>

        {/* Glow behind the code block */}
        <div className="absolute -inset-1 z-[-1] rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-50" />
      </motion.div>
    </section>
  );
}
