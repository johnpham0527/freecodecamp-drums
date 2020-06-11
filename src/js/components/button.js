import React, { Component } from "react";
import playAudio from "./audio";

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
        <button className='drum-pad' onClick={this.handleClick} id={letter} type='button'>
          {letter}
          <audio className='clip' id={letter} src={audioSource} type='audio/mpeg'></audio>
        </button>
      )
    }
}

export default Button;