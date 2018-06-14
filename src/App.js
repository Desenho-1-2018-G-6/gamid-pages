import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './home/Home.js';
import Gamid from './gamid/Gamid.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/gamid" component={Gamid} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
