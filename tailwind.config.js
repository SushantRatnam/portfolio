/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

function removeDeprecated(tailwindColors) {
  const { sky, stone, neutral, gray, slate, ...rest } = tailwindColors;
  return rest;
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...removeDeprecated(colors),
      'prim-light': '#60463b',
      'prim-dark': '#856a5d',
    },
  },
  plugins: [],
};
