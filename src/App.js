import logo from './logo.svg';
import './App.css';
import React from 'react';

const pads = [
  {
                   "key": "Q",
                   "song": "Heater-1",
                   "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
               },
               {
                   "key": "W",
                   "song": "Heater-2",
                   "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
               },
               {
                   "key": "E",
                   "song": "Heater-3",
                   "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
               },
               {
                   "key": "A",
                   "song": "Heater-4",
                   "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
               },
               {
                   "key": "S",
                   "song": "Heater-6",
                   "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
               },
               {
                   "key": "D",
                   "song": "Dsc_Oh",
                   "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
               },
               {
                   "key": "Z",
                   "song": "Kick_n_Hat",
                   "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
               },
               {
                   "key": "X",
                   "song": "RP4_KICK_1",
                   "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
               },
               {
                   "key": "C",
                   "song": "Cev_H2",
                   "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
               }
];

const DrumPad = ({drumKey, song, handleClick, url}) => {
  return(
    <button className='drum-pad' id={song} onClick={handleClick(drumKey, song)}>
      {drumKey}
      <audio className='clip' src={url} id={drumKey} />
    </button>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPads: {pads},
      text:""
    }
  
    this.handleKeyPress=this.handleKeyPress.bind(this);
    this.handleButtonClick=this.handleButtonClick.bind(this);
}
  
  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }
  
  handleKeyPress(e) {
    const pad = this.state.drumPads.pads.find(
    item => item.key === e.key.toUpperCase());
    if (pad) document.getElementById(pad.song).click();
  }
  
  handleButtonClick(drumKey, song) {
    return () => {
      document.getElementById(drumKey).play();
      this.setState({text: song});
    }
  }
  
  render() {
    return(
    <div id='drum-machine'>
        <h1>Drum Machine</h1>
        <div className='display-style' id='display-div'>
        <div id='pads'>
          {this.state.drumPads.pads.map(item => (
            <DrumPad
              song={item.song}
              key={item.key}
              drumKey={item.key}
              handleClick={this.handleButtonClick}
              url={item.url}
              />
          ))}
        </div>
        </div>
        <div className='display-style' id='display'>{this.state.text}
        </div>
    </div>
    );
  }
}

export default App;
