import React, { Component } from "react";
import playAudio from "./play-audio";
import Button from "./button";

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
    const { drums } = this.props;
    return (
      <div>
        {
          Object.keys(drums).map((drumKey, index) =>
            <Button letter={drums[drumKey].id} audioSource={drums[drumKey].src} key={index}>{drums[drumKey].id}</Button>
          )
        }
      </div>
    );
  }
}

export default DrumsApp;