import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getType, ActionType } from 'typesafe-actions'

import { getGiphyApiHandlers, ApiGiphyListResponse } from 'app/entities/giphy'

import { replaceRouteQueryParam, removeRouteQueryParam } from 'services/history'

import { scrollToTop } from 'utils/dom'

import { fetchImagesForGallery, changeCurrentPage, showImageDetails, closeImageDetails } from './gallery.actions'

export function* gallerySaga() {
  yield all([
    takeLatest(getType(fetchImagesForGallery.request), fetchImagesForGalleryEffect),
    takeLatest(getType(changeCurrentPage), changeCurrentPageEffect),
    takeLatest(getType(showImageDetails), showImageDetailsEffect),
    takeLatest(getType(closeImageDetails), closeImageDetailsEffect),
  ])
}

function* fetchImagesForGalleryEffect(action: ActionType<typeof fetchImagesForGallery.request>) {
  try {
    const { getTrendingGifs } = getGiphyApiHandlers()
    const apiResponse: ApiGiphyListResponse = yield call(getTrendingGifs, action.payload)
    yield put(fetchImagesForGallery.success(apiResponse))
  } catch (e) {
    yield put(fetchImagesForGallery.failure(e))
  }
}

function changeCurrentPageEffect(action: ActionType<typeof changeCurrentPage>) {
  replaceRouteQueryParam({ currentPage: action.payload })
  scrollToTop()
}

function showImageDetailsEffect(action: ActionType<typeof changeCurrentPage>) {
  replaceRouteQueryParam({ showDetails: action.payload })
}

function closeImageDetailsEffect() {
  removeRouteQueryParam('showDetails')
}
