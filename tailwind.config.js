/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F4EE",
          dark: "#EFEAE0",
        },
        ink: {
          DEFAULT: "#1C2541",
          light: "#3A4568",
          faint: "#8A93AE",
        },
        stamp: {
          DEFAULT: "#2E7D6B",
          dark: "#1F5C4E",
          light: "#DCEDE8",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#F4E9C1",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at 1px 1px, rgba(28,37,65,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
