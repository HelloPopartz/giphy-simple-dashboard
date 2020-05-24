import { combineReducers } from 'redux'

import { getType } from 'typesafe-actions'

import { GalleryActions, fetchImagesForGallery, unMountGallery } from './gallery.actions'
import { GalleryState, GALLERY_PAGE_SIZE, GALLERY_TOTAL_COUNT_LIMIT } from './gallery.types'

export const galleryReducer = combineReducers<GalleryState, GalleryActions>({
  data: (state = null, action) => {
    switch (action.type) {
      case getType(fetchImagesForGallery.success): {
        const { data } = action.payload
        return data
      }
      case getType(fetchImagesForGallery.failure):
      case getType(unMountGallery):
        return null
      default:
        return state
    }
  },
  isLoading: (state = false, action) => {
    switch (action.type) {
      case getType(fetchImagesForGallery.success):
      case getType(fetchImagesForGallery.failure):
      case getType(unMountGallery): {
        return false
      }
      case getType(fetchImagesForGallery.request):
        return true
      default:
        return state
    }
  },
  limit: () => GALLERY_PAGE_SIZE,
  totalCount: (state = null, action) => {
    switch (action.type) {
      case getType(fetchImagesForGallery.success): {
        const {
          pagination: { total_count },
        } = action.payload

        return total_count > GALLERY_TOTAL_COUNT_LIMIT ? GALLERY_TOTAL_COUNT_LIMIT : total_count
      }
      case getType(fetchImagesForGallery.failure):
      case getType(unMountGallery):
        return null
      default:
        return state
    }
  },
})
