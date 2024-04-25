/** @type {import('tailwindcss').Config} */
import { gray, white } from "@material-tailwind/html/theme/base/colors";
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basegreen: '#3BB77E',
        fontgreen: '#253D4E',
        herogreen: '#C5EAD9',
        peachcolor: '#FEEFEA',
        vegcolor: '#FFF3FF',
        strawgreen: '#F2FCE4',
        applecolor: '#FEEFEA',
        orangecolor: '#ECFFEC',
        potatocolor: '#FFFCEB',
        carrotgreen: '#DEF9EC',
        offercolor1: '#FFF5E1',
        offercolor2: '#D2EFE1',
        buttoncolor: '#FFD480',
        black: '#1A1A1A',
        Ash: '#F2F2F2',
        gray: '#ADADAD',
        dotAsh: '#D4D4D4',
      }
    },

    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
    },
  },
  plugins: [],
}
);

