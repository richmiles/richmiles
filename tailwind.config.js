module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077FF',
        secondary: '#39FF14',
        accent: '#800080',
        base: '#1A1A1A',
        navbar: '#2A2A2A',
        textPrimary: '#E0E0E0',
        textSecondary: '#BBBBBB',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        // Add other font families if needed
      },
    },
  },
  plugins: [],
}
