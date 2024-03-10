/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f0',
          100: '#ffdede',
          200: '#ffc2c2',
          300: '#ff9898',
          400: '#ff5d5d',
          500: '#ff2a2a',
          600: '#e50707',
          700: '#d10404',
          800: '#ac0808',
          900: '#8e0e0e',
          950: '#4e0101',
        },
        secondary: {
          50: '#e9ffe4',
          100: '#ccffc4',
          200: '#9eff90',
          300: '#5fff50',
          400: '#29fe1d',
          500: '#07e500',
          600: '#00b800',
          700: '#008000',
          800: '#076d08',
          900: '#0b5c0d',
          950: '#003404',
        },
      },
      flex: {
        0: '0 0 100%',
      },
    },
    fontFamily: {
      sans: ['DM Sans Variable', 'sans-serif'],
    },
  },
  plugins: [],
};
