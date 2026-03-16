export type Condition = "Excelente" | "Muy bueno" | "Bueno";
export type Category =
  | "tops"
  | "bottoms"
  | "vestidos"
  | "accesorios"
  | "calzado"
  | "abrigos";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  condition: Condition;
  conditionScore: 1 | 2 | 3;
  category: Category;
  size: string;
  colors: [string, string]; // fallback gradient if no image
  image?: string;
  story: string;
  co2Saved: number;
  waterSaved: number;
  tags: string[];
  available: boolean;
  new?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Campera Teddy Bicolor",
    brand: "Tucci",
    price: 28000,
    originalPrice: 85000,
    condition: "Muy bueno",
    conditionScore: 2,
    category: "abrigos",
    size: "S / 36",
    colors: ["#1A3A9E", "#0d1f5c"],
    image: "/images/campera-tucci.png",
    story:
      "Azul klein eléctrico con detalles en cuero negro y bolsillos delanteros. Cropped perfecta. Usada una temporada, estructura y color intactos.",
    co2Saved: 9.5,
    waterSaved: 3200,
    tags: ["invierno", "statement", "tendencia"],
    available: true,
    new: true,
  },
  {
    id: "2",
    name: "Cartera Couture Negra",
    brand: "Versace",
    price: 55000,
    originalPrice: 180000,
    condition: "Excelente",
    conditionScore: 3,
    category: "accesorios",
    size: "Único",
    colors: ["#111111", "#C9A31F"],
    image: "/images/cartera-versace.png",
    story:
      "Herrajes dorados originales impecables, cuero sintético sin una marca. Viene con correa larga. Una pieza de diseño que no perdió ni un gramo de glamour.",
    co2Saved: 5.2,
    waterSaved: 1800,
    tags: ["diseño", "noche", "lujo"],
    available: true,
    new: true,
  },
  {
    id: "3",
    name: "Chaleco Estructurado Rojo",
    brand: "Zara",
    price: 12000,
    originalPrice: 38000,
    condition: "Excelente",
    conditionScore: 3,
    category: "tops",
    size: "S / 36",
    colors: ["#CC1111", "#AA0000"],
    image: "/images/chaleco-zara.png",
    story:
      "Rojo intenso, corte entallado con escote V y botones originales. Se usó para una sesión de fotos — prácticamente sin historia de uso real.",
    co2Saved: 4.8,
    waterSaved: 1600,
    tags: ["primavera", "statement", "oficina"],
    available: true,
  },
  {
    id: "4",
    name: "Conjunto Brillante Negro",
    brand: "Dollstore",
    price: 18000,
    originalPrice: 54000,
    condition: "Muy bueno",
    conditionScore: 2,
    category: "vestidos",
    size: "M / 38",
    colors: ["#1a1a1a", "#3a3a3a"],
    image: "/images/conjunto-dollstore.png",
    story:
      "Tejido brillante con efecto metálico sutil. Corte mini con escote profundo. Usado una vez en una salida de noche — el brillo sigue intacto.",
    co2Saved: 6.1,
    waterSaved: 2100,
    tags: ["noche", "fiesta", "out"],
    available: true,
    new: true,
  },
  {
    id: "5",
    name: "Pantalón Eco Cuero",
    brand: "Prune",
    price: 22000,
    originalPrice: 72000,
    condition: "Muy bueno",
    conditionScore: 2,
    category: "bottoms",
    size: "M / 38",
    colors: ["#1a1a1a", "#2e2e2e"],
    image: "/images/pantalon-prune.png",
    story:
      "Cuero ecológico negro, corte recto con leve acampanado en el ruedo. Prune cuida sus materiales — y en esta pieza se nota mucho.",
    co2Saved: 11.3,
    waterSaved: 3900,
    tags: ["básico", "versátil", "cuero"],
    available: true,
  },
  {
    id: "6",
    name: "Tapado Rojo Doble Botonadura",
    brand: "Sin marca",
    price: 32000,
    originalPrice: 95000,
    condition: "Bueno",
    conditionScore: 1,
    category: "abrigos",
    size: "M / 38",
    colors: ["#CC1111", "#AA0000"],
    image: "/images/tapado-rojo.png",
    story:
      "Rojo vibrante, doble botonadura y corte al muslo. Tiene el carácter de quien lo usó con convicción dos inviernos seguidos.",
    co2Saved: 14.7,
    waterSaved: 5100,
    tags: ["invierno", "statement", "clásico"],
    available: true,
  },
];

export const categoryLabels: Record<Category, string> = {
  tops: "Tops",
  bottoms: "Bottoms",
  vestidos: "Vestidos",
  accesorios: "Accesorios",
  calzado: "Calzado",
  abrigos: "Abrigos",
};

export const conditionDetails: Record<
  Condition,
  { label: string; description: string; color: string }
> = {
  Excelente: {
    label: "Excelente",
    description: "Como nuevo. Sin marcas de uso visibles.",
    color: "#C9A31F",
  },
  "Muy bueno": {
    label: "Muy bueno",
    description: "Uso mínimo. Algún detalle menor que no afecta.",
    color: "#8AAF96",
  },
  Bueno: {
    label: "Bueno",
    description: "Uso normal. Marcas de vida acordes a su historia.",
    color: "#A0A0A0",
  },
};
