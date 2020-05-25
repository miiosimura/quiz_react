import React from 'react'
import { Container, Segment, Card, Button } from 'semantic-ui-react'

import Navegacao from './Navegacao'

const Inicio = props => {
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
                <Card fluid>
                    <Card.Content>
                        Acesse agora mesmo!
                    </Card.Content>
                    <Card.Content>
                        <Button color='facebook'>
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
            </Container>
        </div>
    )
}

export default Inicio