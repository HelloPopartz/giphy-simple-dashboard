import { AppState } from 'app/duck/app.types'
import { Dispatch as ReduxDispatch } from 'redux'

import { RootAction } from './redux.actions'

export type RootState = {
  readonly app: AppState
}

export type Dispatch = ReduxDispatch<RootAction>
