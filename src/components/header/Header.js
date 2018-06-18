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
                <Link to="/gamid-pages"><img src={Logo} className="logo" alt='gamid logo'/></Link>
                <ul className="list">
                    <li><Link to="/gamid-pages/gamid">GAMID</Link></li>
                    <li><Link to="/gamid-pages/graphics">GRAPHICS</Link></li>
                    <li><Link to="/gamid-pages/controller">CONTROLLER</Link></li>
                    <li><Link to="/gamid-pages/physics">PHYSICS</Link></li>
                    <li><Link to="/gamid-pages/audio">AUDIO</Link></li>
                    <li><Link to="/gamid-pages/time">TIME</Link></li>
                    <li><Link to="/gamid-pages/examples">EXEMPLOS</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
