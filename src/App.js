import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';

export default class App extends Component {
  render() {
    return (
      <div>
      <header>
        <Header />
      </header>
      <Container />
      </div>
    );
  }
}