import { IStore } from '../interfaces/common.interfaces'

export const selectGameModes = (state: IStore) => state.gameModes
export const selectCurrentGameMode = (state: IStore) => state.currentGameMode
export const selectGrid = (state: IStore) => state.grid
export const selectError = (state: IStore) => state.error
