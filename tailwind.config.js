module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        jet: '#303030'
      },
      backgroundImage: {
        'daytime-banner': "url('/src/assets/bg-image-daytime.jpg')"
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    }
  },
  plugins: []
};
