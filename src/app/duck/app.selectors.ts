import { RootState } from 'services/redux/redux.types'

export function getAppState(state: RootState) {
  return state.app
}
