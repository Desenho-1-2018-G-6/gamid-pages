import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

import './Sidebar.css';


class Sidebar extends Component {
    render() {
        return (
            <div className="main-sidebar">
                <h2 className="sidebar-title">{this.props.title}</h2>
                <ul className="sidebar-list">
                    {this.props.links.map((link) => {
                        return <li key={link.title}><Link className='sidebar-list' to={link.link}>{link.title}</Link></li>;
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default Sidebar;
