/** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{html,js}"],
    theme: {

      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      extend: {
        backgroundImage: {
            "home": "url('/assets/capa.png')"
        }
      },
    },
    plugins: [],
  }