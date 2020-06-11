import React, { Component } from "react";
import playAudio from "./audio";
import Button from "./button";

const sortedDrumsArray = (drums) => { //given an object containing a list of drums, return an array of drums sorted by the order property
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

class DrumsApp extends Component {
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
    const { drums } = this.props;
    const keyCodeString = event.keyCode.toString(); //event.keyCode is the key code of the key that is pressed. It is an integer. Convert to string.
    if (drums.hasOwnProperty(keyCodeString)) { //check to see if drums has keyCodeString as a property
      playAudio(drums[keyCodeString].id); //using keyCodeString as the key, attempt to look up the id value in the drumsList array. Pass the id value to the playAudio function.
    }
  }

  render() {
    let drums = sortedDrumsArray(this.props.drums); //create drums array that sorts the drums by their order property

    return (
      <div id="drum-machine">
        <section id="display">
          <p>Click a drum or press a key to play!</p>
        </section>
        {
          drums.map(
            (drum, index) => 
            {
            return <Button letter={drum.id} audioSource={drum.src} key={index}>drum.id</Button>
            }
          )
        }
      </div>
    );
  }
}

export default DrumsApp;