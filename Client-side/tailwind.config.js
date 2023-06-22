/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rufina': ['Rufina', 'serif'],
        'vibes': ['Great Vibes', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'forum': ['Forum', 'cursive'],
        'zilla': ['Zilla Slab', 'serif']

      },
      colors: {
        'textColor':'#3e2b26',
        'primary': '#e7b622',
        'secondary': '#88b800',
        'tertiary': '#00afb1'
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  darkMode: 'class',
}

