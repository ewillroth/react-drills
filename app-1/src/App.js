import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      value: ''
    }
    this.onChange=this.onChange.bind(this)
  }
  onChange(event){
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.value}</p>
        <input onChange = {this.onChange} value = {this.state.inputvalue}></input>
      </div>
    );
  }
}

export default App;
