const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/_includes/**/*.{njk,svg}',
    './src/**/*.njk',
    './src/*.njk',
    './.eleventy.js',
  ],
  safelist: [],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans'],
      serif: ['WremenaLight', 'serif'],
      display: ['WremenaBold', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'azure': {
        100: '#cce4ff',
        200: '#99c9ff',
        300: '#66adff',
        400: '#3392ff',
        500: '#0077ff',
        600: '#005fcc',
        700: '#004799',
        800: '#003066',
        900: '#001833',
      },
      'cyan': {
        100: '#ccfff6',
        200: '#99ffec',
        300: '#66ffe3',
        400: '#33ffd9',
        500: '#00ffd0',
        600: '#00cca6',
        700: '#00997d',
        800: '#006653',
        900: '#00332a',
      },
      'carnation': {
        100: '#ffe0e0',
        200: '#ffc2c2',
        300: '#ffa3a3',
        400: '#ff8585',
        500: '#ff6666',
        600: '#cc5252',
        700: '#993d3d',
        800: '#662929',
        900: '#331414',
      },
      'violet': {
        100: '#f7e0ff',
        200: '#efc2ff',
        300: '#e6a3ff',
        400: '#de85ff',
        500: '#d666ff',
        600: '#ab52cc',
        700: '#803d99',
        800: '#562966',
        900: '#2b1433',
      },
      'chartreuse': {
        100: '#f2ffcc',
        200: '#e5ff99',
        300: '#d9ff66',
        400: '#ccff33',
        500: '#bfff00',
        600: '#99cc00',
        700: '#739900',
        800: '#4c6600',
        900: '#263300',
      },
      'mango': {
        100: '#ffeacc',
        200: '#ffd599',
        300: '#ffbf66',
        400: '#ffaa33',
        500: '#ff9500',
        600: '#cc7700',
        700: '#995900',
        800: '#663c00',
        900: '#331e00',
      },
      'neutral': {
        50:  '#e9e9e9',
        100: '#d3d2d2',
        200: '#bdbcbc',
        300: '#a7a6a5',
        400: '#92908f',
        500: '#7c7978',
        600: '#666362',
        700: '#504d4b',
        800: '#3a3635',
        900: '#24201e',
      }
    },
  },
  plugins: [],
}
