/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

function removeDeprecated(tailwindColors) {
  const { lightBlue, warmGray, trueGray, coolGray, blueGray, ...rest } = tailwindColors;
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
      'prim-light': '#00A6ED',
      'prim-dark': '#0077B2',
    },
  },
  plugins: [],
};
