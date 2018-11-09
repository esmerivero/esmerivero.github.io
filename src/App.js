import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Contacto from './components/Contacto';

export default class App extends Component {
  render() {
    return (
      <div>
      <header>
        <Header />
      </header>
      <Container />
      <Contacto />
      </div>
    );
  }
}