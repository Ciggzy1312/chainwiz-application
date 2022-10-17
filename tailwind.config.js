/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xs': { 'min': '375px', 'max': '600px' },
      'xs': { 'min': '600px', 'max': '680px' },
      'sm': { 'min': '680px', 'max': '800px' },
      'md': { 'min': '800px', 'max': '1000px' },
      'lg': { 'min': '1000px', 'max': '1300px' },
    },
    extend: {
      fontFamily: {
        sg: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}