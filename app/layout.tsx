import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estudio J — Moda Circular | Catamarca",
  description:
    "Prendas con historia, estilo consciente. Moda circular en San Fernando del Valle de Catamarca. Comprá, vendé, circulá.",
  keywords: [
    "moda circular",
    "ropa segunda mano",
    "catamarca",
    "sustentable",
    "estudio j",
  ],
  openGraph: {
    title: "Estudio J — Moda Circular",
    description: "Prendas con historia. Estilo consciente. Catamarca.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
