const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

module.exports = nextConfig;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        Redbg: "url('@/assets/img/Redbg.jpg')",
        Office: "url('@/assets/img/Office.jpg')",
        CodingDesk: "url('@/assets/img/CodingDesk.jpg')",
        RadicalX: "url('@/assets/img/RadicalX.png')",
        Litespace: "url('@/assets/img/Litespace.png')",
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        offwhite: "#D9D9D9",
        grey: "#1C1C1C",
        Lred: "#970001",
        Blackred: "#6B0100",
      },
      fontFamily: {
        Fatface: ['"Abril Fatface"', 'cursive'], // Custom class for Abril Fatface
        Lato: ['Lato', 'sans-serif'], // Custom class for Lato

      },
      content: {
        Office: "url('@/assets/img/Office.jpg')",
        CodingDesk: "url('@/assets/img/CodingDesk.jpg')",
        gallary: "url('@/assets/img/Gallary.png')",
        RadicalX: "url('@/assets/img/RadicalX.png')",
        IEEE: "url('@/assets/img/IEEE.png')",
        Redbg: "url('@/assets/img/Redbg.jpeg')",
        Litespace: "url('@/assets/img/Litespace.png')",
        Ericsson: "url('@/assets/img/Ericsson-Logo.jpeg')",
        EricssonBuilding:"url('@/assets/img/EricssonBuilding.jpg')",
        LitespaceLogo: "@/assets/img/Litespace-logo.png",
        RadicalAI:"url('@/assets/img/RadicalAI.jpg')",
        RexAI: "url('@/assets/img/RexAI.jpg')",
        RadicalTest1: "url('@/assets/img/RadicalTest1.jpg')",
        RadicalTest2: "url('@/assets/img/RadicalTest2.jpg')",
        LitespaceReport:"url('@/assets/img/LitespaceReport.jpg')",
        LitespaceHome:"url('@/assets/img/LitespaceHome.jpg')",
        Bact:"url('@/assets/img/Bact.jpg')",
        FinalProduct:"url('@/assets/img/FinalProduct.jpg')",
        GPS: "url('@/assets/img/GPS.jpg')",
        Executor:"url('@/assets/img/Executor.png')",
  
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
