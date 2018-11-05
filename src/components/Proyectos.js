import React, { Component } from 'react';
import BurgerQueen from '../assets/burger-queen.JPG';
import Datadashboard from '../assets/data-dashboard.JPG';
import Labcar from '../assets/labcar.JPG';
import MovieApi from '../assets/movie-api.JPG';
import './Proyectos.css'

export default class Proyectos extends Component{
    render(){
        return(
            <div className="container">
                <h1 id="proyectos" className="title tracking-in-contract">Proyectos</h1>
                <section className="row">
                    <div className="col">
                    <article className="card">
                        <img className="card-img-top" src={BurgerQueen} alt="Pantalla principal del proyecto burger queen"/>
                        <div className="card-body">
                            <h5 className="card-title">Burger Queen</h5>
                            <p className="card-text">Progressive Web App, para toma de pedidos de establecimiento de comida rápida.
                            Con funcionalidad offline, visualización de historial de pedidos.
                            Desarrollado con React, Firebase, Bootstrap</p>
                            <div className="row">
                            <a href="https://esmerivero.github.io/burger-queen" target="_blank" rel="noreferrer noopener"
                            className="btn btn-primary col-4 offset-1 demo">Demo</a>
                            <a href="https://github.com/esmerivero/burger-queen" target="_blank" rel="noreferrer noopener"
                            className="btn btn-primary col-4 offset-1 code">Código</a>
                            </div>
                        </div>
                    </article>
                    </div>

                    <div className="col">
                    <article className="card">
                        <img className="card-img-top" src={Datadashboard} alt="Pantalla principal del proyecto datadashboard"/>
                        <div className="card-body">
                            <h5 className="card-title">Datadashboard</h5>
                            <p className="card-text">Visualizador de data, para las Training Manager de Laboratoria.
                            Filtrando la información del JSON por país, sede, generación.
                            Esta v2.0 fue creada con React y Materialize.</p>
                            <div className="row">
                            <a href="https://nancyym.github.io/cdmx-2018-06-bc-core-am-data-dashboard/startbootstrap-sb-admin-2-gh-pages/pages/index.html"
                            rel="noreferrer noopener" target="_blank" className="btn btn-primary col-4 offset-1 demo">Demo</a>
                            <a href="https://github.com/esmerivero/cdmx-2018-06-bc-core-am-data-dashboard-v1" 
                            rel="noreferrer noopener"target="_blank" className="btn btn-primary col-4 offset-1 code">Código</a>
                            </div>
                        </div>
                    </article>
                    </div>

                    <div className="col">
                    <article className="card">
                        <img className="card-img-top" src={Labcar} alt="pantalla principal del proyecto Labcar"/>
                        <div className="card-body">
                            <h5 className="card-title">Labcar</h5>
                            <p className="card-text">Maquetación de Web App donde se puede solicitar servicio de taxi
                            privado.
                            Creado en Vanilla</p>
                            <div className="row">
                            <a href="https://github.com/esmerivero/cdmx-2018-06-bc-frontend-labcar" target="_blank" rel="noreferrer noopener" className="btn btn-primary col-4 offset-1 demo">Demo</a>
                            <a href="https://github.com/esmerivero/lab-car-boilerplate" target="_blank"rel="noreferrer noopener" className="btn btn-primary col-4 offset-1 code">Código</a>
                            </div>
                        </div>
                    </article>
                    </div>

                    <div className="col">
                    <article className="card">
                        <img className="card-img-top" src={MovieApi} alt="Pantalla principal del prpyecto Movie Api"/>
                        <div className="card-body">
                            <h5 className="card-title">3, 2, 1 ¡Acción!</h5>
                            <p className="card-text">Buscador de peliculas, que arroja sus datos como título, fecha de estreno y genero
                            Este proyecto consume API's, creado en vanilla con Bootstrap.</p>
                            <div className="row">
                            <a href="https://esmerivero.github.io/cdmx20181-Track-FE-themovieapi/src/views/billboard.html" target="_blank" rel="noreferrer noopener" className="btn btn-primary col-4 offset-1 demo">Demo</a>
                            <a href="https://github.com/esmerivero/cdmx20181-Track-FE-themovieapi" target="_blank" rel="noreferrer noopener" className="btn btn-primary col-4 offset-1 code">Código</a>
                            </div>
                        </div>
                    </article>
                    </div>
                </section>
            </div>
        );
    }
}