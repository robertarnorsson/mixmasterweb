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
    extend: {
      zIndex: {
        'nav-bar': '998',
        'nav-bar-mobile': '999',
      }
    },
  },
  plugins: [],
}

