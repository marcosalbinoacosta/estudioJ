"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const words = ["CIRCULA", "CONTINÚA", "TRANSFORMA", "IMPORTA"];
const EXIT_MS = 350;
const HOLD_MS = 2800;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [exitKey, setExitKey] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);

    const interval = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        setExitKey((k) => k + 1);
        return (c + 1) % words.length;
      });
      // Clear the exiting word after its animation finishes
      setTimeout(() => setPrev(null), EXIT_MS + 50);
    }, HOLD_MS);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 overflow-hidden bg-dark">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 15% 80%, rgba(43,74,53,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 85% 20%, rgba(201,163,31,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Rotating circular badge */}
      <div className="absolute top-28 right-6 md:top-32 md:right-16 w-24 h-24 md:w-32 md:h-32">
        <div className="relative w-full h-full">
          <svg
            className="w-full h-full rotate-badge"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text
              fill="#C9A31F"
              fontSize="10.5"
              letterSpacing="2.2"
              fontFamily="DM Sans, system-ui"
              fontWeight="500"
            >
              <textPath href="#circle">
                ♻ MODA CIRCULAR · CATAMARCA ·{" "}
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="Estudio J"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main headline */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Eyebrow */}
          <p
            className="text-label text-gold/80 mb-6 md:mb-8"
            style={{ letterSpacing: "0.25em" }}
          >
            Estudio J · Catamarca
          </p>

          {/* Main title */}
          <h1
            className="text-display text-cream"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3.5rem, 11vw, 10rem)",
              lineHeight: "0.90",
              fontWeight: 700,
            }}
          >
            <span className="block">MODA</span>
            <span className="block text-display-italic" style={{ fontStyle: "italic", fontWeight: 600 }}>
              que{" "}
              {/* Word swap container — relative so both words stack */}
              <span className="relative inline-block" style={{ verticalAlign: "baseline" }}>
                {/* Exiting word */}
                {prev !== null && (
                  <span
                    key={`exit-${exitKey}`}
                    className="word-exit text-gold-gradient absolute left-0 top-0 whitespace-nowrap pointer-events-none"
                    style={{ fontStyle: "italic" }}
                    aria-hidden="true"
                  >
                    {words[prev]}
                  </span>
                )}
                {/* Entering word */}
                <span
                  key={`enter-${current}`}
                  className="word-enter text-gold-gradient inline-block whitespace-nowrap"
                  style={{ fontStyle: "italic" }}
                >
                  {words[current]}
                </span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-8 md:mt-10 text-cream/60 max-w-md"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Prendas con historia. Estilo con conciencia.
            <br />
            Segunda selección curada en Catamarca.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10 md:mt-12">
            <Link href="/tienda" className="btn-primary">
              Ver colección
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
            <Link href="/#como-funciona" className="btn-outline">
              Sumá tu prenda
            </Link>
          </div>

          {/* Bottom info strip */}
          <div className="flex flex-wrap items-center gap-6 mt-16 md:mt-20 pt-8 border-t border-white/8">
            {[
              { icon: "📍", text: "Catamarca, Argentina" },
              { icon: "🚚", text: "Envíos a todo el país" },
              { icon: "🕒", text: "Lun–Vie · 18 a 21 hs" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-sm">{item.icon}</span>
                <span
                  className="text-cream/50"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <span
          className="text-cream/30 rotate-90"
          style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}
        >
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/20 to-transparent" />
      </div>
    </section>
  );
}
