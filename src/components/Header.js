import React, { Component } from 'react';
import logo from '../logo-rivero.jpg'
import '../index.css';


export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div><img src={logo} className="logo-rivero" alt="Logo del portafolio" /></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#acerca-de-mi">Acerca de mi <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#herramientas">Herramientas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}