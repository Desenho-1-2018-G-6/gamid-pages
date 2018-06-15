import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './home/Home.js';
import Gamid from './gamid/Gamid.js';
import Graphics from './graphics/Graphics.js';
import Canvas from './graphics/canvas/Canvas.js';
import Header from './components/header/Header.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='main'>
          <Header />
          <Route path="/gamid-pages/gamid" component={Gamid} />
          <Route path="/gamid-pages/graphics" component={Graphics} />
          <Route path="/gamid-pages/canvas" component={Canvas} />
          <Route exact path="/gamid-pages/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
