/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'cblack': ['Cygre-Black'],
      'cbold': ['Cygre-Bold'],
      'cextrabold': ['Cygre-ExtraBold'],
      'clight': ['Cygre-Light'],
      'cmedium': ['Cygre-Medium'],
      'csemibold': ['Cygre-SemiBold'],
      'cthin': ['Cygre-Thin'],
      'cbook': ['Cygre-Book'],
      'cregular': ['Cygre-Regular'],
    },
    extend: {
      backgroundImage: {
        'guitar': "url('../public/img/IWithGuitar.jpg')",
      }
    },
  },
  plugins: [],
}

