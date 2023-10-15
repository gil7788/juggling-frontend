/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['public/index.html', 'src/**/*.html', 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand:{
          light:"#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
}

