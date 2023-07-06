module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: true,
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            transform: 'scale(0.7)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0.7)',
            opacity: '0',
          },
        },
        blurIn: {
          '0%': {
            backdropFilter: 'blur(0)',
          },
          '100%': {
            backdropFilter: 'blur(5px)',
          },
        },
        blurOut: {
          '0%': {
            backdropFilter: 'blur(5px)',
          },
          '100%': {
            backdropFilter: 'blur(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn .4s ease-in-out',
        fadeOut: 'fadeOut .2s ease-in-out',
        blurIn: 'blurIn .4s ease-in-out',
        blurOut: 'blurOut .2s ease-in-out',
      },
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#cdc1fe',
          400: '#bbaefe',
          500: '#ab95fd',
          600: '#9a82f9',
          700: '#896ff4',
          800: '#775cf0',
          900: '#431fbf',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
