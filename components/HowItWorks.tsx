"use client";

import { useEffect, useRef } from "react";
import { buildWhatsAppUrl } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Traés tu prenda",
    body: "Juntás esa ropa que ya no usás y nos la traés al local (o coordinamos retiro). La revisamos juntas: prendas en buen estado entran al circuito.",
    color: "#C9A31F",
    forSeller: true,
  },
  {
    number: "02",
    title: "La preparamos",
    body: "Limpiamos, catalogamos y le damos a cada prenda el cuidado que merece antes de volver a circular. Le ponemos su historia.",
    color: "#8AAF96",
    forSeller: false,
  },
  {
    number: "03",
    title: "Circula con nueva dueña",
    body: "La prenda encuentra su próxima historia. Vos recibís un porcentaje de la venta — y el planeta agradece una prenda menos en descarte.",
    color: "#C9A31F",
    forSeller: false,
  },
];

export default function HowItWorks() {
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
      id="como-funciona"
      ref={ref}
      className="py-24 md:py-40"
      style={{ background: "#0F0E0C" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p
              className="text-label text-forest-pale/60 mb-4"
              style={{ letterSpacing: "0.25em" }}
            >
              El circuito
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
              Cómo
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 600, color: "#8AAF96" }}>
                funciona
              </span>
            </h2>
          </div>
          <p
            className="text-cream/50 max-w-sm"
            style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
          >
            Sumarte es fácil. Coordinás por WhatsApp y el resto lo hacemos
            nosotras.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,163,31,0.2) 20%, rgba(201,163,31,0.2) 80%, transparent)",
              top: "2.5rem",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="reveal flex flex-col"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border"
                    style={{
                      borderColor: step.color,
                      background: `${step.color}15`,
                    }}
                  >
                    <span
                      className="font-bold"
                      style={{
                        color: step.color,
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:block flex-1 h-px"
                      style={{ background: `${step.color}20` }}
                    />
                  )}
                </div>

                <h3
                  className="text-cream mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-cream/50 flex-1"
                  style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-16 md:mt-24 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href={buildWhatsAppUrl(
              "Hola Estudio J! Quiero sumar mis prendas al circuito. ¿Cómo hago?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Sumá tus prendas al circuito
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
          <p
            className="text-cream/40"
            style={{ fontSize: "0.75rem" }}
          >
            Coordinamos retiro o te esperamos en Catamarca
          </p>
        </div>
      </div>
    </section>
  );
}
