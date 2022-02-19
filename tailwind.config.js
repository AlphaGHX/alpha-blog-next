const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      'main-text': '#334155',
      'main-text-dark': '#cbd5e1',
      'bg-blur': '#f1f5f9cc',
      'bg-blur-dark': '#334155cc',
      'bg-blur-blogtitle': '#334155aa',
      'bg-main': '#f1f5f9',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
