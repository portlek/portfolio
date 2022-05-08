module.exports = {
  mode: 'jit',
  content: [
    'components/**/*.{vue,ts,css}',
    'composables/**/*.{vue,ts,css}',
    'layouts/**/*.{vue,ts,css}',
    'pages/**/*.{vue,ts,css}',
    'styles/**/*.{vue,ts,css}',
    'app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
      },
    },
    backgroundImage: {
      'bg-top': 'url(\'https://mayberks.me/wp-content/uploads/2020/09/bg.jpg\')',
    },
    screens: {
      'max-sm': { max: '639px' },
      'max-md': { max: '767px' },
      'max-lg': { max: '1023px' },
      'max-xl': { max: '1279px' },
      'max-2xl': { max: '1535px' },
      'sm': '639px',
      'md': '767px',
      'lg': '1023px',
      'xl': '1279px',
      '2xl': '1535px',
    },
  },
  plugins: [],
}
