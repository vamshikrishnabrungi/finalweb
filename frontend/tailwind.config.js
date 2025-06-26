/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'dwapor': {
          'charcoal': '#0a0a0a',          // Deeper black like the reference
          'espresso': '#1a1510',          // Rich dark brown
          'beige': '#d4c4a0',             // Warm golden beige
          'parchment': '#f0e6d2',         // Creamy white
          'ivory': '#e8dcc0',             // Warm ivory
          'soft-gray': '#b8a888',         // Warm gray
          'warm-brown': '#2d2318',        // Deep warm brown
          'gold': '#c19a6b',              // Golden accent
          'museum': '#0f0e0c',            // Museum black
          'amber': '#d4b896',             // Amber tone
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['5.5rem', { lineHeight: '1.05' }],
        'section': ['3rem', { lineHeight: '1.1' }],
        'display': ['4rem', { lineHeight: '1.1' }],
      },
      backdropBlur: {
        '18': '18px',
      },
      letterSpacing: {
        'wide': '0.05em',
        'tighter': '-0.02em',
        'widest': '0.1em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
};