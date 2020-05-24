import { all } from 'redux-saga/effects'
import { gallerySaga } from 'app/scenes/Gallery/duck/gallery.operations'

export function* appSaga() {
  yield all([gallerySaga()])
}
