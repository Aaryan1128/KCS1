import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3fb",
          100: "#dbe5f7",
          200: "#b8ccf0",
          300: "#8db0e7",
          400: "#5e88d9",
          500: "#3267c6",
          600: "#254f98",
          700: "#18376f",
          800: "#0f274c",
          950: "#07142a",
        },
        gold: {
          50: "#ecfdf3",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#16a34a",
          600: "#15803d",
          700: "#166534",
          800: "#14532d",
          900: "#0f3d22",
          950: "#052e16",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,27,58,0.12)",
        glass: "0 10px 35px rgba(11,27,58,0.10)",
        gold: "0 10px 35px rgba(22,163,74,0.25)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "6px",
        md: "12px",
      },
      borderRadius: {
        xl: "1rem",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 1.6s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;

