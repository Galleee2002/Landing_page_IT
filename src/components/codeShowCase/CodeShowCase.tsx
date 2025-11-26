"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Copy,
  Terminal,
  FileCode,
  Database,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
interface CodeSnippet {
  id: string;
  filename: string;
  icon: React.ElementType;
  language: string;
  description: string;
  code: string; // HTML string simulada para highlighting simple
}

// --- Data (Simulando Syntax Highlighting manual para performance máxima) ---
const snippets: CodeSnippet[] = [
  {
    id: "api",
    filename: "api/deploy/route.ts",
    icon: FileCode,
    language: "typescript",
    description: "Define endpoints serverless con tipado automático.",
    code: `
<span class="text-purple-400">import</span> { NextResponse } <span class="text-purple-400">from</span> <span class="text-green-400">'next/server'</span>;
<span class="text-purple-400">import</span> { devscale } <span class="text-purple-400">from</span> <span class="text-green-400">'@devscale/sdk'</span>;

<span class="text-purple-400">export async function</span> <span class="text-blue-400">POST</span>(request: Request) {
  <span class="text-gray-500">// Validación automática de payload</span>
  <span class="text-purple-400">const</span> { projectId } = <span class="text-purple-400">await</span> request.json();

  <span class="text-purple-400">const</span> deployment = <span class="text-purple-400">await</span> devscale.deploy({
    project: projectId,
    env: <span class="text-green-400">'production'</span>,
    region: <span class="text-green-400">'us-east-1'</span>
  });

  <span class="text-purple-400">return</span> NextResponse.json({ 
    status: <span class="text-green-400">'success'</span>, 
    url: deployment.url 
  });
}`,
  },
  {
    id: "config",
    filename: "devscale.config.ts",
    icon: Terminal,
    language: "typescript",
    description: "Configura tu infraestructura como código (IaC).",
    code: `
<span class="text-purple-400">import</span> { defineConfig } <span class="text-purple-400">from</span> <span class="text-green-400">'devscale/config'</span>;

<span class="text-purple-400">export default</span> <span class="text-blue-400">defineConfig</span>({
  runtime: <span class="text-green-400">'edge'</span>,
  memory: <span class="text-orange-400">1024</span>,
  <span class="text-gray-500">// Protección contra DDoS incluida</span>
  security: {
    firewall: <span class="text-blue-400">true</span>,
    rateLimit: <span class="text-orange-400">5000</span>
  },
  database: {
    provider: <span class="text-green-400">'postgres'</span>,
    replicas: [<span class="text-green-400">'fra1'</span>, <span class="text-green-400">'sfo3'</span>]
  }
});`,
  },
  {
    id: "db",
    filename: "schema.prisma",
    icon: Database,
    language: "prisma",
    description: "Sincroniza tu base de datos global en segundos.",
    code: `
<span class="text-purple-400">model</span> User {
  id        <span class="text-blue-400">String</span>   <span class="text-purple-400">@id</span> <span class="text-purple-400">@default</span>(cuid())
  email     <span class="text-blue-400">String</span>   <span class="text-purple-400">@unique</span>
  role      <span class="text-blue-400">Role</span>     <span class="text-purple-400">@default</span>(USER)
  posts     Post[]
  
  <span class="text-gray-500">// Campos de auditoría automática</span>
  createdAt <span class="text-blue-400">DateTime</span> <span class="text-purple-400">@default</span>(now())
  updatedAt <span class="text-blue-400">DateTime</span> <span class="text-purple-400">@updatedAt</span>

  <span class="text-purple-400">@@index</span>([email])
}`,
  },
];

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(snippets[0]);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    // Extraer texto plano del HTML simulado (solo para el ejemplo)
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = activeTab.code;
    const plainText = tempDiv.textContent || tempDiv.innerText || "";

    navigator.clipboard.writeText(plainText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      id="code"
      className="relative w-full bg-zinc-50 py-24 px-4 overflow-hidden dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN: Context & Tabs */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl mb-4">
              Diseñado para <br />
              <span className="text-indigo-400">Desarrolladores</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed dark:text-zinc-400">
              Integra DevScale en tu stack existente con pocas líneas de código.
              Tipado fuerte, autocompletado inteligente y cero configuración
              compleja.
            </p>
          </div>

          {/* Interactive Tabs List */}
          <div className="flex flex-col gap-2">
            {snippets.map((snippet) => (
              <button
                key={snippet.id}
                onClick={() => setActiveTab(snippet)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left group",
                  activeTab.id === snippet.id
                    ? "bg-white border-indigo-500/60 shadow-lg shadow-indigo-500/10 dark:bg-zinc-900 dark:border-indigo-500/50"
                    : "bg-white/70 border-zinc-200 hover:border-zinc-300 dark:bg-transparent dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-lg transition-colors",
                    activeTab.id === snippet.id
                      ? "bg-indigo-500 text-white"
                      : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200 group-hover:text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-zinc-700 dark:group-hover:text-zinc-200"
                  )}
                >
                  <snippet.icon size={20} />
                </div>
                <div>
                  <h3
                    className={cn(
                      "font-semibold text-sm transition-colors",
                      activeTab.id === snippet.id
                        ? "text-zinc-900 dark:text-white"
                        : "text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200"
                    )}
                  >
                    {snippet.filename}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5 dark:text-zinc-500">
                    {snippet.description}
                  </p>
                </div>
                {activeTab.id === snippet.id && (
                  <motion.div layoutId="active-indicator" className="ml-auto">
                    <ChevronRight className="text-indigo-400 w-5 h-5" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: The IDE Window */}
        <div className="relative group">
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-1000" />

          <div className="relative rounded-2xl border border-zinc-200 bg-white shadow-2xl overflow-hidden dark:border-zinc-800 dark:bg-[#09090b]">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 bg-zinc-100 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
              </div>
              <div className="text-xs font-mono text-zinc-500 flex items-center gap-2 dark:text-zinc-400">
                <activeTab.icon size={12} />
                {activeTab.filename}
              </div>
              <button
                onClick={handleCopy}
                className="text-zinc-500 hover:text-zinc-800 transition-colors dark:hover:text-zinc-300"
                aria-label="Copiar código"
              >
                {isCopied ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Code Area */}
            <div className="p-6 overflow-x-auto min-h-[300px] flex items-start bg-white dark:bg-transparent transition-colors duration-300">
              {/* Line Numbers */}
              <div className="flex flex-col gap-1 pr-4 border-r border-zinc-200 select-none text-right min-w-[2.5rem] dark:border-zinc-800/50">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-zinc-400 leading-6 dark:text-zinc-700"
                  >
                    {i + 1}
                  </span>
                ))}
              </div>

              {/* Code Content */}
              <div className="pl-4 font-mono text-sm leading-6 w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <pre>
                      {/* Using dangerouslySetInnerHTML allows us to simulate syntax highlighting 
                            without a heavy runtime library like Prism/Shiki */}
                      <code
                        className="language-typescript text-zinc-800 dark:text-zinc-300 block w-full whitespace-pre"
                        dangerouslySetInnerHTML={{
                          __html: activeTab.code.trim(),
                        }}
                      />
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-zinc-100 border-t border-zinc-200 text-[10px] text-zinc-500 font-mono dark:bg-zinc-900/80 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <span>UTF-8</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Conectado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
