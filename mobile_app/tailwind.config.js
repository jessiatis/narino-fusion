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
          800: '#3a3c0d',
          900: '#131500',
        },
        secondary: {
          DEFAULT: '#c22706',
          50: '#ffede1',
          100: '#ffccb3',
          200: '#fca882',
          300: '#fa8052',
          400: '#f75521',
          500: '#de3509',
          600: '#ad2305',
          700: '#7d2003',
          800: '#4c1600',
          900: '#1f0800',
        },
      },
    },
  },
  plugins: [],
}
