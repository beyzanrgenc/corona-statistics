import React, { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import RouterBlock from './component/RouterBlock';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <RouterBlock />
        </div>
      </Router>
    )
  }
}

export default App;
