/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: [
        {
          borderColor: "#0d6efd",
          background: "#6ea8fe",
          foreground: "#adc5e9",
          fontColor: "#011f4c",
        },
        {
          borderColor: "#6610f2",
          background: "#a370f7",
          foreground: "#c8b6e6",
          fontColor: "#1e0449",
        },
        {
          borderColor: "#d63384",
          background: "#e685b5",
          foreground: "#eec2d8",
          fontColor: "#400d26",
        },

        {
          borderColor: "#fd7d4f ",
          background: "#fba3a0",
          foreground: "#eee",
          fontColor: "#0c4128",
        },
        {
          borderColor: "#1b1b1b",
          background: "#242527",
          foreground: "#505052",
          fontColor: "#efefef",
        },
      ],
    },
  },
  plugins: [],
};
