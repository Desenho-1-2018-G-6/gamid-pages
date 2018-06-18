import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="gamid-main">
                <h1 className="gamid-title" >Bem vindo ao Gamid!</h1>
                <p className="gamid-content">O Gamid é um framework que utiliza de Vanilla JS para facilitar
                    a criação de jogos e simulações bidimensionais. Através das bibliotecas
                    Graphics, Time, Controller, Physics e Audio é possível construir
                    aplicações que utilizam de um canvas HTML numa velocidade impressionante.
                </p>
            </div>
        );
    }
}

export default Home;
