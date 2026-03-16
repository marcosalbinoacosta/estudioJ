"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { conditionDetails } from "@/lib/products";
import { buildWhatsAppUrl as waUrl } from "@/lib/constants";

const conditionColors: Record<string, string> = {
  Excelente: "#C9A31F",
  "Muy bueno": "#8AAF96",
  Bueno: "#A0A0A0",
};

const conditionDots: Record<string, number> = {
  Excelente: 3,
  "Muy bueno": 2,
  Bueno: 1,
};

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  const whatsappMsg = `Hola Estudio J! Me interesa la prenda: "${product.name}" (${product.brand}, talle ${product.size}). ¿Está disponible?`;
  const conditionColor = conditionColors[product.condition];
  const conditionDot = conditionDots[product.condition];

  return (
    <div
      className="product-card group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product color block / image placeholder */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "3/4" }}
      >
        {/* Real photo or gradient fallback */}
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: "center top" }}
          />
        ) : (
          <>
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                background: `linear-gradient(145deg, ${product.colors[0]} 0%, ${product.colors[1]} 100%)`,
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#f0eae0",
                letterSpacing: "-0.02em",
                textAlign: "center",
                padding: "1rem",
                lineHeight: 1.1,
              }}
            >
              {product.brand.toUpperCase()}
            </div>
          </>
        )}

        {/* Badges top */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          {product.new && (
            <span
              className="px-2 py-1 text-dark bg-gold text-label"
              style={{ fontSize: "0.58rem", letterSpacing: "0.15em" }}
            >
              NUEVO
            </span>
          )}
          {/* CO2 badge */}
          <span
            className="ml-auto px-2 py-1 bg-forest/80 backdrop-blur-sm text-cream/90 text-label flex items-center gap-1"
            style={{ fontSize: "0.58rem", letterSpacing: "0.1em" }}
          >
            ♻ {product.co2Saved} kg CO₂
          </span>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-dark/70 backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-400 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href={waUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-6 py-3"
            style={{ fontSize: "0.65rem" }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.534 5.842L0 24l6.322-1.518A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.373l-.36-.214-3.727.896.944-3.618-.234-.372A9.784 9.784 0 012.182 12c0-5.422 4.396-9.818 9.818-9.818 5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
            </svg>
            Consultar
          </a>
          <p
            className="text-cream/70 text-center px-6 leading-relaxed"
            style={{ fontSize: "0.72rem", fontFamily: "var(--font-dm-sans)" }}
          >
            "{product.story.substring(0, 70)}..."
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <p
              className="text-cream/50"
              style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {product.brand}
            </p>
            <h3
              className="text-cream font-medium mt-0.5 leading-snug"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              {product.name}
            </h3>
          </div>
          <span
            className="text-cream/40 shrink-0"
            style={{ fontSize: "0.65rem", letterSpacing: "0.05em" }}
          >
            T. {product.size}
          </span>
        </div>

        {/* Condition dots */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background:
                    dot <= conditionDot ? conditionColor : "rgba(240,234,224,0.15)",
                }}
              />
            ))}
          </div>
          <span
            className="text-cream/50"
            style={{ fontSize: "0.62rem", letterSpacing: "0.1em" }}
          >
            {product.condition}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span
            className="text-gold font-bold"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.4rem",
              fontWeight: 700,
            }}
          >
            ${product.price.toLocaleString("es-AR")}
          </span>
          {product.originalPrice && (
            <span
              className="text-cream/30 line-through"
              style={{ fontSize: "0.75rem" }}
            >
              ${product.originalPrice.toLocaleString("es-AR")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
