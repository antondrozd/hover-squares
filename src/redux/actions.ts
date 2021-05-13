import { ThunkAction } from 'redux-thunk'

import API from '../api'

import { IGameModes, IStore, IActions } from '../interfaces/common.interfaces'

export const FETCH_GAME_MODES_REQUEST = 'FETCH_GAME_MODES_REQUEST'
export const FETCH_GAME_MODES_SUCCESS = 'FETCH_GAME_MODES_SUCCESS'
export const FETCH_GAME_MODES_FAILURE = 'FETCH_GAME_MODES_FAILURE'

export const TOGGLE_CELL = 'TOGGLE_CELL'

export const fetchGameModes =
  (): ThunkAction<void, IStore, unknown, IActions> => async (dispatch) => {
    dispatch({ type: FETCH_GAME_MODES_REQUEST })

    try {
      const modes = await API.getGameModes()

      dispatch(fetchGameModesSuccess(modes))
    } catch (error) {
      dispatch(fetchGameModesFailure(error))
    }
  }

export const fetchGameModesSuccess = (modes: IGameModes): IActions => ({
  type: FETCH_GAME_MODES_SUCCESS,
  payload: modes,
})

export const fetchGameModesFailure = (error: Error): IActions => ({
  type: FETCH_GAME_MODES_FAILURE,
  payload: error,
})
