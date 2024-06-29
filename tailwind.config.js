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
        Redbg: "url('@/assets/img/Redbg.jpeg')",
        Office: "url('@/assets/img/Office.jpg')",
        CodingDesk: "url('@/assets/img/CodingDesk.jpg')",
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        offwhite: "#D9D9D9",
        grey: "#808080",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      content: {
        Office: "url('@/assets/img/Office.jpg')",
        CodingDesk: "url('@/assets/img/CodingDesk.jpg')",
        gallary: "url('@/assets/img/Gallary.png')",
        RadicalX: "url('@/assets/img/RadicalX.png')",
        IEEE: "url('@/assets/img/IEEE.png')",
        Redbg: "url('@/assets/img/Redbg.jpeg')",
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
