# Estudio J — Tienda Online MVP

> Moda circular curada en San Fernando del Valle de Catamarca, Argentina.
> Desarrollado por **[LOOM.IA](https://www.loomia.ar)** · MVP v1.0 · Marzo 2026

---

## Sobre el proyecto

Tienda online a medida para **Estudio J**, marca de moda circular de Catamarca. La plataforma permite exhibir y vender prendas de segunda selección con identidad editorial propia, superando ampliamente las capacidades de soluciones genéricas como Tienda Nube.

Cada prenda tiene condición documentada, historia propia, impacto ambiental calculado (CO₂ ahorrado) y checkout directo por WhatsApp — el canal de comercio preferido en Argentina.

---

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 14** (App Router) | Framework principal, SSR/SSG |
| **TypeScript** | Tipado estático, calidad de código |
| **Tailwind CSS** | Sistema de diseño utilitario |
| **React 18** | UI components |
| **Google Fonts** | Cormorant Garamond + DM Sans |
| **WhatsApp API** | Checkout y consultas |
| **Vercel** | Hosting y deploy continuo |

---

## Estructura del proyecto

```
web/
├── app/
│   ├── globals.css          # Variables CSS, animaciones, grain texture
│   ├── layout.tsx           # Metadata, fuentes Google
│   ├── page.tsx             # Home (todas las secciones)
│   └── tienda/
│       └── page.tsx         # Shop con filtros y sort
├── components/
│   ├── Navbar.tsx           # Navegación fija con scroll effect
│   ├── Hero.tsx             # Hero con word-swap animado (blur crossfade)
│   ├── Marquee.tsx          # Banda dorada con texto corriendo
│   ├── ImpactCounter.tsx    # Contadores de impacto ambiental animados
│   ├── FeaturedProducts.tsx # Grid de productos destacados
│   ├── ProductCard.tsx      # Card con foto real, condición, CO₂, hover story
│   ├── Manifesto.tsx        # Valores de la marca + quote editorial
│   ├── HowItWorks.tsx       # 3 pasos del circuito de consignación
│   ├── ConsignmentCTA.tsx   # CTA "¿Tenés ropa que ya no usás?"
│   ├── Footer.tsx           # Links, redes, info del local
│   └── WhatsAppButton.tsx   # Botón flotante de WhatsApp
├── lib/
│   ├── products.ts          # Catálogo de productos + tipos TypeScript
│   └── constants.ts         # WhatsApp, Instagram, dirección, horarios
├── public/
│   ├── logo.jpeg            # Logo Estudio J
│   └── images/              # Fotos de prendas
│       ├── campera-tucci.png
│       ├── cartera-versace.png
│       ├── chaleco-zara.png
│       ├── conjunto-dollstore.png
│       ├── pantalon-prune.png
│       └── tapado-rojo.png
└── ...config files
```

---

## Correr localmente

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm start
```

---

## Catálogo de productos

Los productos se definen en `lib/products.ts`. Cada producto tiene la siguiente estructura:

```typescript
{
  id: string
  name: string           // Nombre de la prenda
  brand: string          // Marca
  price: number          // Precio en ARS
  originalPrice?: number // Precio original (opcional, para mostrar ahorro)
  condition: "Excelente" | "Muy bueno" | "Bueno"
  conditionScore: 1 | 2 | 3
  category: "tops" | "bottoms" | "vestidos" | "accesorios" | "calzado" | "abrigos"
  size: string           // Talle (ej: "M / 38", "Único")
  colors: [string, string] // Gradiente fallback si no hay imagen
  image?: string         // Ruta a la foto real (ej: "/images/campera-tucci.png")
  story: string          // Historia de esta prenda (visible en hover)
  co2Saved: number       // Kg de CO₂ ahorrado vs comprar nuevo
  waterSaved: number     // Litros de agua ahorrados
  tags: string[]         // Tags para búsqueda futura
  available: boolean
  new?: boolean          // Muestra badge "NUEVO"
}
```

### Agregar una prenda nueva (MVP)

1. **Copiar la foto** a `public/images/nombre-sin-espacios.png`
2. **Agregar el objeto** al array `products` en `lib/products.ts`
3. **Publicar**: `git add . && git commit -m "feat: agregar [nombre prenda]" && git push`
   Vercel detecta el push y publica en menos de 60 segundos.

---

## Variables de configuración

Editar `lib/constants.ts`:

```typescript
export const WHATSAPP_NUMBER = "5493834000000"; // ← Número real sin + ni espacios
export const INSTAGRAM_URL   = "https://instagram.com/estudioj";
export const STORE_ADDRESS   = "San Fernando del Valle de Catamarca, Argentina";
export const STORE_HOURS     = "Lun a Vie | 18 a 21 hs";
```

---

## Design system

| Token | Valor | Uso |
|---|---|---|
| `dark` | `#0C0B09` | Fondo principal |
| `gold` | `#C9A31F` | Acento dorado, CTAs, precios |
| `forest` | `#2B4A35` | Acento verde, sección consignación |
| `cream` | `#F0EAE0` | Texto sobre fondo oscuro |
| Display font | Cormorant Garamond | Headlines editoriales |
| Body font | DM Sans | Textos, labels, UI |

---

## Deploy en Vercel

1. Ir a [vercel.com](https://vercel.com) → **Add New Project**
2. Importar el repo `marcosalbinoacosta/estudioJ`
3. Vercel detecta Next.js automáticamente
4. Click en **Deploy** — listo en ~2 minutos

Para conectar dominio propio (ej: `estudioj.com.ar`): panel de Vercel → Domains.

---

## Pagos (próxima fase — V1)

Integración con **MercadoPago Checkout Pro**:
- Tarjetas de crédito y débito
- Transferencias bancarias (CVU/CBU)
- Efectivo (Rapipago, Pago Fácil)
- Cuotas sin interés
- Comisión: 3,5–6,99% solo sobre ventas realizadas (sin costo fijo)

---

## Envíos (próxima fase — V1)

Cotizador automático integrado con:
- **Correo Argentino** — tarifa e-commerce (20–40% menor a tarifa regular)
- **Andreani** — seguimiento en tiempo real
- **OCA** — alternativa intermedia

Hasta entonces, coordinación manual por WhatsApp.

---

## Roadmap

### ✅ MVP (activo)
- Home editorial completo
- Tienda con 6 productos reales y fotos propias
- Condición de prenda con dots visuales
- CO₂ ahorrado por producto
- Historia de cada prenda (hover)
- Checkout por WhatsApp con mensaje pre-completado
- Filtros por categoría y condición
- Sección "Cómo funciona" para el circuito de consignación
- Diseño responsive mobile + desktop

### 🔜 V1 — Tienda completa
- [ ] MercadoPago Checkout Pro
- [ ] Panel admin para cargar prendas sin tocar código
- [ ] Página de producto individual (`/tienda/[id]`)
- [ ] Carrito de compras
- [ ] Cotizador de envíos automático por código postal
- [ ] Búsqueda de prendas
- [ ] Notificaciones por email

### 🔮 V2 — Comunidad circular
- [ ] Perfil de usuaria + historial de compras
- [ ] Flow de consignación 100% online
- [ ] Cuotas sin interés (MercadoPago)
- [ ] Seguimiento de pedidos en tiempo real
- [ ] Reviews de prendas
- [ ] Lookbook / editorial digital
- [ ] App mobile (PWA)

---

## Costos operativos

| Concepto | Costo |
|---|---|
| Hosting (Vercel) | **$0 / mes** |
| Dominio propio | ~**$15 USD / año** |
| MercadoPago (V1) | **3,5–6,99% por venta** (sin costo fijo) |
| Tienda Nube (referencia) | ~$25.000 ARS/mes + comisión |

---

## Sobre LOOM.IA

Desarrollado por **LOOM.IA** — tecnología que trabaja por tu negocio desde el primer mes.

Desarrollamos sistemas a medida, implementamos inteligencia artificial en procesos reales y protegemos la infraestructura digital de PYMEs argentinas.

**Servicios:** Desarrollo a medida · IA & Automatización · Ciberseguridad · E-commerce · CRMs & Dashboards

🌐 [www.loomia.ar](https://www.loomia.ar)

---

*Estudio J · Moda Circular · San Fernando del Valle de Catamarca · Gracias por ser parte del cambio ♻*
