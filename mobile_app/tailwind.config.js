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
          50: '#f1f9e6',
          100: '#dee9c6',
          200: '#cbdaa4',
          300: '#b9cc81',
          400: '#a9bd5f',
          500: '#92a345',
          600: '#757f34',
          700: '#555b25',
          800: '#303614',
          900: '#212a09',
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
