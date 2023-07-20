/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.jsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "400px" },
        md: { min: "768px" },
        xl: { min: "1536px" },
        "2xl": { min: "2000px" },
      },
      fontFamily: {
        raleway: ["Raleway"],
        belanosima: ["Belanosima"],
        sacramento: ["Sacramento"],
      },
      keyframes: {
        "fade-in-y": {
          "0%": { opacity: 0, transform: "translateY(25px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        "bling": {
          "from": { opacity: 0 },
          "to": { opacity: 1 },
        },
      },
      animation: {
        "fade-in-y": "fade-in-y 1s linear",
        "bling": "bling  1s infinite ",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
