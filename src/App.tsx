import GameField from './components/game-field/game-field.component'
import Logger from './components/logger/logger.components'

import { StyledApp, Container } from './app.styled'

const App = () => {
  return (
    <Container>
      <StyledApp>
        <GameField />
        <Logger />
      </StyledApp>
    </Container>
  )
}

export default App
