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
      },
      colors:{
        gradient:'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 8.73%, rgba(196, 196, 196, 0) 54.45%)',
        pcolor:'#888888'

      }
    },
  },
  plugins: [],
}
