## Stack listo para trabajar

- Next.js 16 (App Router, TypeScript y fuente Geist configurada).
- Tailwind CSS 3.4 con tokens para shadcnUI (`tailwind.config.ts`, `src/app/globals.css`).
- shadcnUI inicializado (`components.json`, util `cn`, botón base en `src/components/ui/button.tsx`).
- Framer Motion para animaciones (`src/app/page.tsx` incluye ejemplos).
- Lenis como proveedor global para scroll suave (`LenisProvider` en `src/components/providers/lenis-provider.tsx`).

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # modo desarrollo en http://localhost:3000
npm run build    # build de producción
npm start        # sirve la build
npm run lint     # ejecuta ESLint
```

## Añadir componentes shadcnUI

1. Revisa/ajusta las opciones en `components.json` si lo necesitas.
2. Ejecuta `npx shadcn@latest add <componente>` (por ejemplo `button`, `card`, `accordion`).
3. Los componentes se guardarán en `src/components/ui` y utilizan el helper `cn`.

## Animaciones y scroll

- Framer Motion ya está disponible; puedes importar `motion` donde lo necesites.
- Lenis se instancia una sola vez en el layout. Si quieres afinarlo, edita `LenisProvider`.

## Estructura base

- `src/app/page.tsx`: hero y secciones de ejemplo usando Button + Framer Motion.
- `src/lib/utils.ts`: helper `cn` para combinar clases.
- `tailwind.config.ts`: presets de colores, radios y animaciones (accordion) alineados con shadcnUI.

Con esto el proyecto queda listo para que sustituyas el contenido de la landing, agregues componentes de shadcnUI y empieces a iterar tu diseño.
