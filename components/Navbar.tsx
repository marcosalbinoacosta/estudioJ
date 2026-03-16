"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { buildWhatsAppUrl } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden transition-all duration-300 group-hover:ring-1 group-hover:ring-gold/50">
              <Image
                src="/logo.jpeg"
                alt="Estudio J"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="text-cream text-sm font-medium tracking-widest uppercase"
                style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.65rem", letterSpacing: "0.2em" }}
              >
                Estudio J
              </span>
            </div>
          </Link>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { href: "/tienda", label: "Tienda" },
              { href: "/#como-funciona", label: "Cómo funciona" },
              { href: "/#manifesto", label: "Nosotras" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-label text-cream/60 hover:text-cream transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-label text-dark bg-gold hover:bg-gold-light transition-all duration-300"
              style={{ fontSize: "0.65rem" }}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.534 5.842L0 24l6.322-1.518A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.373l-.36-.214-3.727.896.944-3.618-.234-.372A9.784 9.784 0 012.182 12c0-5.422 4.396-9.818 9.818-9.818 5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
              </svg>
              Consultar
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-dark/98 backdrop-blur-lg flex flex-col justify-center items-center gap-10 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {[
          { href: "/tienda", label: "Tienda" },
          { href: "/#como-funciona", label: "Cómo funciona" },
          { href: "/#manifesto", label: "Nosotras" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-display text-cream text-4xl hover:text-gold transition-colors duration-200"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </>
  );
}
