import { Store } from '../redux/store'
import {
  FETCH_GAME_MODES_REQUEST,
  FETCH_GAME_MODES_SUCCESS,
  FETCH_GAME_MODES_FAILURE,
} from '../redux/actions'

export interface IStore extends Store {}

export interface TypedAction<T extends string> {
  type: T
}

export interface IGameModes {
  [key: string]: {
    fields: number
  }
}

export interface IActionFetchGameModesRequest
  extends TypedAction<typeof FETCH_GAME_MODES_REQUEST> {}

export interface IActionFetchGameModesSuccess
  extends TypedAction<typeof FETCH_GAME_MODES_SUCCESS> {
  payload: IGameModes
}

export interface IActionFetchGameModesFailure
  extends TypedAction<typeof FETCH_GAME_MODES_FAILURE> {
  payload: Error
}

export type IActions =
  | IActionFetchGameModesRequest
  | IActionFetchGameModesSuccess
  | IActionFetchGameModesFailure
