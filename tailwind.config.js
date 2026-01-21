/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette rustica montana
        wood: {
          50: '#fdf8f3',
          100: '#f5e6d3',
          200: '#e8cdb0',
          300: '#d4a574',
          400: '#c4874a',
          500: '#a66b2e',
          600: '#8b5a2b',
          700: '#6b4423',
          800: '#4a2f1a',
          900: '#2d1b0e',
        },
        forest: {
          50: '#f0f5f0',
          100: '#d4e5d4',
          200: '#a8c9a8',
          300: '#7dad7d',
          400: '#5a915a',
          500: '#3d6b3d',
          600: '#2d4f2d',
          700: '#1f3a1f',
          800: '#142614',
          900: '#0a130a',
        },
        snow: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e8e8e8',
          400: '#d4d4d4',
          500: '#a3a3a3',
        },
        mountain: {
          50: '#f8fafc',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
        },
        warm: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'wood-texture': "url('/src/assets/textures/wood.jpg')",
      }
    },
  },
  plugins: [],
}
