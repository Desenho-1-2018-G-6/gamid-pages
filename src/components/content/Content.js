import React, { Component } from 'react';

import './Content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrList: this.props.attrList || []
        }
        console.log(this.state);
    }

    render() {
        return (
            <div className="main-content">
                <h1 className="main-title">{this.props.title}</h1>
                <p className="text-content">{this.props.main}</p>
                <ul>
                    {this.state.attrList.map((attr) => {
                        return (<li className="list-content" key={attr.attr}>{attr.attr} - {attr.description}</li>)
                    })}
                </ul>

            </div>
        );
    }
}

export default Content;
