import React, {Component} from 'react'
import {List, Container} from 'semantic-ui-react'

import Resposta from './Resposta'

const resposta = {
  id: 1,
  titulo: 'Pergunta 1',
  alternativa: 3
}

class Resultado extends Component {
    render(){
        return (
          <div>
              <h2>Seus resultados</h2>
              <p>Confira seu desempenho nesta categoria:</p>

              <Container>
                  <List divided>
                      <Resposta resposta={resposta}/>
                  </List>
              </Container>
          </div>
        )
    }
}

export default Resultado