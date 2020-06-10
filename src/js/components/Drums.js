import React, { Component } from "react";
import ReactDOM from "react-dom";

const Button = ({capitalLetter, audioSource, handleDrumClick}) => { //destructuring props
  return (
    <button class='drum-pad'>
      {capitalLetter}
      <audio class='clip' id={capitalLetter} src={audioSource} onClick={handleDrumClick}></audio>
    </button>
  )
}

class Drums extends Component {
  constructor() {
    super();

    this.state = {
    };

    this.handleDrumClick = this.handleDrumClick.bind(this);
  }

  handleDrumClick() {

  }

  render() {
    return (
      <div>
        <Button capitalLetter='Q' audioSource='http://john-pham.com/freecodecamp/BingBaa.mp3' handleDrumClick={this.handleDrumClick}></Button>
      </div>
    );
  }
}

export default Drums;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Drums />, wrapper) : false;