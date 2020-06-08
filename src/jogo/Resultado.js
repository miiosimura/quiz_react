import React, {Component} from 'react'
import {List, Container} from 'semantic-ui-react'

import Resposta from './Resposta'
import Navegacao from './Navegacao'

class Resultado extends Component {
    render(){
        const {resultado} = this.props.location.state
        return (
          <div>
              <Navegacao />
              <h2>Seus resultados</h2>
              <p>Confira seu desempenho nesta categoria:</p>
              <Container>
                  <List divided>
                    {
                        Object.keys(resultado.resultado)
                            .map(key => {
                                return <Resposta pergunta={resultado[key].pergunta}
                                                 resposta={resultado[key].resposta}
                                                 key={key}/>
                            })
                    }
                  </List>
              </Container>
          </div>
        )
    }
}

export default Resultado