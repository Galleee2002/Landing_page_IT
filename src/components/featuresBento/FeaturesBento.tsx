"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Zap, Shield, Globe, Cpu, GitMerge } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string; // Para controlar el span (tamaño) en la grilla
  children?: React.ReactNode; // Para contenido visual extra (gráficos, código, etc.)
}

// --- Sub-component: The Card ---
const BentoCard = ({
  title,
  description,
  icon: Icon,
  className,
  children,
}: BentoCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg shadow-zinc-200/40 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-zinc-200/70 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none dark:hover:border-zinc-700 dark:hover:bg-zinc-900/60",
        className
      )}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-[50px] transition-all duration-500 group-hover:bg-indigo-500/20" />

      {/* Content Top (Visuals) */}
      <div className="mb-4 flex-1 relative z-10">{children}</div>

      {/* Content Bottom (Text) */}
      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-zinc-100 p-2 text-zinc-500 group-hover:text-indigo-600 group-hover:bg-indigo-500/10 transition-colors dark:bg-zinc-800/50 dark:text-zinc-400 dark:group-hover:text-indigo-400">
          <Icon size={20} />
        </div>
        <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function FeaturesBento() {
  return (
    <section
      id="features"
      className="relative w-full bg-zinc-50 py-24 px-4 md:px-6 overflow-hidden dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative mx-auto max-w-6xl z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            Todo lo que necesitas para escalar.
          </motion.h2>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto dark:text-zinc-400">
            Una suite completa de herramientas integradas para llevar tu
            desarrollo al siguiente nivel.
          </p>
        </div>

        {/* The Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(250px,auto)]"
        >
          {/* Card 1: Large (Span 2 cols) - Edge Network */}
          <BentoCard
            title="Red Edge global"
            description="Despliega tu código en más de 35 regiones automáticamente. Latencia < 50ms garantizada."
            icon={Globe}
            className="md:col-span-2"
          >
            {/* Visual: Abstract Map Dots */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
              <div className="w-full h-full bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>
          </BentoCard>

          {/* Card 2: Tall (Span 2 rows) - Security */}
          <BentoCard
            title="Seguridad empresarial"
            description="Cumplimiento SOC2 Type II, encriptación AES-256 en reposo y tránsito. Tu data, segura."
            icon={Shield}
            className="md:row-span-2 bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900/40 dark:to-zinc-900/80"
          >
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 animate-pulse" />
                <Shield
                  size={80}
                  className="text-zinc-300 dark:text-zinc-800 relative z-10"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Standard - Serverless */}
          <BentoCard
            title="Funciones Serverless"
            description="Escalado infinito sin gestionar servidores. Solo paga por lo que usas."
            icon={Zap}
          >
            {/* Visual: Bar Chart */}
            <div className="flex items-end justify-center gap-2 h-20 pb-4 px-8 opacity-50 group-hover:opacity-100 transition-opacity">
              {[40, 70, 30, 85, 50].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-t-sm hover:bg-indigo-400 transition-colors duration-300"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </BentoCard>

          {/* Card 4: Standard - CI/CD */}
          <BentoCard
            title="Reversiones instantáneas"
            description="¿Algo salió mal? Vuelve a la versión anterior en un solo clic."
            icon={GitMerge}
          >
            <div className="flex items-center justify-center h-full opacity-60">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-white/80 px-3 py-1 rounded-full border border-zinc-200 dark:bg-zinc-950/50 dark:border-zinc-800">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>git revert HEAD~1</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 5: Large (Span 2 cols) - Developer Experience */}
          <BentoCard
            title="Experiencia para desarrolladores"
            description="CLI potente, integración con VS Code y Previews automáticas en cada PR."
            icon={Terminal}
            className="md:col-span-2"
          >
            {/* Visual: Fake Terminal */}
            <div className="absolute bottom-4 right-4 left-4 top-4 bg-zinc-900 rounded-lg border border-zinc-200 p-3 font-mono text-xs text-zinc-600 opacity-80 group-hover:opacity-100 transition-opacity shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
              <div className="flex gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
              </div>
              <div className="space-y-1">
                <p>
                  <span className="text-indigo-400">➜</span>{" "}
                  <span className="text-zinc-300">~</span> npx devscale deploy
                </p>
                <p className="text-zinc-500">Compilando el proyecto...</p>
                <p className="text-zinc-500">Optimizando recursos...</p>
                <p className="text-green-400">✔ Desplegado en 1.2s</p>
              </div>
            </div>
          </BentoCard>

          {/* Card 6: Standard - Infrastructure as Code */}
          <BentoCard
            title="Infraestructura como código"
            description="Define tu infraestructura en TypeScript junto con tu aplicación."
            icon={Cpu}
          />
        </motion.div>
      </div>
    </section>
  );
}
