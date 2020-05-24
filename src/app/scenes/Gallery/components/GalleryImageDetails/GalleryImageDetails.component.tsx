import React from 'react'
import { ExtendableStyles, Testable } from 'utils/react'
import clsx from 'clsx'
import { makeStyles, AppTheme } from 'services/theme'

import { GiphyData } from 'app/entities/giphy'

import { GalleryImageDetailsActions, GalleryImageDetailsPreview, GalleryImageDetailsInformation } from './components'

export type GalleryImageDetailsProps = ExtendableStyles &
  Testable & {
    data: GiphyData
    onClose: () => void
  }

export function GalleryImageDetails({ className, onClose, data, ...otherProps }: GalleryImageDetailsProps) {
  const classes = useStyles()
  return (
    <div className={clsx(className, classes.galleryImageDetails)} {...otherProps}>
      <div className={classes.galleryImageDetailsContent}>
        <GalleryImageDetailsPreview className={classes.galleryImageDetailsPreview} data={data} />
        <GalleryImageDetailsInformation data={data} />
      </div>
      <GalleryImageDetailsActions className={classes.galleryImageDetailsActions} onClose={onClose} />
    </div>
  )
}

const useStyles = makeStyles(({ spacing }: AppTheme) => ({
  galleryImageDetails: {
    position: 'relative',
    display: 'flex',
  },
  galleryImageDetailsContent: {
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    padding: spacing(3),
    paddingRight: spacing(15),
  },
  galleryImageDetailsPreview: {
    maxHeight: '100%',
    minWidth: '66%',
    objectFit: 'contain',
    borderRadius: spacing(),
  },
  galleryImageDetailsActions: {
    position: 'absolute',
    right: 0,
    top: 0,
    flex: '0 0 auto',
    height: '100%',
  },
}))
