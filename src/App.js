import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Inicio from './home/Inicio'
import Categorias from './jogo/Categorias'
import Perguntas from './jogo/Perguntas'
import Resultado from './jogo/Resultado'
import Ranking from './jogo/Ranking'
import Header from './jogo/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <Route path='/' exact component={Inicio}></Route>
          <Route path='/categorias' component={Categorias}></Route>
          <Route path='/perguntas' component={Perguntas}></Route>
          <Route path='/resultado' component={Resultado}></Route>
          <Route path='/ranking' component={Ranking}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
