import React, { Component } from "react";
import ReactDOM from "react-dom";


const playAudio = letter => {
    let sound = document.getElementById(letter)
    sound.play()
}


class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    playAudio(this.props.letter);
  }

  render() {
    return (
      <button class='drum-pad' onClick={this.handleClick} type='button'>
        {this.props.letter}
        <audio class='clip' id={this.props.letter} src={this.props.audioSource} type='audio/mpeg'></audio>
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