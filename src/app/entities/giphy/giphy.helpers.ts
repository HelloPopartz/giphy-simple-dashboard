import { GiphyData, GiphyDataStill, GiphyDataLivePreview } from './giphy.types'

export function getGiphyPreviewStill({ images }: GiphyData): GiphyDataStill {
  return images['480w_still']
}

export function getGiphyLivePreview({ images }: GiphyData): GiphyDataLivePreview {
  return images.preview_webp
}
