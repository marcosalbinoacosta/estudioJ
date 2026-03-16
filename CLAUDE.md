# Estudio J — Contexto del proyecto

## Qué es esto
Tienda online MVP para **Estudio J**, marca de moda circular de San Fernando del Valle de Catamarca, Argentina. Desarrollado por LOOM.IA (www.loomia.ar).

El sitio está en `C:\Users\Usuario\Desktop\ESTUDIOJ\web\` y corre en `http://localhost:3000` con `npm run dev`.

## Stack
- Next.js 14 App Router · TypeScript · Tailwind CSS
- Sin Framer Motion — todas las animaciones son CSS puro (`app/globals.css`)
- Deploy target: Vercel (gratuito)
- Repo: https://github.com/marcosalbinoacosta/estudioJ.git

## Archivos clave

| Archivo | Para qué sirve |
|---|---|
| `lib/products.ts` | Catálogo completo de prendas + tipos TypeScript |
| `lib/constants.ts` | WhatsApp number, Instagram URL, horarios, dirección |
| `app/globals.css` | Variables CSS, animaciones (`wordExit`, `wordEnter`, `marquee`, etc.), grain texture |
| `tailwind.config.ts` | Colores (`dark`, `gold`, `forest`, `cream`), fuentes, keyframes |

## Design system

**Colores:**
- `dark` #0C0B09 — fondo principal
- `gold` #C9A31F — acento dorado, CTAs, precios
- `forest` #2B4A35 — verde, sección consignación
- `cream` #F0EAE0 — texto sobre oscuro

**Tipografía:**
- Headlines: `Cormorant Garamond` (cargada vía Google Fonts, var `--font-cormorant`)
- Body/UI: `DM Sans` (var `--font-dm-sans`)

**Clases utilitarias clave definidas en globals.css:**
- `.btn-primary` — botón dorado relleno
- `.btn-outline` — botón con borde cream
- `.product-card` — base de la card de producto
- `.text-label` — texto pequeño uppercase con tracking
- `.text-gold-gradient` — texto con gradiente dorado
- `.reveal` + `.visible` — animación de scroll reveal vía IntersectionObserver
- `.word-exit` / `.word-enter` — animación blur crossfade del hero

## Producto/Catálogo

Productos en `lib/products.ts`. Condiciones posibles: `"Excelente"` | `"Muy bueno"` | `"Bueno"`.

Para agregar una prenda:
1. Copiar foto a `public/images/nombre-sin-espacios.png`
2. Agregar objeto al array `products` en `lib/products.ts`
3. El campo `image` es opcional — sin él se usa gradiente de `colors`

**Productos actuales (6):** Campera Tucci · Cartera Versace · Chaleco Zara · Conjunto Dollstore · Pantalón Prune · Tapado rojo

## Checkout
WhatsApp (MVP). Número configurado en `lib/constants.ts` → `WHATSAPP_NUMBER` (formato: `5493834000000`, sin + ni espacios). Función `buildWhatsAppUrl(mensaje?)` genera el link completo.

## Lo que falta (próximas tareas)

### Urgente / V1
- [ ] **Número de WhatsApp real** — actualizar `WHATSAPP_NUMBER` en `lib/constants.ts`
- [ ] **Página de producto individual** — `/tienda/[id]` con foto grande, historia completa, botón comprar
- [ ] **MercadoPago** — reemplazar WhatsApp checkout por pago real
- [ ] **Panel admin** — cargar prendas sin tocar código

### Nice to have
- [ ] Carrito de compras
- [ ] Cotizador de envíos por código postal (Andreani / Correo Argentino)
- [ ] Búsqueda de prendas
- [ ] Wishlist / favoritos
- [ ] Notificaciones por email post-compra

## Estructura de carpetas

```
app/
  globals.css         ← animaciones y variables CSS
  layout.tsx          ← metadata + Google Fonts
  page.tsx            ← home (importa todos los componentes)
  tienda/page.tsx     ← shop con filtros client-side

components/
  Navbar.tsx          ← fija, transparente → dark al hacer scroll
  Hero.tsx            ← word-swap con blur crossfade (wordExit/wordEnter)
  Marquee.tsx         ← banda dorada con texto corriendo
  ImpactCounter.tsx   ← count-up animado con IntersectionObserver
  FeaturedProducts.tsx
  ProductCard.tsx     ← foto real o gradiente fallback, hover muestra historia
  Manifesto.tsx       ← quote + 4 valores con íconos SVG
  HowItWorks.tsx      ← 3 pasos del circuito de consignación
  ConsignmentCTA.tsx  ← CTA verde para vendedoras
  Footer.tsx
  WhatsAppButton.tsx  ← botón flotante verde, aparece a los 2s

lib/
  products.ts         ← types + array de productos
  constants.ts        ← config editable (WhatsApp, Instagram, etc.)

public/
  logo.jpeg           ← logo EJ (círculo oscuro con monograma)
  images/             ← fotos de prendas (6 actuales)
```

## Contexto de negocio
- Local físico en Catamarca, horario Lun–Vie 18 a 21 hs
- Modelo: consignación — las clientas traen su ropa, Estudio J la cuida y vende, y les paga un porcentaje
- Envíos a todo el país
- Instagram activo como canal principal pre-web
- El documento de presentación del MVP está en `C:\Users\Usuario\Desktop\ESTUDIOJ\ESTUDIOJ-MVP-DOCUMENTO.html`
