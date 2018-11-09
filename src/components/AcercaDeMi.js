import React, { Component } from 'react';
import './AcercaDeMi.css'
import Curriculum from './Curriculum';

export default class AcercaDeMi extends Component {
    render() {
        return(
            <section id="acerca-de-mi" className="row">
                <section className="col-xs-12 col-sm-12 col-md-6 col-lg-5 offset-lg-1 pic">
                    <div id="image" className="cropcircle"></div>
                </section>
                <section className="col-xs-12 col-sm-12 col-md-6 col-lg-6 info">
                    <h2 className="tracking"><b>Acerca de mi</b></h2>
                    <h4>¡Hola! Soy Esmeralda Rivero, coder Front-End</h4>
                    <p>
                        Disfruto mucho de las buenas conexiones de internet, videojuegos,
                        música, conciertos y de la programación.
                        Mis herramientas favoritas tecnológicas (hasta ahora) son React y Bootstrap.
                    </p>
                    <Curriculum />
                </section>
            </section>
        );
    }
}