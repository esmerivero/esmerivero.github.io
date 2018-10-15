import React, { Component } from 'react';
import '../index.css';
import Foto from '../rivero-portafolio.jpeg';


export default class CardBody extends Component {
  render() {
    return (
        <div>
            <div>
                <img className="foto-portafolio" src={Foto} alt="Imagen "/>
            </div>

            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Acerca de mi</h5>
                    <p className="card-text">Desarrolladora Fron-End</p>
                </div>
            </div>
        </div>
    );
  }
}