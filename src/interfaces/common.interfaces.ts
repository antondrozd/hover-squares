import { Store } from '../redux/store'
import {
  FETCH_MODES_REQUEST,
  FETCH_MODES_SUCCESS,
  FETCH_MODES_FAILURE,
  SET_MODE,
  TOGGLE_START,
  TOGGLE_CELL_ACTIVE,
} from '../redux/actions'

export interface IStore extends Store {}

export interface TypedAction<T extends string> {
  type: T
}

export interface IModes {
  [key: string]: {
    field: number
  }
}

export interface ICell {
  row: number
  col: number
  active: boolean
}

export interface IActionFetchModesRequest
  extends TypedAction<typeof FETCH_MODES_REQUEST> {}

export interface IActionFetchModesSuccess
  extends TypedAction<typeof FETCH_MODES_SUCCESS> {
  payload: IModes
}

export interface IActionFetchModesFailure
  extends TypedAction<typeof FETCH_MODES_FAILURE> {
  payload: Error
}

export interface IActionSetMode extends TypedAction<typeof SET_MODE> {
  payload: { gridSize: number }
}

export interface IActionStart extends TypedAction<typeof TOGGLE_START> {}

export interface IActionToogleCell
  extends TypedAction<typeof TOGGLE_CELL_ACTIVE> {
  payload: Pick<ICell, 'row' | 'col'>
}

export type IActions =
  | IActionFetchModesRequest
  | IActionFetchModesSuccess
  | IActionFetchModesFailure
  | IActionSetMode
  | IActionStart
  | IActionToogleCell
