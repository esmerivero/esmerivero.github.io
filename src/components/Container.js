import React, { Component } from 'react';
import AcercaDeMi from './AcercaDeMi';
import Proyectos from './Proyectos';

export default class Container extends Component {
    render() {
        return(
            <div className="container">
                <AcercaDeMi />
                <Proyectos />
            </div>
        );
    }
}