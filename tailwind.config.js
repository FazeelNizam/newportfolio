/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const theme = {
  extend: {
    animation: {
      gradient: 'gradient 8s linear infinite',
      'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      marquee: 'marquee var(--duration) linear infinite',
      'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
    },
    keyframes: {
      gradient: {
        to: {
          backgroundPosition: 'var(--bg-size) 0',
        },
      },

      'border-beam': {
        '100%': {
          'offset-distance': '100%',
        },
      },

      'shine-pulse': {
        '0%': {
          'background-position': '0% 0%',
        },
        '50%': {
          'background-position': '100% 100%',
        },
        to: {
          'background-position': '0% 0%',
        },
      },
      marquee: {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(calc(-100% - var(--gap)))' },
      },
      'marquee-vertical': {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(calc(-100% - var(--gap)))' },
      },
    },
  },
}
export const plugins = []
