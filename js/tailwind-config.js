/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js", // Scans JS files for dynamic classes
  ],
  theme: {
    extend: {
      colors: {
        base: '#FAFAF3',
        main: '#292C30',
        accent: {
          red: '#DE4C4C',
          yellow: '#E1C941',
          pink: '#EC848C',
          gray: '#979AA0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '10px': '10px',
        '12px': '12px',
        '16px': '16px',
        '18px': '18px',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      boxShadow: {
        '2d': '2px 2px 0 #292C30',
        '2d-hover': '4px 4px 0 #292C30',
        'header': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'gate': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '14px': '14px',
        '20px': '20px',
      },
    },
  },
  plugins: [],
}
