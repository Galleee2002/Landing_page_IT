"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Extraemos los props para mantener el tipado estricto
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
