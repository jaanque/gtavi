/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gta-pink': '#ff00ff',
        'gta-purple': '#800080',
      },
      fontFamily: {
        'gta': ['"Pricedown"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
