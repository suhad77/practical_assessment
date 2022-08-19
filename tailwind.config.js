/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    // screens:{
    //   sml:'480px',
    //   mid:'768px',
    //   leg: '976px',
    //   xlg: '1440px'
    // },
    extend: {
      fontFamily:{
        Roboto: "'Roboto', sans-serif",
        Noticia: "'Noticia Text', serif"
      },
      lineHeight:{
        heading: '74px'
      }
    },
  },
  plugins: [],
}
