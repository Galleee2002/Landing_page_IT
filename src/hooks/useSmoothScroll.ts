"use client";

import { useLenisInstance } from "@/components/providers/SmoothScrollProvider";
import { useCallback } from "react";
import type Lenis from "lenis";

interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  onComplete?: () => void;
}

/**
 * Hook personalizado para manejar smooth scroll programático con Lenis
 * 
 * @param options - Opciones de configuración para el scroll
 * @returns Función para hacer scroll a un elemento o selector
 */
export function useSmoothScroll(options?: SmoothScrollOptions) {
  const lenis = useLenisInstance();

  const scrollTo = useCallback(
    (
      target: string | HTMLElement,
      customOptions?: SmoothScrollOptions
    ) => {
      if (!lenis) return;

      const finalOptions = { ...options, ...customOptions };
      const element =
        typeof target === "string"
          ? (document.querySelector(target) as HTMLElement | null)
          : target;

      if (element && element instanceof HTMLElement) {
        lenis.scrollTo(element, {
          offset: finalOptions.offset ?? -100,
          duration: finalOptions.duration ?? 1.5,
          easing:
            finalOptions.easing ??
            ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
          onComplete: finalOptions.onComplete,
        });
      }
    },
    [lenis, options]
  );

  const handleScrollLink = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      href: string,
      onComplete?: () => void
    ) => {
      // Solo interceptar enlaces con hash (navegación interna)
      if (!href.startsWith("#")) {
        return; // Dejar que Next.js maneje rutas externas
      }

      e.preventDefault();
      scrollTo(href, { onComplete });
    },
    [scrollTo]
  );

  return {
    scrollTo,
    handleScrollLink,
    lenis,
  };
}

