import React, {Component} from 'react'
import { Container, Segment, Card, Button } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

import {auth, providers} from './../config'
import Navegacao from './Navegacao'

class Inicio extends Component {
    constructor(props){
        super(props)

        this.state = {
            usuario: {},
            estaLogado: false
        }

        auth.onAuthStateChanged((usuario) => {
            if(usuario){
                this.setState({
                    usuario,
                    estaLogado: true
                })
                localStorage.setItem('nome', usuario.displayName)
                localStorage.setItem('foto', usuario.photoURL)
            } else {
                this.setState({ estaLogado: false})
            }
        })
    }

    autentica(provider){
        auth.signInWithPopup(providers[provider])
    }

    render(){
        if(this.state.estaLogado){
            return <Redirect to='/categorias' />
        }
        return (
            <div>
                <Navegacao />
                <Container>
                    <Segment pilled>
                        Quiz React
                    </Segment>
                    <p>
                        Desafie os seus amigos neste incrível jogo de perguntas e respostas
                    </p>
                    {
                        !this.state.estaLogado &&
                        <Card fluid>
                            <Card.Content>
                                Acesse agora mesmo!
                            </Card.Content>
                            <Card.Content>
                                <Button color='facebook' onClick={() => this.autentica('facebook')}>
                                    Login com Facebook
                                </Button>
                                <Button color='twitter'>
                                    Login com Twitter
                                </Button>
                                <Button basic color='blue'>
                                    Login como Administrador
                                </Button>
                            </Card.Content>
                        </Card>
                    }
                    {
                        this.state.estaLogado &&
                        <div>
                            <h3>{this.state.usuario.displayName}</h3>
                            <img src={this.state.usuario.photoURL}/>
                        </div>
                    }
                </Container>
            </div>
        )
    }
}

export default Inicio