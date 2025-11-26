"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Triangle,
  Command,
  Cpu,
  Globe,
  Server,
  Zap,
  ShieldCheck,
  CloudLightning,
} from "lucide-react";

interface Company {
  name: string;
  icon: LucideIcon;
}

// Mock Logos (En un caso real, usarías SVGs de Vercel, Stripe, etc.)
const companies: Company[] = [
  { name: "Vercel", icon: Triangle },
  { name: "Stripe", icon: Command },
  { name: "Raycast", icon: Zap },
  { name: "Linear", icon: Cpu },
  { name: "PlanetScale", icon: Globe },
  { name: "Supabase", icon: CloudLightning },
  { name: "Clerk", icon: ShieldCheck },
  { name: "Railway", icon: Server },
];

export default function SocialProof() {
  // Duplicamos los logos para asegurar el loop infinito sin saltos
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section
      id="social-proof"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 bg-zinc-50 border-y border-zinc-200 dark:bg-zinc-950 dark:border-zinc-900/50 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 mb-6 sm:mb-8 text-center">
        <p className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest dark:text-zinc-400">
          Confiado por equipos de ingeniería en
        </p>
      </div>

      {/* Container del Marquee con Máscaras de Desvanecimiento */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 z-10 h-full w-12 sm:w-20 md:w-24 bg-gradient-to-r from-zinc-50 to-transparent pointer-events-none dark:from-zinc-950" />

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 z-10 h-full w-12 sm:w-20 md:w-24 bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none dark:from-zinc-950" />

        <div className="flex select-none">
          <motion.div
            // Animamos de 0 a -50% (la mitad del ancho total ya que duplicamos la lista)
            animate={{ x: "-50%" }}
            transition={{
              duration: 30, // Ajusta la velocidad (segundos para una vuelta completa)
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-nowrap gap-8 sm:gap-12 md:gap-16 items-center"
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer min-w-[100px] sm:min-w-[120px] md:min-w-[140px]"
              >
                {/* Logo Icon */}
                <div className="p-1.5 sm:p-2 rounded-lg bg-white/60 shadow-sm group-hover:bg-white group-hover:shadow-md transition-all dark:bg-zinc-900/50 dark:shadow-none dark:group-hover:bg-zinc-800/80 dark:group-hover:shadow-lg dark:group-hover:shadow-indigo-500/10">
                  <company.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-indigo-600 dark:text-zinc-500 dark:group-hover:text-indigo-400 transition-colors" />
                </div>

                {/* Logo Name (Simulando logotipos tipográficos) */}
                <span className="text-sm sm:text-base md:text-lg font-semibold text-zinc-600 group-hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:group-hover:text-white">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
