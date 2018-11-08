import React, { Component } from 'react';
import AcercaDeMi from './AcercaDeMi';
import Proyectos from './Proyectos';
import Herramientas from './Herramientas';

export default class Container extends Component {
    render() {
        return(
            <div className="container">
                <AcercaDeMi />
                <Proyectos />
                <Herramientas />
            </div>
        );
    }
}