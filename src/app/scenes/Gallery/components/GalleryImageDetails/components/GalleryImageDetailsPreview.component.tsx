import React from 'react'
import { ExtendableStyles, Testable } from 'utils/react'

import { GiphyData, getGiphyPreview } from 'app/entities/giphy'
import { AsyncImage } from 'app/components'

export type GalleryImageDetailsPreviewProps = ExtendableStyles &
  Testable & {
    data: GiphyData
  }

export function GalleryImageDetailsPreview({ className, data, ...otherProps }: GalleryImageDetailsPreviewProps) {
  const { title: alt } = data
  const { webp } = getGiphyPreview(data)
  return <AsyncImage className={className} src={webp} alt={alt} spinnerColor="white" {...otherProps} />
}
