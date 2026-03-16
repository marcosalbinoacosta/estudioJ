export default function Marquee() {
  const items = [
    "MODA CIRCULAR",
    "CATAMARCA",
    "PRENDAS CON HISTORIA",
    "ESTILO CONSCIENTE",
    "♻",
    "MODA CIRCULAR",
    "CATAMARCA",
    "PRENDAS CON HISTORIA",
    "ESTILO CONSCIENTE",
    "♻",
  ];

  return (
    <div
      className="py-4 overflow-hidden border-y"
      style={{
        background: "#C9A31F",
        borderColor: "#A8881A",
      }}
    >
      <div className="flex">
        <div className="marquee-inner flex items-center gap-8">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="shrink-0 text-dark font-medium"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                fontWeight: 500,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
