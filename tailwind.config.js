/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      raleway: ['"Raleway"', 'sains serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkBlueEmailBackground: 'hsl(217, 28%, 15%)',
        darkBlueMainBackground: 'hsl(218, 28%, 13%)',
        darkBlueFooterBackground: 'hsl(216, 53%, 9%)',
        darkBlueTestimonialsBackground: 'hsl(219, 30%, 18%)',
        CyanGradient: 'hsl(176, 68%, 64%)',
        BlueGradient: 'hsl(198, 60%, 50%)',
        LightRedError: 'hsl(0, 100%, 63%)',
      }

    },
  },
  plugins: [],
}
