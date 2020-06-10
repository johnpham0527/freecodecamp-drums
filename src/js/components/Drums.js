import React, { Component } from "react";
import ReactDOM from "react-dom";


const playAudio = letter => {
    let sound = document.getElementById(letter)
    sound.play()
}


class Button extends Component {
  constructor(props) {
    super();
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
  constructor() {
    super();

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {

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