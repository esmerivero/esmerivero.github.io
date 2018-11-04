import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
// import CardBody from './components/CardBody';
// import Footer from './components/Footer';
// import AcercaDeMi from './components/AcercaDeMi';
// import Proyectos from './components/Proyectos';
// import Herramientas from './components/Herramientas';
// import Contacto from './components/Contacto';
import Container from './components/Container';

export default class App extends Component {
  render() {
    return (
      <div>
      <header>
        <Header />
      </header>
      <Container />
     {/*
      // <AcercaDeMi />
      // <Proyectos />
      // <Herramientas />
      // <Contacto />
      //  <CardBody/> 
      // <Footer/>*/}
      </div>
    );
  }
}