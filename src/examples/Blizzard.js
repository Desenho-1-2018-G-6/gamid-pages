import React, { Component } from 'react';
// import './Home.css';

class Blizzard extends Component {
    load_game() {
        document.getElementById("game").innerHTML =
            `<object 
            type="text/html"
            data="/blizzard/index.html"
            style="width:900px;height:900px;"
            ></object>`
    }

    componentDidMount(props) {
        this.load_game();
    }
    render() {
        return (
            <div className="gamid-main">
                <h1 className="gamid-title" >Blizzard</h1>
                <h4>Feito por: <a href="https://github.com/lucasssm">lucasssm</a></h4>
                <h4>Código disponível em: <a href="https://github.com/Desenho-1-2018-G-6/gamid/blob/master/blizzard.js">Github</a></h4>
                <div id="game">
                </div>
            </div>

        );
    }
}

export default Blizzard;
