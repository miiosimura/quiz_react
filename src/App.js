import React from 'react';
import logo from './logo.svg';
import './App.css';

import Inicio from './home/Inicio'
import Categorias from './jogo/Categorias'
import Perguntas from './jogo/Perguntas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Perguntas />
      </header>
    </div>
  );
}

export default App;
