import React from 'react'

import { ExtendableStyles } from 'utils/react'
import { Title, Subtitle } from 'app/components'

export type GalleryTitleProps = ExtendableStyles

export function GalleryTitle(props: GalleryTitleProps) {
  return (
    <header {...props}>
      <Title>Domestika test gallery</Title>
      <Subtitle>With React, Redux, Sagas and many other things</Subtitle>
    </header>
  )
}
