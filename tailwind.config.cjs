/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
      },
      animation: {
        'border-pulse': 'borderPulse 2s ease-in-out infinite', // Custom border pulse animation
      },
      keyframes: {
        borderPulse: {
          '0%, 100%': {
            borderColor: 'rgba(209, 213, 219, 1)', // gray-300
          },
          '50%': {
            borderColor: 'rgba(45, 212, 191, 1)', // teal-400
          },
        },
      },
    },
  },
  plugins: [],
};