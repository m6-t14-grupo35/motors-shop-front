import { colors } from './src/styles/colors'
import { fontFamily } from './src/styles/fonts'


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily,
      screens:{
        'sw370':'370px',
        'sw768':'768px',
        'sw515':'515px',
      },
    },
  },
  plugins: [],
};
