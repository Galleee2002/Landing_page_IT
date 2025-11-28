'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { createContext, useContext, type ReactNode } from 'react';
import type Lenis from 'lenis';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

// Contexto para exponer la instancia de Lenis
const LenisContext = createContext<Lenis | null>(null);

export function useLenisInstance() {
  return useContext(LenisContext);
}

// Componente interno que captura la instancia de Lenis
function LenisInstanceProvider({ children }: { children: ReactNode }) {
  const lenis = useLenis();
  
  return (
    <LenisContext.Provider value={lenis ?? null}>
      {children}
    </LenisContext.Provider>
  );
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
      }}
    >
      <LenisInstanceProvider>{children}</LenisInstanceProvider>
    </ReactLenis>
  );
}

