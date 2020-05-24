import { GALLERY_STORE_ID, GalleryState } from 'app/scenes/Gallery/duck/gallery.types'

export type AppState = {
  readonly [GALLERY_STORE_ID]: GalleryState
}
