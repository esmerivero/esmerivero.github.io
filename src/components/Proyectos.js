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
                <h1 id="proyectos" className="title">Proyectos</h1>
                <section className="row">
                    <div className="col-xs-10 col-sm-10 col-md-6 col-lg-3 
                    offset-xs-2 offset-sm-2 offset-md-1 offset-lg-1">
                    <article className="card">
                        <img className="card-img-top" src={BurgerQueen} alt="Pantalla principal del proyecto burger queen"/>
                        <div className="card-body">
                            <h5 className="card-title">Burger Queen</h5>
                            <p className="card-text">Progressive Web App, para toma de pedidos de establecimiento de comida rápida.
                            Con funcionalidad offline, visualización de historial de pedidos.
                            Desarrollado con React, Firebase, Bootstrap</p>
                            <div className="row">
                            <a href="#demo-burger-queen" className="btn btn-primary col-4 offset-1 demo">Demo</a>
                            <a href="#code-burger-queen" className="btn btn-primary col-4 offset-1 code">Código</a>
                            </div>
                        </div>
                    </article>
                    </div>

                    <div className="col-xs-10 col-sm-10 col-md-6 col-lg-3 
                    offset-xs-2 offset-sm-2 offset-md-1 offset-lg-1">
                    <article className="card">
                        <img className="card-img-top" src={Datadashboard} alt="Pantalla principal del proyecto datadashboard"/>
                        <div className="card-body">
                            <h5 className="card-title">Datadashboard</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#datadashboard" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </article>
                    </div>

                    <div className="col-xs-10 col-sm-10 col-md-6 col-lg-3 
                    offset-xs-2 offset-sm-2 offset-md-1 offset-lg-1">
                    <article className="card">
                        <img className="card-img-top" src={Labcar} alt="pantalla principal del proyecto Labcar"/>
                        <div className="card-body">
                            <h5 className="card-title">Labcar</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#labcar" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </article>
                    </div>

                    <div className="col-xs-10 col-sm-10 col-md-6 col-lg-3 
                    offset-xs-2 offset-sm-2 offset-md-1 offset-lg-1">
                    <article className="card">
                        <img className="card-img-top" src={MovieApi} alt="Pantalla principal del prpyecto Movie Api"/>
                        <div className="card-body">
                            <h5 className="card-title">Movie Api</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#movie-api" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </article>
                    </div>
                </section>
            </div>
        );
    }
}