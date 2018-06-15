import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './home/Home.js';
import Gamid from './gamid/Gamid.js';
import Graphics from './graphics/Graphics.js';
import Header from './components/header/Header.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='main'>
          <Header />
          <Route path="/gamid" component={Gamid} />
          <Route path="/graphics" component={Graphics} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
