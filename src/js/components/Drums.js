import React, { Component } from "react";
import playAudio from "./audio";
import Button from "./button";

const findDescription = (drumsArray, id) => {
  for (let i = 0; i < drumsArray.length; i++) {
    if (drumsArray[i].id === id) {
      return drumsArray[i].description;
    }
  }
  return "";
}

class DrumsApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "Click a drum or press a key to play!"
    }

    this.orderedDrumsList = this.sortedDrumsArray();

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown');
  }

  sortedDrumsArray = () => { //given an object containing a list of drums, return an array of drums sorted by the order property
    const { drums } = this.props;
    let sortMap = {};
    let orderedDrumsList = [];
  
    Object.keys(drums).forEach((drumKey) => {
      let sortOrder = drums[drumKey].order;
      sortMap[sortOrder] = drumKey;
    });
  
    Object.keys(sortMap).forEach((orderedKey) => {
      let newKey = sortMap[orderedKey];
      orderedDrumsList.push(drums[newKey]);
    });
  
    return orderedDrumsList;
  }

  handleKeyPress(event) {
    const { drums } = this.props;
    const keyCodeString = event.keyCode.toString(); //event.keyCode is the key code of the key that is pressed. It is an integer. Convert to string.
    if (drums.hasOwnProperty(keyCodeString)) { //check to see if drums has keyCodeString as a property
      playAudio(drums[keyCodeString].id); //using keyCodeString as the key, attempt to look up the id value in the drumsList array. Pass the id value to the playAudio function.
    }
  }

  handleClick(event) {
    event.preventDefault();
    let id = event.target.children[0].id
    playAudio(id); //pass the audio element id to playAudio
    this.setState({
      display: findDescription(this.orderedDrumsList, id) //find the description, given the audio id
    })
  }

  render() {
    let drums = this.sortedDrumsArray(); //create drums array that sorts the drums by their order property

    return (
      <div id="drum-machine">
        <section id="display">
          <p>{this.state.display}</p>
        </section>
        {
          drums.map(
            (drum, index) => 
            {
            return <Button id={drum.id + '-drum'} letter={drum.id} audioSource={drum.src} key={index} clickHandler={this.handleClick}>drum.id</Button>
            }
          )
        }
      </div>
    );
  }
}

export default DrumsApp;