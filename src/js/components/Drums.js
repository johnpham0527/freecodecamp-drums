import React, { Component } from "react";
import ReactDOM from "react-dom";

const drums = {
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
    let sound = document.getElementById(letter)
    sound.play()
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
      <button class='drum-pad' onClick={this.handleClick} type='button'>
        {letter}
        <audio class='clip' id={letter} src={audioSource} type='audio/mpeg'></audio>
      </button>
    )
  }
}

class Drums extends Component {
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
    switch (event.keyCode) {
      case 81:
        playAudio('Q');
        break;
      case 87:
        playAudio('W');
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Button letter='Q' audioSource='http://john-pham.com/freecodecamp/BingBaa.mp3'></Button>
        <Button letter='W' audioSource='http://john-pham.com/freecodecamp/Celebration.mp3'></Button>
      </div>
    );
  }
}

export default Drums;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Drums />, wrapper) : false;