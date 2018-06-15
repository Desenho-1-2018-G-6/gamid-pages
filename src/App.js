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
import BaseObject from './graphics/baseobject/BaseObject';
import Square from './graphics/square/Square';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='main'>
          <Header />
          <Route path="/gamid-pages/gamid" component={Gamid} />
          <Route path="/gamid-pages/graphics" component={Graphics} />
          <Route path="/gamid-pages/canvas" component={Canvas} />
          <Route path="/gamid-pages/baseobject" component={BaseObject} />
          <Route path="/gamid-pages/square" component={Square} />
          <Route exact path="/gamid-pages/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
