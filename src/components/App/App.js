import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from '../TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Animation Demo</h2>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
