"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import {
  products,
  categoryLabels,
  type Category,
  type Condition,
} from "@/lib/products";

const conditions: Condition[] = ["Excelente", "Muy bueno", "Bueno"];
const sizes = ["XS", "S / 36", "M / 38", "L / 42", "XL", "Talle único", "37", "28 / M", "Único"];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") as Category | null;

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    initialCat ? [initialCat] : []
  );
  const [selectedConditions, setSelectedConditions] = useState<Condition[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"nuevo" | "precio-asc" | "precio-desc">("nuevo");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilter = <T,>(
    value: T,
    current: T[],
    setter: (v: T[]) => void
  ) => {
    if (current.includes(value)) {
      setter(current.filter((v) => v !== value));
    } else {
      setter([...current, value]);
    }
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedConditions.length > 0) {
      result = result.filter((p) => selectedConditions.includes(p.condition));
    }
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        selectedSizes.some(
          (s) => p.size.toLowerCase().includes(s.toLowerCase())
        )
      );
    }
    if (sortBy === "nuevo") result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
    if (sortBy === "precio-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "precio-desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [selectedCategories, selectedConditions, selectedSizes, sortBy]);

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedConditions([]);
    setSelectedSizes([]);
  };

  const hasFilters =
    selectedCategories.length > 0 ||
    selectedConditions.length > 0 ||
    selectedSizes.length > 0;

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      {/* Page header */}
      <div className="pt-28 md:pt-36 pb-12 md:pb-16 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p
            className="text-label text-gold/60 mb-4"
            style={{ letterSpacing: "0.25em" }}
          >
            Colección actual
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 700,
                lineHeight: 0.92,
                color: "#F0EAE0",
              }}
            >
              Tienda
            </h1>
            <p className="text-cream/40" style={{ fontSize: "0.82rem" }}>
              {filtered.length} {filtered.length === 1 ? "prenda" : "prendas"} disponibles
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Filter toggle mobile */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden flex items-center gap-2 border border-white/15 px-4 py-2 text-cream/70 hover:border-gold/50 transition-all duration-200"
              style={{ fontSize: "0.7rem", letterSpacing: "0.12em" }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 12h10M10 20h4" />
              </svg>
              FILTROS {hasFilters && `(${selectedCategories.length + selectedConditions.length + selectedSizes.length})`}
            </button>

            {/* Active filter chips */}
            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-cream/40 hover:text-gold transition-colors duration-200 flex items-center gap-1"
                style={{ fontSize: "0.68rem" }}
              >
                × Limpiar filtros
              </button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="bg-dark-mid border border-white/15 text-cream/70 px-4 py-2 focus:outline-none focus:border-gold/50 transition-all duration-200"
            style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
          >
            <option value="nuevo">NUEVO PRIMERO</option>
            <option value="precio-asc">MENOR PRECIO</option>
            <option value="precio-desc">MAYOR PRECIO</option>
          </select>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters — desktop */}
          <div className={`shrink-0 w-48 hidden md:block`}>
            <FilterPanel
              selectedCategories={selectedCategories}
              selectedConditions={selectedConditions}
              selectedSizes={selectedSizes}
              onToggleCategory={(c) => toggleFilter(c, selectedCategories, setSelectedCategories)}
              onToggleCondition={(c) => toggleFilter(c, selectedConditions, setSelectedConditions)}
              onToggleSize={(s) => toggleFilter(s, selectedSizes, setSelectedSizes)}
            />
          </div>

          {/* Mobile filter panel */}
          {filtersOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-dark/98 backdrop-blur-lg overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-8">
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    color: "#F0EAE0",
                  }}
                >
                  Filtros
                </h3>
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="text-cream/50 hover:text-cream text-xl"
                >
                  ×
                </button>
              </div>
              <FilterPanel
                selectedCategories={selectedCategories}
                selectedConditions={selectedConditions}
                selectedSizes={selectedSizes}
                onToggleCategory={(c) => toggleFilter(c, selectedCategories, setSelectedCategories)}
                onToggleCondition={(c) => toggleFilter(c, selectedConditions, setSelectedConditions)}
                onToggleSize={(s) => toggleFilter(s, selectedSizes, setSelectedSizes)}
              />
              <button
                onClick={() => setFiltersOpen(false)}
                className="w-full btn-primary mt-8"
              >
                Ver {filtered.length} prendas
              </button>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2rem",
                    fontStyle: "italic",
                    color: "rgba(240,234,224,0.3)",
                  }}
                >
                  No hay prendas con esos filtros
                </p>
                <button onClick={clearAll} className="btn-outline mt-6">
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function FilterPanel({
  selectedCategories,
  selectedConditions,
  selectedSizes,
  onToggleCategory,
  onToggleCondition,
  onToggleSize,
}: {
  selectedCategories: Category[];
  selectedConditions: Condition[];
  selectedSizes: string[];
  onToggleCategory: (c: Category) => void;
  onToggleCondition: (c: Condition) => void;
  onToggleSize: (s: string) => void;
}) {
  const conditionColors: Record<Condition, string> = {
    Excelente: "#C9A31F",
    "Muy bueno": "#8AAF96",
    Bueno: "#A0A0A0",
  };

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <p
          className="text-cream/30 mb-4"
          style={{ fontSize: "0.62rem", letterSpacing: "0.2em" }}
        >
          CATEGORÍA
        </p>
        <ul className="space-y-2">
          {(Object.entries(categoryLabels) as [Category, string][]).map(
            ([key, label]) => (
              <li key={key}>
                <button
                  onClick={() => onToggleCategory(key)}
                  className={`text-left transition-colors duration-200 ${
                    selectedCategories.includes(key)
                      ? "text-gold"
                      : "text-cream/50 hover:text-cream"
                  }`}
                  style={{ fontSize: "0.82rem" }}
                >
                  {selectedCategories.includes(key) ? "● " : "○ "}
                  {label}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Condition */}
      <div>
        <p
          className="text-cream/30 mb-4"
          style={{ fontSize: "0.62rem", letterSpacing: "0.2em" }}
        >
          CONDICIÓN
        </p>
        <ul className="space-y-3">
          {conditions.map((c) => (
            <li key={c}>
              <button
                onClick={() => onToggleCondition(c)}
                className="flex items-center gap-2 transition-colors duration-200"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: conditionColors[c],
                    opacity: selectedConditions.includes(c) ? 1 : 0.3,
                  }}
                />
                <span
                  className={`transition-colors duration-200 ${
                    selectedConditions.includes(c) ? "text-cream" : "text-cream/50"
                  }`}
                  style={{ fontSize: "0.82rem" }}
                >
                  {c}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TiendaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark" />}>
      <ShopContent />
    </Suspense>
  );
}
