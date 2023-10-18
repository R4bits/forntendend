/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'fondo': 'hsl(0, 0%, 94%)',
        'lavender': 'hsl(252, 69%, 57%)',
        'blueresult': 'hsl(242, 73%, 53%)',
        'tobutton': 'hsl(255, 71%, 46%)',
        'frombutton': 'hsl(246, 85%, 57%)'
      },
      height: {
        'vh80': '85vh'
      },
      width: {
        'vw80': '90vw'
      }
    },
  },
  plugins: [],
}

