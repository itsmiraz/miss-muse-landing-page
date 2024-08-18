/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        viga: ["Viga", "sans-serif"],
      },
    },
  },
  plugins: [],
};
