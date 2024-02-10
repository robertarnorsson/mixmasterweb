/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.ttf',
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './404.html',
    './index.html',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      cooper: ["CooperHewitt", "sans-serif"],
    },
    extend: {
      fontSize: {
        '10xl': ['9rem', '1'],
        '11xl': ['10rem', '1'],
        '12xl': ['12rem', '1'],
      },
    },
  },
  plugins: [],
}

