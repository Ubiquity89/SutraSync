/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
  animation: {
    "spin-slow": "spin 30s linear infinite",
  },
      colors: {
        primary: {
          500: "#106bcb",
          600: "#0d5aa8",
          700: "#22446b",
          900: "#1a3552",
        },
      },
    },
  },
  plugins: [],
};