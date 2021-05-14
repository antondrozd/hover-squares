import {
  FETCH_MODES_REQUEST,
  FETCH_MODES_SUCCESS,
  FETCH_MODES_FAILURE,
  SET_MODE,
  TOGGLE_START,
  TOGGLE_CELL_ACTIVE,
} from '../redux/actions'
import { toggleGridCell, computeEmptyGrid } from '../utils'

import { IActions, ICell, IModes } from '../interfaces/common.interfaces'

interface IState {
  modes: IModes | null
  grid: ICell[]
  isModeSelected: boolean
  isStarted: boolean
  isLoading: boolean
  error: Error | null
}

const initialState: IState = {
  modes: null,
  grid: [],
  isModeSelected: false,
  isStarted: false,
  isLoading: true,
  error: null,
}

const rootReducer = (state = initialState, action: IActions): IState => {
  switch (action.type) {
    case FETCH_MODES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case FETCH_MODES_SUCCESS:
      return {
        ...state,
        modes: action.payload,
        isLoading: false,
        error: null,
      }
    case FETCH_MODES_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case SET_MODE:
      return {
        ...state,
        isModeSelected: true,
        grid: computeEmptyGrid(action.payload.gridSize),
      }
    case TOGGLE_START:
      return {
        ...state,
        isStarted: !state.isStarted,
      }
    case TOGGLE_CELL_ACTIVE:
      return {
        ...state,
        grid: toggleGridCell(state.grid, action.payload),
      }
    default:
      return state
  }
}

export default rootReducer
