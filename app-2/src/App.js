import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      array : ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin']
    }
  }
  render() {
    let array = this.state.array.map(item => <h2>{item}</h2>)
    return (
      <div className="App">
        {array}
      </div>
    );
  }
}

export default App;
