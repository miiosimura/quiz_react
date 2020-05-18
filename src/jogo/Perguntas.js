import React from 'react'
import {Grid, Radio, Button, Message} from 'semantic-ui-react'

const Perguntas = props => {
    return (
      <div>
          <h2>Perguntas sobre Profissões</h2>
          <p>Mostre que você conhece tudo sobre este assunto!</p>

          <h3>PERGUNTA: Qual é a profissão em que quem a exerce é especializado e trabalha com pés?</h3>

          <Grid columns={2} divided>
              <Grid.Row>
                  <Grid.Column>
                      <Message>
                          <p>Podólogo</p>
                          <Radio toggle/>
                      </Message>
                  </Grid.Column>
                  <Grid.Column>
                      <Message>
                          <p>Péologo</p>
                          <Radio toggle/>
                      </Message>
                  </Grid.Column>
                  <Grid.Column>
                      <Message>
                          <p>Ortopedista</p>
                          <Radio toggle/>
                      </Message>
                  </Grid.Column>
                  <Grid.Column>
                      <Message>
                          <p>Pediatrista</p>
                          <Radio toggle/>
                      </Message>
                  </Grid.Column>
              </Grid.Row>
          </Grid>

          <Button>Responder</Button>
      </div>
    )
}

export default Perguntas