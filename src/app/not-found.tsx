"use client";

import Link from "next/link";
// Asegúrate de tener framer-motion instalado: npm install framer-motion
import { motion } from "framer-motion";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 shadow-xl"
        >
          <FileQuestion className="h-10 w-10 text-indigo-500" />
        </motion.div>

        {/* The Big 404 */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-600 sm:text-9xl"
        >
          404
        </motion.h1>

        {/* Explanation */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-2xl font-semibold tracking-tight"
        >
          Página no encontrada
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-[400px] text-zinc-500 dark:text-zinc-400"
        >
          Lo sentimos, no pudimos encontrar lo que buscabas.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-all hover:bg-zinc-800 hover:ring-4 hover:ring-zinc-200 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:hover:ring-zinc-800 focus:outline-none"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
