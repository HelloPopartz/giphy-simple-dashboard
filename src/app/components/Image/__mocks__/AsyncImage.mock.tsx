import React from 'react'
import * as ReactImage from 'react-image'

import { isArray } from 'lodash'

import * as AsyncImage from '../AsyncImage.component'

export function mockAsyncImage() {
  jest.spyOn(ReactImage, 'useImage').mockImplementation(({ srcList }) => ({
    src: (isArray(srcList) ? srcList[0] : srcList) as string | undefined,
    isLoading: false,
    error: undefined,
  }))
  jest
    .spyOn(AsyncImage, 'AsyncImage')
    .mockImplementation(({ src, spinnerColor, ...otherProps }: AsyncImage.AsyncImageProps) => {
      const processedSrc = (isArray(src) ? src[0] : src) as string | undefined
      return <img src={processedSrc} {...otherProps} />
    })
}
