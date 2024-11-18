/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#61682a',
          50: '#f9fae2',
          100: '#eceebf',
          200: '#e0e39b',
          300: '#d3d874',
          400: '#c7cc4e',
          500: '#adb335',
          600: '#878b27',
          700: '#60631a',
          800: '#2b2d0a',
          900: '#131500',
        },
        accent: '#f6ff52',
      },
    },
  },
  plugins: [],
}
