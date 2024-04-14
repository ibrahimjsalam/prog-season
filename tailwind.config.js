/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const variants = ["blue", "purple", "pink", "orange", "dark"];

const customVariantsMode = plugin(({ addVariant, e }) => {
  variants.map((variant) =>
    addVariant(variant, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const element = e(`${variant}${separator}${className}`);
        return `.${variant} .${element}`;
      });
    })
  );
});
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-blue-100": "#adc5e9",
        "c-blue-200": "#6ea8fe",
        "c-blue-300": "#0d6efd",
        "c-blue-400": "#011f4c",

        "c-purple-100": "#c8b6e6",
        "c-purple-200": "#a370f7",
        "c-purple-300": "#6610f2",
        "c-purple-400": "#1e0449",

        "c-pink-300": "#d63384",
        "c-pink-200": "#e685b5",
        "c-pink-100": "#eec2d8",
        "c-pink-400": "#400d26",

        "c-orange-300": "#fd7d4f ",
        "c-orange-200": "#fba3a0",
        "c-orange-100": "#eee",
        "c-orange-400": "#0c4128",

        "c-gray-300": "#1b1b1b",
        "c-gray-200": "#242527",
        "c-gray-100": "#505052",
        "c-gray-400": "#efefef",
      },
    },
  },
  plugins: [customVariantsMode],
};
