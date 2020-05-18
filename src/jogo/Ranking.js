import React, {Component} from 'react'
import {Container, List} from 'semantic-ui-react'

import Usuario from './Usuario'

class Ranking extends Component {
    render(){
        return (
            <div>
                <h2>Ranking</h2>

                <Container>
                    <List divided>
                        <Usuario
                            foto=''
                            nome='Fulano'
                            pontos='100' />

                        <Usuario
                            foto=''
                            nome='Ciclano'
                            pontos='98' />
                    </List>
                </Container>
            </div>
        )
    }
}

export default Ranking