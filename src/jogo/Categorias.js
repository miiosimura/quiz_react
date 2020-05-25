import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

import Navegacao from './Navegacao'
import Categoria from './Categoria'

class Categorias extends Component {
    render(){
        return (
            <div>
                <Navegacao />
                <h2>Lista de Categorias</h2>
                <p>Selecione a categoria que você quer responder perguntas</p>

                <Grid columns={5} divided>
                    <Categoria titulo='Esportes' icone='soccer'/>
                    <Categoria titulo='Música' icone='music'/>
                    <Categoria titulo='Mundo' icone='globe'/>
                    <Categoria titulo='Animais' icone='paw'/>
                    <Categoria titulo='Jogos' icone='gamepad'/>
                    <Categoria titulo='Profissões' icone='suitcase'/>
                    <Categoria titulo='Matemática' icone='percent'/>
                    <Categoria titulo='Programação' icone='code'/>
                    <Categoria titulo='Literatura' icone='book'/>
                    <Categoria titulo='Comidas' icone='food'/>
                </Grid>
            </div>
        )
    }
}

export default Categorias