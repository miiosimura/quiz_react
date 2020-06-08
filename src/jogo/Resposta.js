import React from 'react'
import {List, Label, Icon} from 'semantic-ui-react'

const Resposta = props => {
    const {pergunta, resposta, key} = props
    return (
        <List.Item key={key}>
            <List.Content floated='left'>
                <Label>*</Label>
                {pergunta}
            </List.Content>
            <List.Content floated='right'>
                {resposta}
            </List.Content>
        </List.Item>
    )
}

export default Resposta

//thumbs up outline
//thumbs down outline