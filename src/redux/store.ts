import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducer'

export type Store = ReturnType<typeof rootReducer>

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [thunk]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
