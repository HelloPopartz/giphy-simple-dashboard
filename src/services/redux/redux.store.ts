import { applyMiddleware, createStore, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './redux.operations'
import { rootReducer } from './redux.reducers'
import { RootState } from './redux.types'

export const sagaMiddleware = createSagaMiddleware()

export const configureStore = (initialState?: RootState) => {
  const composeEnhancers = composeWithDevTools({
    serialize: true,
  })
  const middlewares: Middleware[] = []
  middlewares.push(sagaMiddleware)

  const newStore = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))
  sagaMiddleware.run(rootSaga)

  return newStore
}
