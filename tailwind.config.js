/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dit/*.{html,js}",
            "./dit/contato/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'braba' : ['Rock Salt']
      },
      colors: {
        'cor-fundo' : '#ffffff'
      },
      backgroundImage: {
        'banner': "url('/imagens/banner.png')",
        'foto1': "url('/imagens/Capturar.PNG')",
        'contato': "url('/imagens/background-contato.PNG')"
      },
      height: {
        '150': '620px',
      },
      width: {
        '150': '500px'
      }
    },
  },
  plugins: [],
}

