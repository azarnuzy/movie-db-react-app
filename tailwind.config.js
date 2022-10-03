/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#16a3b5',
        secondary: '#d93649',
        dark: '#0f172a',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
