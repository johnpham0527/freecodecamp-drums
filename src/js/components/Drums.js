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
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Drums;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Drums />, wrapper) : false;