import React, { Component } from 'react';
import './AcercaDeMi.css'

export default class AcercaDeMi extends Component {
    render() {
        return(
            <section className="row">
                <section className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div id="image" className="cropcircle"></div>
                </section>
                <section className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="content">
                    <h2 id="acerca-de-mi" className="tracking-in-contract">Acerca de mi</h2>
                    <h4>¡Hola! Soy Esmeralda Rivero, coder Front-End</h4>
                    <p>
                        Disfruto mucho de las buenas conexiones de internet, videojuegos,
                        música, conciertos y de la programación.
                        Mis herramientas favoritas tecnológicas (hasta ahora) son React y Bootstrap.
                    </p>
                </div>
                </section>
            </section>
        );
    }
}