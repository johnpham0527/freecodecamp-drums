import React, { Component } from "react";
import ReactDOM from "react-dom";

const { Provider, connect } = ReactRedux;
const { applyMiddleware, createStore, combineReducers, bindActionCreators} = Redux;
const thunk = ReduxThunk.default;

//Drums Code
const SILENCE = 'SILENCE';
const PLAY = 'PLAY';

const drumsDefaultState = {
  type: SILENCE,
  drum: '',
  letter: '',
  text: 'Select a drum to play',
}

const playDrum = (drum) => {
  return {
    type: PLAY,
    drum: drum,
  }
}

const playAudio = (drum) => {
  let soundID = mapDrumToLetter(drum);
  let sound = document.getElementById(soundID);
  sound.play();
}

const mapDrumToLetter = (drum) => {
  switch (drum) {
    case 'BingBaa':
      return 'Q';
    case 'Celebration':
      return 'W';
    case 'Organic_cloudcity':
      return 'E';
    case 'Organic_miniminuet':
      return 'A';
    case 'Organic_plucking':
      return 'S';
    case 'Organic_saasy':
      return 'D';
    case 'Organic_xylobone':
      return 'Z';
    case 'Shred1':
      return 'X';
    case 'Shred2':
      return 'C'
    default: 
      return 'Letter not found.'
  }
}

const mapLetterToDrumDescription = (letter) => {
  switch (letter) {
    case 'Q':
      return 'Bing Baa';
    case 'W':
      return 'Celebration';
    case 'E':
      return 'Organic Cloud City';
    case 'A':
      return 'Organic Mini Minuet';
    case 'S':
      return 'Organic Plucking';
    case 'D':
      return 'Organic Saasy';
    case 'Z':
      return 'Organic Xylobone';
    case 'X':
      return 'Shred 1';
    case 'C':
      return 'Shred 2';
    default:
      return 'Audio not found.';
  }
}

const drumReducer = (state = drumsDefaultState, action) => {
  let newState = Object.assign({},state);
  switch (action.type) {
    case PLAY:
      playAudio(action.drum);
      newState.text = mapLetterToDrumDescription(mapDrumToLetter(action.drum));
      return newState;
    default: 
      return state;
  }
}



const rootReducer = Redux.combineReducers({
  drums: drumReducer,
}); 

const store = Redux.createStore(rootReducer,applyMiddleware(thunk));

class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          drumID: '',
        }
    }
    componentDidMount() {
      document.addEventListener('keydown',this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventLister();
    }
    handleKeyPress = (event) => {
      switch (event.keyCode) {
        case 81: //Q
          this.setState({
            drumID: event.keyCode
          });
          this.props.submitPlayDrum('BingBaa');
          break;
        case 87: //W
          this.setState({
            drumID: event.keyCode
          });
          this.props.submitPlayDrum('Celebration');
          break;
        case 69: //E
          this.setState({
            drumID: event.keyCode
          })
          this.props.submitPlayDrum('Organic_cloudcity');
          break;
        case 65: //A
          this.setState({
            drumID: event.keyCode
          });
          this.props.submitPlayDrum('Organic_miniminuet');
          break;
        case 83: //S
          this.setState({
            drumID: event.keyCode
          });
          this.props.submitPlayDrum('Organic_plucking');
           break;
        case 68: //D
          this.setState({
            drumID: event.keyCode
          });
          this.props.submitPlayDrum('Organic_saasy');
          break;
        case 90: //Z
          this.setState({
            drumID: event.keyCode
          });
          this.props.submitPlayDrum('Organic_xylobone');
          break;
        case 88: //X
          this.setState({
            drumID: event.keyCode
          });
          this.props.submitPlayDrum('Shred1');
          break;
        case 67: //C
          this.setState({
            drumID: event.keyCode
          });
          this.props.submitPlayDrum('Shred2');
          break;
        default:
          return;
      }
    }
    handleDrumClick = (event) => {
      this.setState({
        drumID: event.target.id,
      })
      this.props.submitPlayDrum(event.target.id);
    }
    render() {
        return (
          <div>
            <h1>Click a Drum or Press a Key to Play!</h1>
            <DisplayDrums handleDrumClick={this.handleDrumClick}/>
            <div id='display'><p>{this.props.drums.text}</p>
      </div>
          </div>
        );
    }
};

const DisplayDrums = (props) => {
  return (
    <div id='drum-machine'>
      <button id='BingBaa' class='drum-pad' onClick={props.handleDrumClick}>Q
        <audio class='clip' id='Q' src='http://john-pham.com/freecodecamp/BingBaa.mp3'></audio></button>
      <button id='Celebration' class='drum-pad' onClick={props.handleDrumClick}>W
        <audio class='clip' id='W' src='http://john-pham.com/freecodecamp/Celebration.mp3'></audio></button>
      <button id='Organic_cloudcity' class='drum-pad' onClick={props.handleDrumClick}>E
        <audio class='clip' id='E' src='http://john-pham.com/freecodecamp/Organic_cloudcity.mp3'></audio> </button>
      <button id='Organic_miniminuet' class='drum-pad' onClick={props.handleDrumClick}>A
        <audio class='clip'id='A' src='http://john-pham.com/freecodecamp/Organic_miniminuet.mp3'></audio></button>
      <button id='Organic_plucking' class='drum-pad' onClick={props.handleDrumClick}>S
        <audio class='clip' id='S' src='http://john-pham.com/freecodecamp/Organic_plucking.mp3'></audio></button>
      <button id='Organic_saasy' class='drum-pad' onClick={props.handleDrumClick}>D
        <audio class='clip' id='D' src='http://john-pham.com/freecodecamp/Organic_saasy.mp3'></audio></button>
      <button id='Organic_xylobone' class='drum-pad' onClick={props.handleDrumClick}>Z
        <audio class='clip' id='Z' src='http://john-pham.com/freecodecamp/Organic_xylobone.mp3'></audio></button>
      <button id='Shred1' class='drum-pad' onClick={props.handleDrumClick}>X
        <audio class='clip' id='X' src='http://john-pham.com/freecodecamp/Shred1.mp3'></audio></button>
      <button id='Shred2' class='drum-pad' onClick={props.handleDrumClick}>C
        <audio class='clip' id='C' src='http://john-pham.com/freecodecamp/Shred2.mp3'></audio></button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    drums: state.drums,
  }
};
      
const mapDispatchToProps = (dispatch) => {
  return {
    submitPlayDrum: (drum) => {
      dispatch(playDrum(drum))
    },
  }
};
      
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
      
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
   );
  }
};

ReactDOM.render(<AppWrapper />,document.getElementById('root'));