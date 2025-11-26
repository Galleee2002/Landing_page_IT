"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Github, Twitter, Linkedin, Activity } from "lucide-react";

// --- Configuration (Scalable Data) ---
const footerLinks = {
  product: [
    { name: "Características", href: "#" },
    { name: "Integraciones", href: "#" },
    { name: "Precios", href: "#" },
    { name: "Registro de cambios", href: "#" },
    { name: "Documentación", href: "#" },
  ],
  company: [
    { name: "Acerca de", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreras", href: "#" },
    { name: "Clientes", href: "#" },
    { name: "Marca", href: "#" },
  ],
  legal: [
    { name: "Política de privacidad", href: "#" },
    { name: "Términos del servicio", href: "#" },
    { name: "Política de cookies", href: "#" },
    { name: "Seguridad", href: "#" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 dark:border-zinc-900 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-5 mb-10 sm:mb-12">
          {/* Brand Column (Spans 2 cols on mobile, 2 on desktop) */}
          <div className="col-span-2 lg:col-span-2 pr-0 sm:pr-4 md:pr-8">
            <Link
              href="/"
              className="flex items-center gap-2 mb-3 sm:mb-4 group"
            >
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Terminal size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <span className="font-semibold text-base sm:text-lg text-zinc-900 tracking-tight dark:text-zinc-100">
                DevScale
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-600 mb-4 sm:mb-6 max-w-xs leading-relaxed dark:text-zinc-500">
              La plataforma de infraestructura diseñada para desarrolladores que
              construyen el futuro. Despliega en segundos, escala al infinito.
            </p>

            {/* System Status Indicator (The "Pro" Detail) */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="hidden sm:inline">
                Todos los sistemas funcionan con normalidad
              </span>
              <span className="sm:hidden">Todos los sistemas OK</span>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 tracking-wider uppercase mb-3 sm:mb-4 dark:text-zinc-100">
              Producto
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-600 hover:text-indigo-600 transition-colors dark:text-zinc-500 dark:hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 tracking-wider uppercase mb-3 sm:mb-4 dark:text-zinc-100">
              Compañía
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-600 hover:text-indigo-600 transition-colors dark:text-zinc-500 dark:hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 tracking-wider uppercase mb-3 sm:mb-4 dark:text-zinc-100">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-600 hover:text-indigo-600 transition-colors dark:text-zinc-500 dark:hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Separator & Socials */}
        <div className="pt-6 sm:pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 dark:border-zinc-900">
          <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} DevScale Inc. Todos los derechos
            reservados.
          </p>

          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-500 hover:text-zinc-900 transition-colors dark:hover:text-white p-1"
                aria-label={`Abrir ${item.name}`}
              >
                <item.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
