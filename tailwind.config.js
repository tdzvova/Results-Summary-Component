/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './public/index.html',
    './src/**/*.{html,js}',
    './index.html',
    './src/**/*.js',
  ],
  theme: {
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1440px',
      xl: '1440px',
      '2xl': '1440px',
    },
    fontFamliy: {
      'Hanken': ['Hanken Grotesk, sans-serif'],
    },
    extend: {
      colors: {
        LightRed: 'hsl(0, 100%, 67%)',
        OrangeyYellow: 'hsl(39, 100%, 56%)',
        GreenTeal: 'hsl(166, 100%, 37%)',
        CobaltBlue: 'hsl(234, 85%, 45%)',
        LightSlateBlue: 'hsl(252, 100%, 67%)',
        LightRoyalBlue: 'hsl(241, 81%, 54%)',
        VioletBlue: 'hsla(256, 72%, 46%, 1)',
        PersianBlue: 'hsla(241, 72%, 46%, 0)',
        White: 'hsl(0, 0%, 100%)',
        PaleBlue: 'hsl(221, 100%, 96%)',
        LightLavender: 'hsl(241, 100%, 89%)',
        DarkGrayBlue: 'hsl(224, 30%, 27%)',
        
        
        
      },
    },
  },
  plugins: [],
}

