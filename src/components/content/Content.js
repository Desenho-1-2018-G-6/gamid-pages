import React, { Component } from 'react';

import './Content.css';

var ReactMarkdown = require('react-markdown');

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrList: this.props.attrList || [],
            example: this.props.example || ""
        }
        console.log(this.state);
    }

    renderExample() {
        if (this.state.example !== "") {
            return (
                <div>
                    <h2 className="main-title">Exemplos:</h2>
                    <pre><code className="javascript">{this.state.example}</code></pre>
                </div>
            )
        }
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
                {this.renderExample()}

            </div>
        );
    }
}

export default Content;
