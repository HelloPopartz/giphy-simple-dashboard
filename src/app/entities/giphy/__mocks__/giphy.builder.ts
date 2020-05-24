/* eslint-disable max-classes-per-file */
import { random, Builder, randomEnum, internet, image } from 'utils/tests'

import { GiphyData, GiphyDataType, GiphyDataRating } from '../giphy.types'

export class GiphyDataBuilder extends Builder<GiphyData> {
  protected instance: GiphyData = {
    id: random.uuid(),
    title: random.words(),
    slug: random.words(),
    type: randomEnum(GiphyDataType),
    url: internet.url(),
    bitly_url: internet.url(),
    username: random.words(),
    rating: randomEnum(GiphyDataRating),
    source: internet.url(),
    images: {
      // There are a bunch more of elements here, but for our demo we just need this
      ['preview_webp']: new GiphyImageData().getInstance(),
      ['preview']: new GiphyImageData().getInstance(),
      ['480w_still']: new GiphyImageData().getInstance(),
      ['original_still']: new GiphyImageData().getInstance(),
      ['original_mp4']: new GiphyImageData().getInstance(),
      original: new GiphyImageData().getInstance(),
    },
  }
}

// Despite not being entirely correct, a entity with all GiphyDataOriginalVideo params can be used for all the image data
// For mocking purposes we can use it
export class GiphyImageData extends Builder<any> {
  protected instance: any = {
    frames: random.number().toString(),
    size: random.number().toString(),
    url: image.imageUrl(),
    webp: image.imageUrl(),
    mp4: image.imageUrl(),
  }
}
