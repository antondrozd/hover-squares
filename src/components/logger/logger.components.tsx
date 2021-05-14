import { useSelector } from 'react-redux'

import { selectActiveCells } from '../../redux/selectors'

const Logger = () => {
  const activeCells = useSelector(selectActiveCells)

  return (
    <>
      <h2>Hover (active) squares:</h2>
      {activeCells.map(({ row, col }) => (
        <span>
          row {row} col {col}
        </span>
      ))}
    </>
  )
}

export default Logger
