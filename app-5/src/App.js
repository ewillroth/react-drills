import React, { Component } from 'react';
import './App.css';
import Image from './components/Image/Image'
import nasa from './nasa.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image= {nasa}/>
      </div>
    );
  }
}

export default App;
