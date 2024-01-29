/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //place the nickname of the colour you want and than the actual colore code.
      colors:{
//ex: "gray 10": "#982739",

       "DPurple": "#352F44",
       "MPurple": "#5C5470",
       "LPurple": "#B9B4C7",
       "Paige": "#FAF0E6",
       "Black": "#000000",
       "Gold": "#D4AF37",
       "Blood":"#6D1919",
       "PinkNude":"#7F423D",
       "Gray":"#414141",
       "DPaige":"#D0C9B5",
       "LPink":"#EADAD0",
       "Stone":"#1F1E1C",
       "Maroon":"#800000",
       "Brick":"#B22222",
       "Ferrari":"#FF2800",
       "LRed":"#ff4747",
      },
      
backgroundImage: (theme) => ({
  //might have to change
  "gradient-yellowred": "linear-gradient(90deg, #982739 0%)"
}),
fontFamily:{
  lato: ["lato", "sans-serif"]
},
content:{
  //evolvetext:"url('./assests/evolveText/png')"
  titleName: "url(@/assets/img/titleName.png)",
  PlaceHolder: "url(@/assets/img/PNGimg.png)",
  MainTitle: "url(@/assets/img/MainTitle.png)",
  MainTT: "url(@/assets/img/MainTT.png)",
  SmartWe: "url(@/assets/img/SmartWe.png)",
  FunWe: "url(@/assets/img/FunWe.png)",
  WResume:"url(@/assets/img/Waleed Resume.pdf",
  Art_1: "url(@/assets/img/Art_1.png)",
  Art_2: "url(@/assets/img/Art_2.png)",
  Art_3: "url(@/assets/img/Art_3.png)",
  Frame: "url(@/assets/img/Frame.png)",
  gallary: "url(@/assets/img/Gallary.png)",
  RadicalX: "url(@/assets/img/RadicalX.png)"
},

},
screens:{
  xs:"480px",
  sm:"768px",
  md:"1060px"
    },

  },
  plugins: [],
}

