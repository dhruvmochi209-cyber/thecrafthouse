/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#0a0a0a',
          ivory: '#fffff0',
          beige: '#f5f5dc',
          warmBeige: '#d4c5b9',
          gold: '#c5a059',
          softWhite: '#f8f8ff',
          black: '#121212'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}
