import { useSelector } from 'react-redux'

import Cell from '../cell/cell.component'
import { selectGrid, selectGridSize } from '../../redux/selectors'

import { StyledGrid } from './grid.styled'

const Grid = () => {
  const grid = useSelector(selectGrid)
  const gridSize = useSelector(selectGridSize)

  return (
    <StyledGrid gridSize={gridSize}>
      {grid.map((cell) => (
        <Cell key={`${cell.row}:${cell.col}`} {...cell} />
      ))}
    </StyledGrid>
  )
}

export default Grid
