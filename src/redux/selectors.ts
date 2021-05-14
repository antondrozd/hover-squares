import { ICell, IStore } from '../interfaces/common.interfaces'

export const selectModes = (state: IStore) => state.modes
export const selectGrid = (state: IStore) => state.grid
export const selectActiveCells = (state: IStore) =>
  state.grid.reduce((accumulator: Pick<ICell, 'row' | 'col'>[], cell) => {
    if (cell.active) {
      const { row, col } = cell

      accumulator.push({ row, col })
    }

    return accumulator
  }, [])
export const selectIsStarted = (state: IStore) => state.isStarted
export const selectIsLoading = (state: IStore) => state.isLoading
export const selectError = (state: IStore) => state.error
