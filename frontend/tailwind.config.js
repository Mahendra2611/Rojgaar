/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryText:"#33333",
        primaryHeading:"#111111"
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      rotate: {
        'x-30': 'rotateX(30deg)',
        'z-45': 'rotateZ(45deg)',
      },
      clipPath: {
        polygon: 'polygon(0 75%, 100% 75%, 100% 100%, 0 100%)',
      },
      transformOrigin: {
        'bottom-9': '50% 2.25em',
      },
      keyframes: {
        shadow724: {
          '0%, 50%, 100%': {
            boxShadow: '0.1em 0.1em 0 0.1em black, 0.3em 0 0.3em rgba(0, 0, 0, 0.3)',
          },
          '25%': {
            boxShadow: '0.1em 0.1em 0 0.1em black, 0.8em 0 0.8em rgba(0, 0, 0, 0.5)',
          },
        },
        pushInOut1724: {
          '0%, 50%, 100%': {
            transform: 'translate(0, 0)',
          },
          '25%': {
            transform: 'translate(-71%, -71%)',
          },
        },
        pushInOut2724: {
          '0%, 50%, 100%': {
            clipPath: 'polygon(0 75%, 100% 75%, 100% 100%, 0 100%)',
          },
          '25%': {
            clipPath: 'polygon(0 25%, 100% 25%, 100% 100%, 0 100%)',
          },
        },
      },
      animation: {
        shadow724: 'shadow724 2s infinite',
        pushInOut1724: 'pushInOut1724 2s infinite',
        pushInOut2724: 'pushInOut2724 2s infinite',
      },
    },
  },
  plugins: [],
}
  