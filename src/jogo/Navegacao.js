import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Image, Dropdown, Icon} from 'semantic-ui-react'
import firebase from 'firebase'
class Navegacao extends Component{
    constructor(props){
        super(props)

        this.state = {
            usuario: '',
            estaLogado: false
        }
    }

    componentDidMount(){
        const usuarioAtual = firebase.auth().currentUser
        if(usuarioAtual !== null){
            const usuarioLogado = {
                nome: usuarioAtual.displayName,
                foto: usuarioAtual.photoURL
            }
            this.setState({
                usuario: usuarioLogado,
                estaLogado: true
            })
        }
    }

    deslogarUsuario(){
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({
                    usuario: '',
                    estaLogado: false
                })
            })
            .catch(err => {

            })
    }

    render(){
        if(!this.state.estaLogado){
            return (
                <Menu>
                    <Menu.Item as={Link} to='/'>Para jogar, você deve se logar</Menu.Item>
                </Menu>
            )
        }
        const {foto, nome} = this.state.usuario
        return (
            <div>
                <header className="App-header">
                    <h1>Jogo de Perguntas e Respostas</h1>
                    <Menu>
                        <Menu.Item as={Link} to='/'>Home</Menu.Item>
                        <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
                        <Menu.Item as={Link} to='/perguntas'>Perguntas</Menu.Item>
                        <Menu.Item as={Link} to='/resultado'>Resultado</Menu.Item>
                        <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
                        <Menu.Menu position='right'>

                        {
                            this.state.estaLogado &&
                            <Menu.Item><Image avatar src={foto}/></Menu.Item>
                        }
                        {
                            this.state.estaLogado &&
                            <Dropdown item text={nome}>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={this.deslogarUsuario}>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                        {
                            !this.state.estaLogado &&
                            <Menu.Item><Icon name='user'/></Menu.Item>
                        }
                        </Menu.Menu>
                    </Menu>
                </header>
            </div>
        )
    }
}

export default Navegacao