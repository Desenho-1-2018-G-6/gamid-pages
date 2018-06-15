import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import './Header.css';
import Logo from '../../static/gamid.png';
import 'react-dropdown/style.css'


class Header extends Component {
    render() {
        return (
            <div className="main-header">
                <Link to="/"><img src={Logo} className="logo" alt='gamid logo'/></Link>
                <ul className="list">
                    <li><Link to="/gamid">GAMID</Link></li>
                    <li><Link to="/graphics">GRAPHICS</Link></li>
                    <li><Link to="/controller">CONTROLLER</Link></li>
                    <li><Link to="/physics">PHYSICS</Link></li>
                    <li><Link to="/time">TIME</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
