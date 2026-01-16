import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        tinos: ["var(--font-tinos)", "serif"],
      },
      colors: {
        background: "#000000",
        surface: "#0a0a0a",
        surfaceElevated: "#151515",
        border: "#1a1a1a",
        borderHover: "#2a2a2a",
        text: {
          primary: "#ffffff",
          secondary: "#a0a0a0",
          tertiary: "#666666",
        },
        accent: "#ffffff",
      },
    },
  },
  plugins: [],
}
export default config

