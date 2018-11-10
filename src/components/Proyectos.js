import React, { Component } from 'react';
import BurgerQueen from '../assets/burger-queen.JPG';
import Datadashboard from '../assets/data-dashboard.JPG';
import MovieApi from '../assets/movie-api.JPG';
import './Proyectos.css'

export default class Proyectos extends Component{
    render(){
        return(
            <div id="proyectos">
                <section className="row">
                    <h1 className="col tracking-in-contract"><b>Proyectos</b></h1>
                </section>
                
                <section className="row">

                    <article className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                    <div className="card">
                        <img className="card-img-top" src={BurgerQueen} alt="Pantalla principal del proyecto burger queen"/>
                        <h5 className="card-title">Burger Queen</h5>
                        <p className="card-text">Progressive Web App, para toma de pedidos de establecimiento de comida rápida.
                        Con funcionalidad offline, visualización de historial de pedidos.
                        Desarrollado con React, Firebase, Bootstrap</p>
                        <div className="row">
                        <a href="https://esmerivero.github.io/burger-queen" target="_blank" rel="noreferrer noopener"
                        className="btn btn-secondary col">Demo</a>
                        <a href="https://github.com/esmerivero/burger-queen" target="_blank" rel="noreferrer noopener"
                        className="btn btn-secondary col">Código</a>
                        </div>
                    </div>
                    </article>

                    <article className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                    <div className="card">
                        <img className="card-img-top" src={Datadashboard} alt="Pantalla principal del proyecto datadashboard"/>
                        <h5 className="card-title">Datadashboard</h5>
                        <p className="card-text">Visualizador de data, para las Training Manager de Laboratoria.
                        Filtrando la información del JSON por país, sede, generación.
                        Esta v2.0 fue creada con React y Materialize.</p>
                        <div className="row">
                        <a href="https://esmerivero.github.io/burger-queen" target="_blank" rel="noreferrer noopener"
                        className="btn btn-secondary col ">Demo</a>
                        <a href="https://github.com/esmerivero/burger-queen" target="_blank" rel="noreferrer noopener"
                        className="btn btn-secondary col">Código</a>
                        </div>
                    </div>
                    </article>

                    <article className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                    <div className="card">
                        <img className="card-img-top" src={MovieApi} alt="Pantalla principal del prpyecto Movie Api"/>
                        <h5 className="card-title">3, 2, 1 ¡Acción!</h5>
                        <p className="card-text">Buscador de peliculas, que arroja sus datos como título, fecha de estreno y genero
                        Este proyecto consume API's, creado en vanilla con Bootstrap.</p>
                        <div className="row">
                        <a href="https://esmerivero.github.io/cdmx20181-Track-FE-themovieapi/src/views/billboard.html" 
                        target="_blank" rel="noreferrer noopener" className="btn btn-secondary col">Demo</a>
                        <a href="https://github.com/esmerivero/cdmx20181-Track-FE-themovieapi" 
                        target="_blank" rel="noreferrer noopener" className="btn btn-secondary col">Código</a>
                        </div>
                    </div>
                    </article>
                </section>
            </div>
        );
    }
}