/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkRed: '#cf070a',
        lightRed: '#0b5cff',
        dark: '#0f172a',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
