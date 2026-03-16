"use client";

import { useEffect, useRef, useState } from "react";

interface CounterItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const counters: CounterItem[] = [
  {
    value: 247,
    suffix: "",
    label: "Prendas circuladas",
    sublabel: "Historias que continúan",
  },
  {
    value: 4.8,
    suffix: " t",
    label: "CO₂ ahorrado",
    sublabel: "Toneladas de emisiones evitadas",
  },
  {
    value: 6,
    suffix: " años",
    label: "De moda circular",
    sublabel: "Construyendo comunidad consciente",
  },
  {
    value: 92,
    suffix: "%",
    label: "Satisfacción",
    sublabel: "De quienes compraron y volvieron",
  },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, target);
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, duration, start]);

  return count;
}

function Counter({ item, started }: { item: CounterItem; started: boolean }) {
  const count = useCountUp(item.value, 2200, started);
  const isDecimal = item.value % 1 !== 0;

  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left py-8 md:py-0">
      <span
        className="text-gold font-bold leading-none"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: 700,
        }}
      >
        {isDecimal ? count.toFixed(1) : count}
        <span className="text-gold/60" style={{ fontSize: "0.55em" }}>
          {item.suffix}
        </span>
      </span>
      <span
        className="mt-2 text-cream font-medium"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "0.85rem",
          letterSpacing: "0.05em",
        }}
      >
        {item.label}
      </span>
      <span
        className="mt-1 text-cream/40"
        style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.72rem" }}
      >
        {item.sublabel}
      </span>
    </div>
  );
}

export default function ImpactCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#0F0E0C" }}
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,163,31,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center mb-12">
          <p
            className="text-label text-gold/60 mb-4"
            style={{ letterSpacing: "0.25em" }}
          >
            Nuestro impacto
          </p>
          <h2
            className="text-cream text-center"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 600,
              fontStyle: "italic",
            }}
          >
            Cada compra importa
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">
          {counters.map((item) => (
            <Counter key={item.label} item={item} started={started} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,163,31,0.4), transparent)",
        }}
      />
    </section>
  );
}
