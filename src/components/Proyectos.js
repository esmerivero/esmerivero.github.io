import React, { Component } from 'react';
import BurgerQueen from '../assets/burger-queen.JPG';
import RegistroDeVisitantes from '../assets/registro-de-visitantes.JPG';
import Mdlinks from '../assets/mdlinks.JPG';
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
                        <p className="card-text">Web App, para toma de pedidos de establecimiento de comida rápida.
                        Con funcionalidad offline y visualización de historial de pedidos.
                        <br/>
                        Desarrollado en React, Node, Express, Firebase, Bootstrap, desplegado en Herokuapp</p>
                        <div className="row">
                        <a href="https://young-savannah-58223.herokuapp.com/" target="_blank" rel="noreferrer noopener"
                        className="btn btn-secondary col">Demo</a>
                        <a href="https://github.com/esmerivero/burgerqueen-node" target="_blank" rel="noreferrer noopener"
                        className="btn btn-secondary col">Código</a>
                        </div>
                    </div>
                    </article>

                    <article className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                    <div className="card">
                        <img className="card-img-top" src={RegistroDeVisitantes} alt="Pantalla principal del proyecto datadashboard"/>
                        <h5 className="card-title">Registro de visitantes</h5>
                        <p className="card-text">Aplicación web que agiliza el proceso de registro de visitantes a coworking.
                        <br/>
                        La vista 1 es para los visitantes y la vista 2 (user: admin@admin.com pass: admin) está diseñada para los administradores del coworking.
                        Autenticación y almacenamiento de datos en Firebase.
                        </p>
                        <div className="row">
                        <a href="https://adrianaesvereidytv.github.io/Proyecto-5--Easy-Visit/src/views/registro.html" target="_blank" rel="noreferrer noopener"
                        className="btn btn-secondary col ">Vista 1</a>
                        <a href="https://adrianaesvereidytv.github.io/Proyecto-5--Easy-Visit/src/views/login.html" target="_blank" rel="noreferrer noopener"
                        className="btn btn-secondary col ">Vista 2</a>
                        <a href="https://github.com/AdrianaEsvereidyTV/Proyecto-5--Easy-Visit" target="_blank" rel="noreferrer noopener"
                        className="btn btn-secondary col">Código</a>
                        </div>
                    </div>
                    </article>

                    <article className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                    <div className="card">
                        <img className="card-img-top" src={Mdlinks} alt="Pantalla principal del prpyecto Movie Api"/>
                        <h5 className="card-title">Markdown Links</h5>
                        <p className="card-text">Acercamiento con NodeJS para realizar una busqueda con los detalles de links
                        en archivos con extensión .md .
                        Dentro de un array se despliegan los objetos con cada detalle del link, como la liga, el status,
                        su descripción.
                        </p>
                        <div className="row">
                        <a href="https://github.com/esmerivero/cdmx-2018-01-FE-markdown" 
                        target="_blank" rel="noreferrer noopener" className="btn btn-secondary col">Código</a>
                        </div>
                    </div>
                    </article>
                </section>
            </div>
        );
    }
}