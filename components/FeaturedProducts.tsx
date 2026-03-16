"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = products.slice(0, 6);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p
              className="text-label text-gold/60 mb-4"
              style={{ letterSpacing: "0.25em" }}
            >
              Colección actual
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 0.92,
                color: "#F0EAE0",
              }}
            >
              Prendas
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 600, color: "#C9A31F" }}>
                disponibles
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p
              className="text-cream/50 max-w-xs text-right"
              style={{ fontSize: "0.82rem", lineHeight: 1.6 }}
            >
              Cada pieza es revisada, fotografiada y catalogada con cuidado
              antes de circular.
            </p>
            <Link href="/tienda" className="btn-outline">
              Ver todo
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Grid — asymmetric layout */}
        <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className={`${i === 0 ? "md:col-span-1 md:row-span-1" : ""}`}
              style={{
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 flex justify-center">
          <Link href="/tienda" className="btn-primary">
            Ver colección completa
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
