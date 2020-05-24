import { ApiGiphyListResponse, GiphyDataId } from 'app/entities/giphy'
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { PaginationOptions } from 'utils/api'

export const fetchImagesForGallery = createAsyncAction(
  'app/gallery/MOUNT_REQUEST',
  'app/gallery/MOUNT_SUCCESS',
  'app/gallery/MOUNT_FAILURE'
)<PaginationOptions, ApiGiphyListResponse, Error>()

export const unMountGallery = createAction('app/gallery/UN_MOUNT')<undefined>()

export const showImageDetails = createAction('app/gallery/SHOW_IMAGE_DETAILS')<GiphyDataId>()
export const closeImageDetails = createAction('app/gallery/CLOSE_IMAGE_DETAILS')<undefined>()

export const changeCurrentPage = createAction('app/gallery/CHANGE_CURRENT_PAGE')<number>()

export type GalleryActions = ActionType<typeof fetchImagesForGallery | typeof unMountGallery>
