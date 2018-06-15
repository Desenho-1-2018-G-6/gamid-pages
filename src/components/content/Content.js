import React, { Component } from 'react';

import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className="main-content">
                <h1 className="main-title">{this.props.title}</h1>
                <p className="text-content">{this.props.main}</p>

            </div>
        );
    }
}

export default Content;
