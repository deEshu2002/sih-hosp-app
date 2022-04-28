module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: { 
    extend: {
    fontFamily:{
      poppins:["Poppins","sans-serif"],
      mulish:["Mulish", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      raleway:["Raleway","sans-serif"],
    },
    colors:{
      primary_bg:"#edf9fc",
      secondary_bg:"#d1f4fa",
      primary_text:"#005792",
      secondary_text:"#53cde2",
    },
    animation: {
      fadeOut: 'fadeOut 1s ease-in-out',
      fadeIn: 'fadeIn 1s ease-in-out'
    },
    keyframes: theme => ({
      fadeOut: {
        '0%': { marginLeft:0 },
        '30%': { marginLeft: -100 },
        '100%': { marginLeft:0 },
      },
      fadeIn: {
        '0%': { marginLeft:-100 },
        '30%': { marginLeft: 0 },
        '100%': { marginLeft:0 },
      },
    }),
  },
  },
  plugins: [],
}
