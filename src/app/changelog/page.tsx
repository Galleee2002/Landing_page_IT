"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface ChangelogEntry {
  version: string;
  date: string;
  highlights: string[];
}

const entries: ChangelogEntry[] = [
  {
    version: "v2.0",
    date: "25 Nov 2025",
    highlights: [
      "Nuevo Hero con badge animado y CTA mejorado",
      "Optimización de Lenis para scroll más suave",
      "Revisión completa de paleta y tokens de color",
    ],
  },
  {
    version: "v1.5",
    date: "12 Nov 2025",
    highlights: [
      "Sección Bento de features con micro-interacciones",
      "Actualización de copy y métricas sociales",
      "Mejoras en accesibilidad y foco visual",
    ],
  },
  {
    version: "v1.0",
    date: "30 Oct 2025",
    highlights: [
      "Lanzamiento inicial del landing",
      "Integración con Lenis y Framer Motion",
      "Sistema tipográfico y layout base",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <section className="min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 px-4 py-24 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Volver al home
          </Link>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Changelog
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
              Evolución continua del producto
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Documentamos cada iteración importante para mantener transparencia
              con equipos que confían en nuestra plataforma.
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {entries.map((entry, index) => (
            <motion.article
              key={entry.version}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 * index }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-900/80 bg-white/50 dark:bg-zinc-900/40 p-8 backdrop-blur-sm shadow-sm dark:shadow-none"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                    {entry.version}
                  </span>
                  <p className="text-sm text-zinc-500">{entry.date}</p>
                </div>
                <p className="text-sm text-zinc-500">
                  {entries.length - index}ª entrega del roadmap
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
