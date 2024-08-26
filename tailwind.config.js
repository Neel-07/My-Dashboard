module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust this to match your src directory structure
  ],
  theme: {
    extend: {
      screens: {
        'sm-max': { 'max': '423px' }, // Custom max-width breakpoint
      },
    },

  },
  plugins: [],
};

