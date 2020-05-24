export type GiphyData = {
  readonly id: GiphyDataId
  readonly title: string
  readonly slug: string
  readonly type: GiphyDataType
  readonly url: string
  readonly bitly_url: string
  readonly username: string
  readonly rating: GiphyDataRating
  readonly source: string
} & WithGiphyImageData

export type GiphyDataId = string

export enum GiphyDataType {
  gif = 'gif',
}

export enum GiphyDataRating {
  Y = 'Y',
  G = 'G',
  PG = 'PG',
  PG13 = 'PG-13',
  R = 'R',
}

export type WithDimensions = {
  width: string
  height: string
}

export type GiphyDataStill = {
  url: string
} & WithDimensions

export type GiphyDataLivePreview = {
  url: string
  size: string
} & WithDimensions

export type GiphyDataOriginalVideo = {
  frames: string
  size: string
  url: string
  webp: string
  mp4: string
} & WithDimensions

export type WithGiphyImageData = {
  images: {
    // There are a bunch more of elements here, but for our demo we just need this
    preview_webp: GiphyDataLivePreview
    preview: GiphyDataLivePreview
    '480w_still': GiphyDataStill
    original_still: GiphyDataStill
    original: GiphyDataOriginalVideo
    original_mp4: GiphyDataOriginalVideo
  }
}

export const IMAGE_STORE_ID = 'image'
