import { useSelector } from 'react-redux'

import { selectActiveCells } from '../../redux/selectors'

import { LogList, Message, Header } from './logger.styled'

const Logger = () => {
  const activeCells = useSelector(selectActiveCells)

  return (
    <div>
      <Header>Hover (active) squares:</Header>
      <LogList>
        {activeCells.map(({ row, col }) => (
          <Message key={`${row}:${col}`}>
            row {row} col {col}
          </Message>
        ))}
      </LogList>
    </div>
  )
}

export default Logger
