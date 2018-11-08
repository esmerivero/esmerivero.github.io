import React, { Component } from 'react';
import BurgerQueen from '../assets/burger-queen.JPG';
import Datadashboard from '../assets/data-dashboard.JPG';
import Labcar from '../assets/labcar.JPG';
import MovieApi from '../assets/movie-api.JPG';
import './Proyectos.css'

export default class Proyectos extends Component{
    render(){
        return(
            <div id="proyectos" className="container">
                <h1 className="title tracking-in-contract"><b>Proyectos</b></h1>
                <section className="row">

                    <article className="card">
                        <div className="card-body row">
                            <img className="col-12 card-img-top" src={BurgerQueen} alt="Pantalla principal del proyecto burger queen"/>
                            <h5 className="card-title">Burger Queen</h5>
                            <p className="card-text">Progressive Web App, para toma de pedidos de establecimiento de comida rápida.
                            Con funcionalidad offline, visualización de historial de pedidos.
                            Desarrollado con React, Firebase, Bootstrap</p>
                            <a href="https://esmerivero.github.io/burger-queen" target="_blank" rel="noreferrer noopener"
                            className="btn btn-secondary col-5 offset-1 ">Demo</a>
                            <a href="https://github.com/esmerivero/burger-queen" target="_blank" rel="noreferrer noopener"
                            className="btn btn-secondary col-5 offset-1">Código</a>
                        </div>
                    </article>

                    <article className="card">
                        <div className="card-body row">
                        <img className="card-img-top" src={Datadashboard} alt="Pantalla principal del proyecto datadashboard"/>
                            <h5 className="card-title">Datadashboard</h5>
                            <p className="card-text">Visualizador de data, para las Training Manager de Laboratoria.
                            Filtrando la información del JSON por país, sede, generación.
                            Esta v2.0 fue creada con React y Materialize.</p>
                            <a href="https://nancyym.github.io/cdmx-2018-06-bc-core-am-data-dashboard/startbootstrap-sb-admin-2-gh-pages/pages/index.html"
                            rel="noreferrer noopener" target="_blank" className="btn btn-secondary col-5 offset-1">Demo</a>
                            <a href="https://github.com/esmerivero/cdmx-2018-06-bc-core-am-data-dashboard-v1" 
                            rel="noreferrer noopener"target="_blank" className="btn btn-secondary col-5 offset-1">Código</a>
                        </div>
                    </article>

                    <article className="card">
                        <div className="card-body row">
                        <img className="card-img-top" src={Labcar} alt="pantalla principal del proyecto Labcar"/>
                            <h5 className="card-title">Labcar</h5>
                            <p className="card-text">Maquetación de Web App donde se puede solicitar servicio de taxi
                            privado.
                            Creado en Vanilla</p>
                            <a href="https://github.com/esmerivero/cdmx-2018-06-bc-frontend-labcar" 
                            target="_blank" rel="noreferrer noopener" className="btn btn-secondary col-5 offset-1">Demo</a>
                            <a href="https://github.com/esmerivero/lab-car-boilerplate" 
                            target="_blank"rel="noreferrer noopener" className="btn btn-secondary col-5 offset-1">Código</a>
                        
                        </div>
                    </article>
                    

                    <article className="card">
                        <div className="card-body row">
                        <img className="card-img-top" src={MovieApi} alt="Pantalla principal del prpyecto Movie Api"/>
                            <h5 className="card-title">3, 2, 1 ¡Acción!</h5>
                            <p className="card-text">Buscador de peliculas, que arroja sus datos como título, fecha de estreno y genero
                            Este proyecto consume API's, creado en vanilla con Bootstrap.</p>
                            <a href="https://esmerivero.github.io/cdmx20181-Track-FE-themovieapi/src/views/billboard.html" 
                            target="_blank" rel="noreferrer noopener" className="btn btn-secondary col-5 offset-1">Demo</a>
                            <a href="https://github.com/esmerivero/cdmx20181-Track-FE-themovieapi" 
                            target="_blank" rel="noreferrer noopener" className="btn btn-secondary col-5 offset-1">Código</a>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}