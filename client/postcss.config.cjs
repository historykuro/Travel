module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
