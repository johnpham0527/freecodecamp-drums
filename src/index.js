import "./css/style.css";
import React from "react";
import ReactDOM from "react-dom";
import DrumsApp from "./js/components/drums";

const drumsList = {
    '81': {
      id: 'Q',
      src: 'http://john-pham.com/freecodecamp/BingBaa.mp3',
      order: 1
    },
    '87': {
      id: 'W',
      src: 'http://john-pham.com/freecodecamp/Celebration.mp3',
      order: 2
    },
    '69': {
      id: 'E',
      src: 'http://john-pham.com/freecodecamp/Organic_cloudcity.mp3',
      order: 3
    },
    '65': {
      id: 'A',
      src: 'http://john-pham.com/freecodecamp/Organic_miniminuet.mp3',
      order: 4
    },
    '83': {
      id: 'S',
      src: 'http://john-pham.com/freecodecamp/Organic_plucking.mp3',
      order: 5
    },
    '68': {
      id: 'D',
      src: 'http://john-pham.com/freecodecamp/Organic_saasy.mp3',
      order: 6
    },
    '90': {
      id: 'Z',
      src: 'http://john-pham.com/freecodecamp/Organic_xylobone.mp3',
      order: 7
    },
    '88': {
      id: 'X',
      src: 'http://john-pham.com/freecodecamp/Shred1.mp3',
      order: 8
    },
    '67': {
      id: 'C',
      src: 'http://john-pham.com/freecodecamp/Shred2.mp3',
      order: 9
    }
  }

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<DrumsApp drums={drumsList}/>, wrapper) : false;