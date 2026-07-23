/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: {
          primary: '#ff0000',
          dark: '#8b0000',
          glow: '#ff000033',
          muted: '#cc0000',
        },
        dark: {
          bg: '#000000',
          surface: '#0a0a0a',
          card: '#111111',
          border: '#1a1a1a',
          hover: '#1f1f1f',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'text-reveal': 'textReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 20px #ff000044, 0 0 40px #ff000022' },
          '100%': { boxShadow: '0 0 40px #ff000088, 0 0 80px #ff000044' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textReveal: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #ff0000, #8b0000)',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0a, #111111)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        'hero-radial': 'radial-gradient(ellipse at center, rgba(255,0,0,0.15) 0%, transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
