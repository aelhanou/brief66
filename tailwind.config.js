module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }
      'md': '668px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

    },
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url(/images/background/couv-2.jpg)",
        // 'footer-texture': "url(/../images/background/BackG1.jpg)",
      },
      colors: {
        'regal-blue': 'rgb(15 23 42/.75)',
        'border-nav' : 'rgb(248 250 252/.06)',
        'white' : '#fff',
      },
      fontFamily: {
        'sans': 'Glamatrix',
        'serif': 'CormorantGaramond',
        'display': 'Bellandha',
        'anas': 'Arial',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}