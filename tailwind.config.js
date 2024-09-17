/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'noto-sans': ['Noto Sans', 'sans-serif']
      },
      backgroundImage: {
        'waves': "url('./assets/waves.png')",
   
      }
    },
  },
  plugins: [],
}

