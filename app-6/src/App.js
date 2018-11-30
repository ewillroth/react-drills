import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userinput: '',
      list: []
    }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange(e){
    this.setState({
      userinput: e.target.value
    })
  }

  onClick(){
    let list = this.state.list
    list.push(this.state.userinput)
    this.setState({
      list,
      userinput: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.userinput} onChange={this.onChange} placeholder='enter new task'></input>
        <button onClick={this.onClick}>Add</button>
        <Todo list={this.state.list}/>
      </div>
    );
  }
}

export default App;
