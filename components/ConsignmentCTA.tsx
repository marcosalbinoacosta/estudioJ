"use client";

import { useEffect, useRef } from "react";
import { buildWhatsAppUrl } from "@/lib/constants";

export default function ConsignmentCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2B4A35 0%, #1A2E22 100%)",
      }}
    >
      {/* Background texture pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #F0EAE0, #F0EAE0 1px, transparent 1px, transparent 8px)",
        }}
      />

      {/* Big recycling symbol bg */}
      <div
        className="absolute -right-20 -top-20 text-cream/5 select-none pointer-events-none"
        style={{
          fontSize: "clamp(16rem, 40vw, 36rem)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        ♻
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <div className="reveal">
            <p
              className="text-label text-cream/50 mb-6"
              style={{ letterSpacing: "0.25em" }}
            >
              Para vendedoras
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                fontWeight: 700,
                lineHeight: 0.92,
                color: "#F0EAE0",
              }}
            >
              ¿TENÉS ROPA
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 600 }}>
                que ya no usás?
              </span>
            </h2>
          </div>

          <div className="reveal mt-8">
            <p
              className="text-cream/70 leading-relaxed max-w-md"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", lineHeight: 1.7 }}
            >
              Sumala al circuito. Nosotras la curamos, la publicamos y te
              avisamos cuando circula. Vos ganás, el planeta también.
            </p>
          </div>

          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppUrl(
                "Hola Estudio J! Tengo ropa que quiero sumar al circuito. ¿Me contás cómo funciona?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-label font-medium transition-all duration-300"
              style={{
                background: "#F0EAE0",
                color: "#0C0B09",
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
              }}
            >
              Sumar mis prendas
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
            </a>
          </div>

          {/* Small print */}
          <div className="reveal mt-12 flex flex-wrap gap-6">
            {[
              "Sin costo de ingreso",
              "Vos fijás el precio",
              "Retiro o entrega en local",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gold" />
                <span
                  className="text-cream/60"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.05em" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
