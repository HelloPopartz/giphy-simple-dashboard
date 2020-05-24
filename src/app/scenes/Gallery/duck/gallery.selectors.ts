import { createSelector } from 'reselect'
import { getAppState } from 'app/duck/app.selectors'
import { AppState } from 'app/duck/app.types'

import { GALLERY_STORE_ID } from './gallery.types'

export const getGalleryState = createSelector(getAppState, (appState: AppState) => appState[GALLERY_STORE_ID])

export const isGalleryLoading = createSelector(getGalleryState, ({ isLoading, data }) => isLoading || !data)

export const getGalleryImages = createSelector(getGalleryState, ({ data }) => data || [])

export const getGalleryPageSize = createSelector(getGalleryState, ({ limit }) => limit)
export const getGalleryApiTotalCount = createSelector(getGalleryState, ({ totalCount }) => totalCount)
