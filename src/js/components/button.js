import React, { Component } from "react";

class Button extends Component {
    constructor({props}) {
      super(props);
    }
  
    render() {
      const { letter, audioSource, id, clickHandler } = this.props; //destructure props
      return (
        <button className='drum-pad' onClick={clickHandler} id={id} type='button'>
          {letter}
          <audio className='clip' id={letter} src={audioSource} type='audio/mpeg'></audio>
        </button>
      )
    }
}

export default Button;