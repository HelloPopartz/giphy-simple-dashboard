import React from 'react'
import { ExtendableStyles, Testable } from 'utils/react'
import { GiphyData } from 'app/entities/giphy'
import clsx from 'clsx'
import Color from 'color'
import { makeStyles, AppTheme } from 'services/theme'
import { Body } from 'app/components'

export type GalleryImageInformationProps = ExtendableStyles &
  Testable & {
    data: GiphyData
  }

export function GalleryImageInformation({ className, data, ...otherProps }: GalleryImageInformationProps) {
  const classes = useStyles()
  const { title } = data
  return (
    <div className={clsx(className, classes.imageInformation)} {...otherProps}>
      <Body className={classes.imageInformationText}>{title}</Body>
    </div>
  )
}

const useStyles = makeStyles(({ spacing, palette, typography }: AppTheme) => ({
  imageInformation: {
    position: 'relative',
    padding: spacing(2),
    backgroundColor: Color(palette.greyScale.black).alpha(0.6).toString(),
  },
  imageInformationText: {
    fontWeight: typography.weights.bold,
    color: palette.greyScale.white,
  },
}))
