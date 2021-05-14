import { cloneDeep } from 'lodash'

import { ICell } from './interfaces/common.interfaces'

export const computeEmptyGrid = (size: number) => {
  const grid: ICell[] = []

  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      grid.push({ row, col, active: false })
    }
  }

  return grid
}

export const toggleGridCell = (
  grid: ICell[],
  cellProps: Pick<ICell, 'row' | 'col'>
) => {
  const { row, col } = cellProps
  const nextGrid = cloneDeep(grid)
  const cell = nextGrid.find((cell) => cell.row === row && cell.col === col)!

  cell.active = !cell.active

  return nextGrid
}
