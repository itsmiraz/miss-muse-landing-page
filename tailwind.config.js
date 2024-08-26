/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shiftColors: {
          '0%, 100%': { color: '#F71B9A' },
          '33%': { color: '#3086F2' },
          '66%': { color: '#ffffff' },
        },
      },
      animation: {
        'color-shift': 'shiftColors 6s ease-in-out infinite',
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        viga: ["Viga", "sans-serif"],
      },
    },
  },
  plugins: [],
};
