/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salviaGreen: '#7e9076',
        brokenWhite: '#F8F7F3',
      }
    },
  },
  plugins: [],
}

