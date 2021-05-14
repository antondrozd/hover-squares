import { useSelector } from 'react-redux'

import Cell from '../cell/cell.component'
import { selectGrid } from '../../redux/selectors'

const Grid = () => {
  const grid = useSelector(selectGrid)

  return (
    <>
      {grid.map((cell) => (
        <Cell key={`${cell.row}:${cell.col}`} {...cell} />
      ))}
    </>
  )
}

export default Grid
