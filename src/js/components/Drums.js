import React, { Component } from "react";
import ReactDOM from "react-dom";

const drumsList = {
  '81': {
    id: 'Q',
    src: 'http://john-pham.com/freecodecamp/BingBaa.mp3'
  },
  '87': {
    id: 'W',
    src: 'http://john-pham.com/freecodecamp/Celebration.mp3'
  },
  '69': {
    id: 'E',
    src: 'http://john-pham.com/freecodecamp/Organic_cloudcity.mp3'
  },
  '65': {
    id: 'A',
    src: 'http://john-pham.com/freecodecamp/Organic_miniminuet.mp3'
  },
  '83': {
    id: 'S',
    src: 'http://john-pham.com/freecodecamp/Organic_plucking.mp3'
  },
  '68': {
    id: 'D',
    src: 'http://john-pham.com/freecodecamp/Organic_saasy.mp3'
  },
  '90': {
    id: 'Z',
    src: 'http://john-pham.com/freecodecamp/Organic_xylobone.mp3'
  },
  '88': {
    id: 'X',
    src: 'http://john-pham.com/freecodecamp/Shred1.mp3'
  },
  '67': {
    id: 'C',
    src: 'http://john-pham.com/freecodecamp/Shred2.mp3'
  }
}

const playAudio = letter => {
    let sound = document.getElementById(letter);
    if (sound) { //play audio only if id was found
      sound.play();
    }
}

class Button extends Component {
  constructor({props}) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    playAudio(this.props.letter);
  }

  render() {
    const { letter, audioSource } = this.props; //destructure props
    return (
      <button className='drum-pad' onClick={this.handleClick} type='button'>
        {letter}
        <audio className='clip' id={letter} src={audioSource} type='audio/mpeg'></audio>
      </button>
    )
  }
}

class DrumsApp extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown');
  }

  handleKeyPress(event) {
    const { drums } = this.props;
    const keyCodeString = event.keyCode.toString(); //event.keyCode is the key code of the key that is pressed. It is an integer. Convert to string.
    if (drums.hasOwnProperty(keyCodeString)) { //check to see if drums has keyCodeString as a property
      playAudio(drums[keyCodeString].id); //using keyCodeString as the key, attempt to look up the id value in the drumsList array. Pass the id value to the playAudio function.
    }
  }

  render() {
    const { drums } = this.props;
    return (
      <div>
        {
          Object.keys(drums).map((drumKey, index) =>
            <Button letter={drums[drumKey].id} audioSource={drums[drumKey].src} key={index}>{drums[drumKey].id}</Button>
          )
        }
      </div>
    );
  }
}

export default DrumsApp;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<DrumsApp drums={drumsList}/>, wrapper) : false;