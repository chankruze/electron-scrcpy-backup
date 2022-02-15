import colors from 'tailwindcss/colors';

module.exports = {
  mode: 'jit',
  content: [
    // Example content paths...
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
