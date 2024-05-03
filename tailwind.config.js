module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
    
  theme: {
    extend: {
      colors: {
        customBlue: '#0A66C2',
        customGreen: '#5994CE',
      },
    },
  },
  plugins: [],
};
