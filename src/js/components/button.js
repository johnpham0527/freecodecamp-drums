import React, { Component } from "react";
import playAudio from "./play-audio";

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

export default Button;