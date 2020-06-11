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
    let keyCodeString = event.keyCode.toString(); //event.keyCode is the key code of the key that is pressed. It is an integer. Convert to string.
    playAudio(drumsList[keyCodeString].id); //using keyCodeString as the key, attempt to look up the id value in the drumsList array. Pass the id value to the playAudio function.
  }

  render() {
    return (
      <div>
        {
          Object.entries(drumsList).map((drumKey, index) => {
            let id = drumKey[1].id;
            return <Button letter={id} audioSource={drumKey[1].src} key={index}>{id}</Button>
          })
        }
      </div>
    );
  }
}

export default DrumsApp;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<DrumsApp />, wrapper) : false;