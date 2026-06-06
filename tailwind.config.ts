import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-display)", "Times New Roman", "serif"]
      },
      colors: {
        ink: "#111111",
        paper: "#f7f6f3",
        stone: "#d8d5ce"
      }
    }
  },
  plugins: []
};

export default config;
