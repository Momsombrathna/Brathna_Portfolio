/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        reveal: "reveal 2s ease-in-out",
      },
      keyframes: {
        reveal: {
          from: { width: "0ch" },
          to: { width: "10ch" },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

