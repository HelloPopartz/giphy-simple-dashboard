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
  const backgroundColor = getRandomBackgroundColor()
  return (
    <AsyncImage
      className={className}
      src={webp}
      alt={alt}
      spinnerColor="white"
      style={{ backgroundColor }}
      {...otherProps}
    />
  )
}

function getRandomBackgroundColor() {
  const colors = ['#DC143C', '#66CDAA', '#FFD700']
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
