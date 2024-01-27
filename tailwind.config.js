module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src.**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B7FF', // Your vibrant primary blue
        secondary: '#7FBFFF', // A softer, complementary
        accent: '#800080', // Your current accent color (purple)
        base: '#1A1A1A', // Dark base color for backgrounds
        navbar: '#2A2A2A', // Slightly lighter shade for the navbar
        containerBackground: "#3D3D3D", // Container background
        textPrimary: '#E0E0E0', // Light grey for primary text
        textSecondary: '#BBBBBB', // Lighter grey for secondary text
        darkblue: '#1A2A3A'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // This will be used for body text
        headings: ['Orbitron', 'sans-serif'], // This will be used for headings and navbar
      }
    },
  },
  plugins: [ 
    require('tailwindcss'),
    require('autoprefixer'),    
   ],
}
