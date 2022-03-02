const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        'main-small': '0 0 3px 0',
        'main-base': '0 0 10px 0',
        'main-big': '0 0 20px 0',
      },
      scale: {
        101: '1.01',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      slate: colors.slate,
      'main-text': '#334155',
      'main-text-dark': '#cbd5e1',
      'main-shadow': '#94a3b8',
      'main-shadow-dark': '#94a3b8',
      'bg-blur': '#f1f5f9cc',
      'bg-blur-dark': '#334155cc',
      'bg-blur-blogtitle': '#0004',
      'bg-main': '#f1f5f9',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
