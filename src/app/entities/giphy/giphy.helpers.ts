import { GiphyData, GiphyDataStill, GiphyDataLivePreview, GiphyDataOriginalVideo } from './giphy.types'

export function getGiphyPreviewStill({ images }: GiphyData): GiphyDataStill {
  return images['480w_still']
}

export function getGiphyLivePreview({ images }: GiphyData): GiphyDataLivePreview {
  return images.preview_webp
}

export function getGiphyPreview({ images }: GiphyData): GiphyDataOriginalVideo {
  return images.original
}
