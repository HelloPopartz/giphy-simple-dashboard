import { GiphyData } from 'app/entities/giphy'

// Since we have only one entity and we are not going to modify it, I added it directly to the scene instead of normalizing it
// In case of having more entities follow this approach -> https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape

export type GalleryState = {
  data: GiphyData[] | null
  totalCount: number | null
  limit: number
  isLoading: boolean
}

export const GALLERY_PAGE_SIZE = 20

// For some reason the pagination returned from GIPHY is not working correctly
// If we try to go to the last page it will return undefined
// TODO: Investigate this, for now we limit this result
export const GALLERY_TOTAL_COUNT_LIMIT = 25 * GALLERY_PAGE_SIZE

export const GALLERY_STORE_ID = 'gallery'
