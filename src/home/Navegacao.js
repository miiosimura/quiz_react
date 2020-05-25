import React from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'

const Navegacao = props => {
  return (
    <div>
      <header className="App-header">
        <h1>Jogo de Perguntas e Respostas</h1>
        <Menu>
          <Menu.Item></Menu.Item>
          <Menu.Menu position='right'>
            <Dropdown item text='Entrar'>
              <Dropdown.Menu>
                <Dropdown.Item>Facebook</Dropdown.Item>
                <Dropdown.Item>Twitter</Dropdown.Item>
                <Dropdown.Item>Admin</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </header>
    </div>
  )
}

export default Navegacao