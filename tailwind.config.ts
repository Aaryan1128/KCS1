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
          50: "#fff7e1",
          100: "#fdebb3",
          200: "#f8d780",
          300: "#f2c84d",
          400: "#e7b62b",
          500: "#d4af37",
          600: "#b89a2f",
          700: "#9a8124",
          800: "#7f681b",
          900: "#5f4f14",
          950: "#3f320d",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,27,58,0.12)",
        glass: "0 10px 35px rgba(11,27,58,0.10)",
        gold: "0 10px 35px rgba(212,175,55,0.25)",
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

