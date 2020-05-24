import { galleryReducer } from 'app/scenes/Gallery/duck/gallery.reducers'
import { GALLERY_STORE_ID } from 'app/scenes/Gallery/duck/gallery.types'
import { combineReducers } from 'redux'

import { AppState } from './app.types'

export const appReducer = combineReducers<AppState>({
  [GALLERY_STORE_ID]: galleryReducer,
})
