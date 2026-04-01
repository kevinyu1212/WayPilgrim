/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pilgrim': {
          green: '#2D5A27',
          gold: '#C9A227',
        },
      },
    },
  },
  plugins: [],
}