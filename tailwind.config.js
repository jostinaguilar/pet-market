/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pumpkin: {
          50: '#fff7ed',
          100: '#ffedd4',
          200: '#ffd7a8',
          300: '#ffb970',
          400: '#ff9037',
          500: '#ff7517',
          600: '#f05506',
          700: '#c73e07',
          800: '#9e310e',
          900: '#7f2b0f',
          950: '#451305',
        },
        'blue-chill': {
          50: '#f1fcfb',
          100: '#d0f7f5',
          200: '#a1eeeb',
          300: '#6adede',
          400: '#3cc0c5',
          500: '#1f9399',
          600: '#198088',
          700: '#18666d',
          800: '#185157',
          900: '#184449',
          950: '#08262b',
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
