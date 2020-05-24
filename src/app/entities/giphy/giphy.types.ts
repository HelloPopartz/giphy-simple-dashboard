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

export type GiphyDataStill = {
  url: string
  width: string
  height: string
}

export type GiphyDataLivePreview = {
  width: string
  height: string
  url: string
  size: string
}

export type WithGiphyImageData = {
  images: {
    // There are a bunch more of elements here, but for our demo we just need this
    ['preview_webp']: GiphyDataLivePreview
    ['preview']: GiphyDataLivePreview
    ['480w_still']: GiphyDataStill
  }
}

export const IMAGE_STORE_ID = 'image'
