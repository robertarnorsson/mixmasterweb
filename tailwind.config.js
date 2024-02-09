/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
      cooper: ["Cooper", "sans-serif"],
    },
    extend: {
      fontSize: {
        '10xl': ['9rem', '1'],
        '11xl': ['10rem', '1'],
        '12xl': ['12rem', '1'],
      },
      zIndex: {
        'nav-bar': '998',
        'nav-bar-mobile': '999',
      },
      animation: {
        blob: "blob 20s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(70px, -150px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-250px, 100px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}

