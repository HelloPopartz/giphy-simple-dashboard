import React from 'react'
import { ExtendableStyles, Testable } from 'utils/react'

import { GiphyData, getGiphyImageUrl } from 'app/entities/giphy'
import { AsyncImage } from 'app/components'

export type GalleryImageDetailsPreviewProps = ExtendableStyles &
  Testable & {
    data: GiphyData
  }

export function GalleryImageDetailsPreview({ className, data, ...otherProps }: GalleryImageDetailsPreviewProps) {
  const { title: alt } = data
  const url = getGiphyImageUrl(data)
  const backgroundColor = getRandomBackgroundColor()
  return (
    <AsyncImage
      className={className}
      src={url}
      alt={alt}
      spinnerColor="white"
      style={{ backgroundColor }}
      role="img"
      {...otherProps}
    />
  )
}

function getRandomBackgroundColor() {
  const colors = ['#DC143C', '#66CDAA', '#FFD700']
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
