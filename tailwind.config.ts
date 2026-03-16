import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0C0B09",
          mid: "#161512",
          light: "#2C2B26",
        },
        gold: {
          DEFAULT: "#C9A31F",
          light: "#E2BB2A",
          dark: "#A8881A",
          pale: "#F0DFA0",
        },
        forest: {
          DEFAULT: "#2B4A35",
          light: "#3D6B4C",
          pale: "#8AAF96",
        },
        cream: {
          DEFAULT: "#F0EAE0",
          dark: "#DDD6C8",
          light: "#FAF7F2",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "count-up": "countUp 2s ease forwards",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,163,31,0)" },
          "50%": { boxShadow: "0 0 0 8px rgba(201,163,31,0.15)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
