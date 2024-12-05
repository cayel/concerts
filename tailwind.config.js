/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        klein: {
          DEFAULT: '#002FA7', // Yves Klein Blue
          light: '#003CD9',
          dark: '#002380'
        }
      }
    },
  },
  plugins: [],
};