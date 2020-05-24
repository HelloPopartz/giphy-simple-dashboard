import { appReducer } from 'app/duck/app.reducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  app: appReducer,
})
