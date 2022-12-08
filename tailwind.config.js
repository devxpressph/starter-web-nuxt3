const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*..vue",
    "./components/**/*.{js,vue,ts}",
    "./features/**/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./modules/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./formkit.config.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DA303D",
        bodyBG: "rgb(28, 28, 28)",
        authCard: "rgba(50, 61, 109, 0.5)"
      },
      borderRadius: {
        'default': '30px',
      }
    }
  },
  plugins: [
    require('@formkit/themes/tailwindcss'),
    require('daisyui')
  ],
  daisyui: {
    themes: ["lofi"],
  },
}