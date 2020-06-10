import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  constructor(props) { //destructuring props
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let sound = document.getElementById(this.props.letter)
    sound.play()
  }

  render() {
    return (
      <button class='drum-pad'>
        {this.props.letter}
        <audio class='clip' id={this.props.letter} src={this.props.audioSource} onClick={this.handleClick}></audio>
      </button>
    )
  }
}

/*
const Button = ({letter, audioSource, handleDrumClick}) => { //destructuring props
  return (
    <button class='drum-pad'>
      {letter}
      <audio class='clip' id={letter} src={audioSource} onClick={handleDrumClick}></audio>
    </button>
  )
}
*/

class Drums extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Button letter='Q' audioSource='http://john-pham.com/freecodecamp/BingBaa.mp3'></Button>
      </div>
    );
  }
}

export default Drums;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Drums />, wrapper) : false;