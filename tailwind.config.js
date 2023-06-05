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
          light: '#1c61cb',
          DEFAULT: '#1a55b0',
          dark: '#0c7055',
        },
        icon: '#9ca3ae',
        foreground: '#ffffff',
        background: '#f3f6ff',
        icp_blue: '#1a55b0',
        icp_yellow: '#f79308',
        icp_red: '#f03919',
        icp_green: '#00aa81'
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
