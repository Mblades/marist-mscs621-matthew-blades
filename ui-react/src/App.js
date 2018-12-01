import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './simple-grid.scss';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      langChoice: "en-es",
      selected: "",
      translatedMessage: "No text yet..."
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._onSelect = this._onSelect.bind(this);
  }

  componentDidMount() {
    
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    this.translateText();
    event.preventDefault();
  }

  _onSelect(option) {
    this.setState({langChoice: option.value, selected: option});
    console.log(option)
  }
  
  translateText() {
    var callData = {
      model_id: this.state.langChoice,
      text: this.state.message
    };

    fetch('api/translate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(callData)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        translatedMessage: responseJson.translations[0].translation
      })
    })
  }

  render() {
    const options = [
      { value: 'en-ar', label: 'Aribic'},
      { value: 'en-da', label: 'Danish'},
      { value: 'en-nl', label: 'Dutch'},
      { value: 'en-fr', label: 'French'},
      { value: 'en-de', label: 'German'},
      { value: 'en-el', label: 'Greek'},
      { value: 'en-he', label: 'Hebrew'},
      { value: 'en-it', label: 'Italian'},
      { value: 'en-ja', label: 'Japanese'},
      { value: 'en-ru', label: 'Russian'},
      { value: 'en-es', label: 'Spanish' }
    ];
    const defaultOption = this.state.selected
    const placeHolder = options[10]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <div className="row">
            <div className="col-6 input-box">
              <p className="title-text">Input Text</p>
              <textarea autoFocus onChange={this.handleChange} value={this.state.message} placeholder="Enter text here..." className="input-area"></textarea>
            </div>
            <div className="col-6 output-box">
               
              <div className="title-text2">Output Text 
                <p className="lang-select">Select Language</p>
              </div>
              <div className="dropdown-container">
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder={placeHolder.label} />
              </div>
              <textarea value={this.state.translatedMessage} readOnly className="output-area"></textarea>
            </div>
          </div>
          <div>
            <button className="translate-btn" onClick={this.handleSubmit}> Translate </button>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
