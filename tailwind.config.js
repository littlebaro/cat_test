/** @type {import("tailwindcss").Config} */
module.exports = {
  mode: "jit",
  //purge: [],
  purge: [ "./*.html", "./**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or "media" or "class"
  theme: {  
    colors: {
      mybg: {
        right: "#7696E8",
        left: "#00AEB9",  
      },
      mycolor: {
        black: "#505050",
        green: "#62D492",
        blue: "#0868B4",
        c_7696E8: "#7696E8",     
      }, 
    },
    extend: {
      content: {
        "account": 'url( "../public/img/user-regular.svg" )',
        "passicion": 'url( "../public/img/lock-regular.svg" )',
        //"eyeicion": 'url( "../public/img/eye-slash-regular.svg" )',
      },
      screens: {
        "xs":"320",
        "md": [
          { "min": "768px", "max": "1024px" },
          { "min": "868px" }
        ],
        "lg": "1200px",
        "2xl": "1600px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [  
  ],
}
