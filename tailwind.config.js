/** @type {import('tailwindcss').Config} */
 export default {
  content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
            "home": "url('/assets/rest.png')"
        }
      },
    },
    plugins: [],
  }