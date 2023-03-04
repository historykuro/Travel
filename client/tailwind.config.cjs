/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        "bg-main": "rgb(201, 136, 15)",
        redText: "#DF6951",
        purpleText: "#181E4B",
        lightPurpleText: "#5E6282",
        yellowColor: "#F1A501",
        textWhite: "#fff",
        buttonColor: "#DF6951",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      boxShadow: {
        x: "-5px 5px 19px -5px rgba(0,0,0,0.37)",
        y: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
        scroll: "-5px 5px 19px -5px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        display: "Playfair Display, serif",
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin"),
  ],
};
