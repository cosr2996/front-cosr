/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '400px'},
        'md': {'min': '768px'},
        'xl': {'min': '1536px'},
        '2xl': {'min': '1536px'},
      },
      fontFamily: {
        raleway: ["Raleway"],
        belanosima: ["Belanosima"],
        sacramento: ["Sacramento"],
      },
    },
    plugins: [],
  },
};
