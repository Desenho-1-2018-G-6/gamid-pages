import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
    load_game(){
        document.getElementById("game").innerHTML=
        `<object 
            type="text/html"
            data="test/index.html"
            style="width:900px;height:900px;"
            ></object>`
    }

    componentDidMount(props){
        this.load_game();
    }
    render() {
        return (
            <div className="gamid-main">
                <h1 className="gamid-title" >Bem vindo ao Gamid!</h1>
                <p className="gamid-content">O Gamid é um framework que utiliza de Vanilla JS para facilitar
                    a criação de jogos e simulações bidimensionais. Através das bibliotecas
                    Graphics, Time, Controller, Physics e Audio é possível construir
                    aplicações que utilizam de um canvas HTML numa velocidade impressionante.
                </p>
                <div id="game">
                </div>
            </div>
            
        );
    }
}

export default Home;
