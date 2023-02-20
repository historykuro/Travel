/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "rgb(201, 136, 15)",
      },
      boxShadow: {
        x: "-5px 5px 19px -5px rgba(0,0,0,0.37)",
        y: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
        scroll: "-5px 5px 19px -5px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
