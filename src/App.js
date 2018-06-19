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
import Objects from './graphics/objects/Objects';
import CollidableObjects from './graphics/collidableObjects/CollidableObjects';
import Controller from './controller/Controller';
import ControllerClass from './controller/controllerClass/ControllerClass';
import Keyboard from './controller/keyboard/Keyboard';
import Time from './time/Time';
import Audio from './audio/Audio.js';
import Physics from './physics/Physics.js';
import AfterBorderCollision from './physics/AfterBorderCollision';
import AfterCollision from './physics/AfterCollision';
import BeforeBorderCollision from './physics/BeforeBorderCollision';
import BeforeCollision from './physics/BeforeCollision';
import HasBorderCollision from './physics/HasBorderCollision';
import HasCollision from './physics/HasCollision';
import Examples from './examples/Examples';
import ReverseSnake from './examples/ReverseSnake';
import Blizzard from './examples/Blizzard';
import Random from './examples/Random';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='main'>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/gamid-pages/" component={Home} />
          <Route path="/gamid-pages/gamid" component={Gamid} />

          <Route path="/gamid-pages/graphics" component={Graphics} />
          <Route path="/gamid-pages/canvas" component={Canvas} />
          <Route path="/gamid-pages/baseobject" component={BaseObject} />
          <Route path="/gamid-pages/square" component={Square} />
          <Route path="/gamid-pages/objects" component={Objects} />
          <Route path="/gamid-pages/collidableObjects" component={CollidableObjects} />

          <Route path="/gamid-pages/controller" component={Controller} />
          <Route path="/gamid-pages/controllerClass" component={ControllerClass} />
          <Route path="/gamid-pages/keyboard" component={Keyboard} />

          <Route path="/gamid-pages/physics" component={Physics} />
          <Route path="/gamid-pages/afterBorderCollision" component={AfterBorderCollision} />
          <Route path="/gamid-pages/afterCollision" component={AfterCollision} />
          <Route path="/gamid-pages/beforeBorderCollision" component={BeforeBorderCollision} />
          <Route path="/gamid-pages/beforeCollision" component={BeforeCollision} />
          <Route path="/gamid-pages/hasBorderCollision" component={HasBorderCollision} />
          <Route path="/gamid-pages/hasCollision" component={HasCollision} />

          <Route path="/gamid-pages/audio" component={Audio} />
          
          <Route path="/gamid-pages/time" component={Time} />

          <Route path="/gamid-pages/examples" component={Examples}/>
          <Route path="/gamid-pages/reverse-snake" component={ReverseSnake}/>
          <Route path="/gamid-pages/blizzard" component={Blizzard}/>
          <Route path="/gamid-pages/random" component={Random}/>

        </div>
      </Router>
    );
  }
}

export default App;
