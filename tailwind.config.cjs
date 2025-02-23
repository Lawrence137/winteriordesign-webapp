module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'beige-200': '#f5e8d7', // Soft beige
        'gray-300': '#d1d5db',  // Light gray
        'blue-100': '#dbeafe',  // Soft blue
      },
      animation: {
        'fade-gradient': 'fadeGradient 3s ease infinite',
      },
    },
  },
  plugins: [],
};