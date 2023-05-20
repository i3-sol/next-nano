module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        odibee: ["Odibee Sans", "cursive"],
        Urbansit: ['Urbansit', 'sans-serif']
      },

      boxShadow: {
        'card': '0px 0px 10px 1px rgba(173, 26, 175, 0.25)'
      },

      backgroundImage: {
        "card": "url('/Card.png')"
      }
    },
    colors: {
        "main-bg": "#000C49",
        "bg-secondary": "#130B22",
        "bg-purple": '#0A0219',
        "main-blue": "#1845F3",
        "card-bg": '#010518'
    },
  },
  plugins: [],
}