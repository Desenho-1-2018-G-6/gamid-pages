import React, { Component } from 'react';
// import './Home.css';

class ReverseSnake extends Component {
    load_game() {
        document.getElementById("game").innerHTML =
            `<object 
            type="text/html"
            data="/reverse-snake/index.html"
            style="width:900px;height:900px;"
            ></object>`
    }

    componentDidMount(props) {
        this.load_game();
    }
    render() {
        return (
            <div className="gamid-main">
                <h1 className="gamid-title" >Reverse Snake</h1>
                <h4>feito por: <a href="https://github.com/lucasssm">lucasssm</a></h4>
                <h4>Código disponível em: <a href="https://github.com/Desenho-1-2018-G-6/gamid/blob/master/examples/inverse%20snake/main.js">Github</a></h4>

                <div id="game">
                </div>
            </div>

        );
    }
}

export default ReverseSnake;
