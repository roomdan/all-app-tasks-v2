module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent:'transparent',
      gray: '#AAAAAA',
      blue: '#1C0C5B',
      lblue:'#D3E0EA',
      purple: '#3D2C8D',
      ligthPurple:'#916BBF',
      pink:'#C996CC',
      black: 'black',
      white:'white',
      red:'red',
      yellow:'#fabc41',
      green:'#B1E693',
      dark:'#171717'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
