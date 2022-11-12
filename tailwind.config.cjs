/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'daytime-lg': "url('./src/assets/daytime-lg.jpg')",
        'daytime-md': "url('./src/assets/daytime-md.jpg')",
        'daytime-sm': "url('./src/assets/daytime-sm.jpg')",
        'nighttime-lg': "url('./src/assets/nighttime-lg.jpg')",
        'nighttime-md': "url('./src/assets/nighttime-md.jpg')",
        'nighttime-sm': "url('./src/assets/nighttime-sm.jpg')"
      }
    }
  },
  plugins: []
};
