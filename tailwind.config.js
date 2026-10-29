/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030712',
          900: '#060a17',
          850: '#090f23',
          800: '#0d152f',
          700: '#142045',
          600: '#1e2f60',
        },
        cyan: {
          350: '#38e1ff',
          450: '#00d2f7',
        },
        purple: {
          electric: '#9333ea',
          neon: '#a855f7',
          glow: '#c084fc',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4), 0 0 10px -2px rgba(6, 182, 212, 0.2)',
        'neon-purple': '0 0 25px -5px rgba(168, 85, 247, 0.4), 0 0 10px -2px rgba(168, 85, 247, 0.2)',
        'glass-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
