import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateRoadmap from './views/CreateRoadmap.jsx';
import 'font-awesome/css/font-awesome.min.css'
import Pane from './views/sample/Pane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className={["fa fa-road fa-spin", "App-logo"]} size="1g"></i>
          <h1 className="App-title">Roadmap Ninja</h1>
        </header>
        <Pane />
      </div>
    );
  }
}

export default App;
