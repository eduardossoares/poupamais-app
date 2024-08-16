/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purblePrimary: "#7548ec",
        purpleSecondary: "#d9d9ff",
      },
      backgroundColor: {
        purblePrimary: "#7548ec",
        purpleSecondary: "#9aa7e6",
      }
    },
  },
  plugins: [],
}