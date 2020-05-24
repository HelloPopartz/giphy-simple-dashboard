import { GiphyData, WithDimensions } from './giphy.types'

export function getGiphyLivePreviewUrl({ images }: GiphyData): string[] {
  return [images.preview.url, images.preview_webp.url, images['480w_still'].url]
}

export function getGiphyImageUrl({ images }: GiphyData): string[] {
  return [images.original_mp4.url, images.original.url, images.original_still.url]
}

export function getGiphyProportions({ images }: GiphyData): WithDimensions {
  const { width, height } = images.original
  return { width, height }
}
