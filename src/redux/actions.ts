import { ThunkAction } from 'redux-thunk'

import API from '../api'

import { IModes, IStore, IActions } from '../interfaces/common.interfaces'

export const FETCH_MODES_REQUEST = 'FETCH_MODES_REQUEST'
export const FETCH_MODES_SUCCESS = 'FETCH_MODES_SUCCESS'
export const FETCH_MODES_FAILURE = 'FETCH_MODES_FAILURE'

export const SET_MODE = 'SET_MODE'
export const TOGGLE_START = 'TOGGLE_START'
export const TOGGLE_CELL_ACTIVE = 'TOGGLE_CELL_ACTIVE'

export const fetchModes =
  (): ThunkAction<void, IStore, unknown, IActions> => async (dispatch) => {
    dispatch({ type: FETCH_MODES_REQUEST })

    try {
      const modes = await API.getModes()

      dispatch(fetchModesSuccess(modes))
    } catch (error) {
      dispatch(fetchModesFailure(error))
    }
  }

export const fetchModesSuccess = (modes: IModes): IActions => ({
  type: FETCH_MODES_SUCCESS,
  payload: modes,
})

export const fetchModesFailure = (error: Error): IActions => ({
  type: FETCH_MODES_FAILURE,
  payload: error,
})

export const setMode =
  (mode: string): ThunkAction<void, IStore, unknown, IActions> =>
  (dispatch, getState) => {
    const gridSize = getState().modes![mode].field

    if (getState().isStarted) dispatch(toggleStart())
    dispatch({ type: SET_MODE, payload: { gridSize } })
  }

export const toggleStart = (): IActions => ({
  type: TOGGLE_START,
})

export const toggleCellActive = (row: number, col: number) => ({
  type: TOGGLE_CELL_ACTIVE,
  payload: { row, col },
})
