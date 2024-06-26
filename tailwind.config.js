/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2453DF',
        secondary: '#0C1F58',
        success: "#0BDA51"
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/forms'),],
};
