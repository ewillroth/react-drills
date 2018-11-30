import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inputvalue: '',
      array: ['alligator','bear','cat','deer','elephant','fox','gorilla','hippopotamus','imp','jellyfish','kangaroo','lizard','mouse','niffler','ox','puma','quail','robot','scorpion','tortoise','ummmm','vampire','walrus','x-men','yak','zebra']
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e){
    this.setState({
      inputvalue: e.target.value
    })
  }

  render() {
    let sortedArray = [];
    for (let i = 0; i < this.state.array.length; i++) {
      if (this.state.array[i].includes(this.state.inputvalue)) {
        sortedArray.push(this.state.array[i])
      }
    }
    let array = sortedArray.map(item=><h2>{item}</h2>)
    return (
      <div className="App">
        <input value={this.state.inputvalue} onChange={this.onChange}/>
        {array}
      </div>
    );
  }
}

export default App;
