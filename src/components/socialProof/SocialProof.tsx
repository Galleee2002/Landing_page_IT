"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Placeholder avatars (puedes usar imágenes reales o estos gradientes)
const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
];

export default function SocialProof() {
  return (
    <section className="w-full py-12 border-y border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
          {/* 1. Avatars Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center -space-x-4"
          >
            {avatars.map((src, i) => (
              <div
                key={i}
                className={cn(
                  "relative h-12 w-12 rounded-full border-2 border-white dark:border-zinc-950 overflow-hidden",
                  "ring-1 ring-zinc-200 dark:ring-zinc-800"
                )}
              >
                <img
                  src={src}
                  alt="User avatar"
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* El "+2k" bubble */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-100 dark:bg-zinc-900 text-xs font-medium text-zinc-600 dark:text-zinc-300 ring-1 ring-zinc-200 dark:ring-zinc-800">
              +2k
            </div>
          </motion.div>

          {/* 2. Text & Rating */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 fill-indigo-500 text-indigo-500"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
              Amado por desarrolladores de todo el mundo
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Infraestructura confiable para equipos modernos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
