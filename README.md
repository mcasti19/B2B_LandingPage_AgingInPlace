# Landing B2B de Xentra CRM

Landing pública (`xentracrm.com`) con la que SkyWeb Agency capta leads B2B para vender Xentra CRM. Proyecto independiente del CRM; solo se comunica con él por la API pública.

## Desarrollo

Solo **pnpm**.

```bash
pnpm install
pnpm dev     # http://localhost:3001
pnpm build
pnpm lint
```

Variable de entorno (`.env`, se fija al construir):

```
NEXT_PUBLIC_CRM_API_URL=http://localhost:8000   # producción: https://api.xentracrm.com
```

## Contrato con el backend

`POST {NEXT_PUBLIC_CRM_API_URL}/api/public/b2b/leads` (sin auth, throttle 5/min por IP). Detalles en `CLAUDE.md`.

## Marca

Logos en `brand/` (horizontal, vertical y símbolo; variantes color, blanco, navy y oscuro).
