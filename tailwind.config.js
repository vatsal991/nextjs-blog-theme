/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#171717',
      secondary: '#444444',
      redmain: '#DA0037',
      graymain: '#EDEDED',
      'body-color': '#171717',
    },
  },

  plugins: [require('flowbite/plugin')],
};
