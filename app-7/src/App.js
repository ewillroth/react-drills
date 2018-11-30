import React, { Component } from 'react';
import './App.css';
import NewTask from './components/NewTask/NewTask';
import List from './components/List/List';

class App extends Component {
  constructor(){
    super()
    this.state={
      task: [],
      userinput: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e){
    this.setState({
      userinput: e.target.value
    })
  }

  onClick(){
    let task = this.state.task
    task.push(this.state.userinput)
    this.setState({
      task,
      userinput: '',
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask onChange = {this.onChange} onClick = {this.onClick} inputvalue={this.state.userinput}/>
        <List task = {this.state.task}/>
      </div>
    );
  }
}

export default App;
