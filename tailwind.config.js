module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(https://serving.photos.photobox.com/746544428de8c191f5df9a96c8e2af4c4745d468270afb78f91bfc5c39ea124686f3ff34.jpg)"
      },
      colors: {
        primary: {
          50: '#EBD9A0',
          100: '#DDC061',
          200: '#D4AF37',
          300: '#C7A22B',
        },
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
        },
      },
      fontFamily: {
        siteName: ['Monoton'],
        body: ['Assistant'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
