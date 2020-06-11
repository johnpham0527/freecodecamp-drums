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
    let keyCodeString = event.keyCode.toString(); //event.keyCode is the key code of the key that is pressed. It is an integer. Convert to string.
    playAudio(drums[keyCodeString]); //pass the key code in string form to the playAudio function
  }

  render() {

    return (
      <div>
        {
          Object.entries(drums).map((drumKey, index) => {
            let id = drumKey[1].id;
            return <Button letter={id} audioSource={drumKey[1].src} key={index}>{id}</Button>
          })
        /*
        <Button letter='Q' audioSource='http://john-pham.com/freecodecamp/BingBaa.mp3'></Button>
        <Button letter='W' audioSource='http://john-pham.com/freecodecamp/Celebration.mp3'></Button>
        */}
      </div>
    );
  }
}

export default Drums;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Drums />, wrapper) : false;