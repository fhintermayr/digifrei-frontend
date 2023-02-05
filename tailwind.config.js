/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#188164',
          light: '#139a77'
        },
        icon: '#9ca3ae',
        foreground: '#ffffff',
        background: '#f3f6ff'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme["fontFamily"].sans],
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
