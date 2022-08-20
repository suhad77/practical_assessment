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
      screens:{
        'mdx': {'max': '1023px'},
      },
      fontFamily:{
        Roboto: "'Roboto', sans-serif",
        Noticia: "'Noticia Text', serif"
      },
      lineHeight:{
        heading: '74px'
      },
      colors:{
        gradient:'linear-gradient(180deg, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 50%, rgba(128, 128, 128, 1) 75%, rgba(0, 0, 0, 1) 100%)',
        pcolor:'#888888',
        circle: '#FF5733'
        
      },
      spacing:{
        iheight: '50vh'
      }
    },
  },
  plugins: [],
}
