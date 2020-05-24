import { appSaga } from 'app/duck/app.operations'
import { all } from 'redux-saga/effects'

import { isProductionEnvironment } from 'utils/env'

export function* rootSaga() {
  while (true) {
    // Try catch prevents sagas from stopping
    // TODO: Add global error report
    try {
      yield all([appSaga()])
    } catch (e) {
      if (!isProductionEnvironment()) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    }
  }
}
