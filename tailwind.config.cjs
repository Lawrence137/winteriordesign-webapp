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
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-slower': 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 5px 0 rgba(239, 68, 68, 0.7)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 20px 5px rgba(239, 68, 68, 0.9)',
            transform: 'scale(1.02)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      transitionDelay: {
        '300': '300ms',
        '700': '700ms',
      }
    },
  },
  plugins: [],
};