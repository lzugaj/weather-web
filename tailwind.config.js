module.exports = {
  content: [
    "./src/**/*.{tsx,ts,jsx,html,js}",
    "./node_modules/@tiller/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@tiller/theme/colors",
  ],
  safelist: [
    {
      pattern: /(border|bg|text|ring)-([a-z]+)-(\d0{1,2})/,
      variants: ["hover", "focus", "checked"],
    },
  ],
  plugins: [],
};
