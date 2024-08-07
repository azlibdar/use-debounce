/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter, sans-serif", { fontFeatureSettings: '"cv11"' }],
      },
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  },
};
