import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div>
                hi
                <Link to="/gamid">Gamid!</Link>
            </div>
        );
    }
}

export default Home;
