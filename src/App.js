import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CardBody from './components/CardBody'

export default class App extends Component {
  render() {
    return (
      <div>
      <header>
        <Header />
      </header>

      <CardBody/>
      </div>
    );
  }
}