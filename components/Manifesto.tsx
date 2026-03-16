"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Circulamos prendas",
    body: "Creemos en la moda circular: prendas que vuelven a usarse, historias que continúan y menos impacto ambiental.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: "Reutilizamos bolsas",
    body: "Las bolsas que aún pueden usarse vuelven a circular. Reutilizar también es una forma de cuidar.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Transformamos residuos",
    body: "Nuestra basura plástica diaria se transforma. Separar, rellenar y reducir residuos también suma.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Etiquetas de papel kraft",
    body: "Incluso en los detalles elegimos la simpleza y coherencia: etiquetas de papel kraft, menos residuos, más conciencia.",
  },
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden"
      style={{ background: "#0A0908" }}
    >
      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-white/[0.025] font-bold uppercase"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(8rem, 20vw, 22rem)",
            fontWeight: 700,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          CIRCULAR
        </span>
      </div>

      {/* Forest green accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5"
        style={{ background: "linear-gradient(180deg, transparent, #2B4A35, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Quote */}
        <div className="reveal max-w-3xl mb-20 md:mb-28">
          <div className="divider-gold mb-8" />
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: 1.2,
              color: "#F0EAE0",
            }}
          >
            "Creemos que cada prenda tiene más de una historia que contar."
          </blockquote>
          <p
            className="mt-6 text-gold/80"
            style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}
          >
            — ESTUDIO J, CATAMARCA
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="reveal flex gap-5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border"
                style={{
                  borderColor: "rgba(201,163,31,0.3)",
                  color: "#C9A31F",
                }}
              >
                {value.icon}
              </div>
              <div>
                <h3
                  className="text-cream font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-cream/50 leading-relaxed"
                  style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
                >
                  {value.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="reveal mt-20 md:mt-28 pt-10 border-t border-white/8">
          <p
            className="text-cream/30 text-center"
            style={{ fontSize: "0.72rem", letterSpacing: "0.25em" }}
          >
            SOLO USAMOS EL 20% DE NUESTRA ROPA · EL OTRO 80% ESPERA UNA OCASIÓN QUE NUNCA LLEGA
          </p>
          <p
            className="text-gold/50 text-center mt-2"
            style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
          >
            Fuente: New York Journal of Fashion Studies
          </p>
        </div>
      </div>
    </section>
  );
}
