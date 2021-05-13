import {
  FETCH_GAME_MODES_SUCCESS,
  FETCH_GAME_MODES_FAILURE,
} from '../redux/actions'

import { IActions, IGameModes } from '../interfaces/common.interfaces'

interface IState {
  gameModes: IGameModes | null
  currentGameMode: string | null
  grid: []
  error: Error | null
}

const initialState: IState = {
  gameModes: null,
  currentGameMode: null,
  grid: [],
  error: null,
}

const rootReducer = (state = initialState, action: IActions): IState => {
  switch (action.type) {
    case FETCH_GAME_MODES_SUCCESS:
      return {
        ...state,
        gameModes: action.payload,
        error: null,
      }
    case FETCH_GAME_MODES_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
