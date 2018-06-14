import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Header.css';
import Logo from '../../static/gamid.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const options = [
    'GAMID', 'GRAPHICS', 'CONTROLLER', 'PHYSICS', 'TIME'
  ]
const defaultOption = options[0];


class Header extends Component {
    render() {
        return (
            <div className="main-container">
                <img src={Logo} className="logo" />
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            </div>
        );
    }
}

export default Header;
