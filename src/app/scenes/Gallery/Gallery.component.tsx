import React from 'react'

import { AppTheme, makeStyles } from 'services/theme'
import { Section } from 'app/components'

import { GalleryTitle, GalleryImageGrid, GalleryActions } from './components'
import { useGalleryActions, useGalleryEffects, useGalleryData } from './Gallery.container'

export function Gallery() {
  const classes = useStyles()
  const { detailImageData, currentPage, limit, galleryData, totalCount, isLoading } = useGalleryData()
  const { handlePageChange, openGalleryDetails } = useGalleryActions()
  useGalleryEffects({ currentPage, limit })
  return (
    <Section className={classes.gallery}>
      <GalleryTitle className={classes.titleContainer} />
      <GalleryImageGrid
        className={classes.imageGrid}
        loading={isLoading}
        data={galleryData}
        onClickImage={openGalleryDetails}
      />
      <GalleryActions
        currentPage={currentPage}
        limit={limit}
        totalCount={totalCount}
        onPageChange={handlePageChange}
        loading={isLoading}
      />
    </Section>
  )
}

const useStyles = makeStyles(({ spacing }: AppTheme) => ({
  gallery: {
    width: '100%',
  },
  titleContainer: {
    marginBottom: spacing(5),
  },
  imageGrid: {
    width: '100%',
    marginBottom: spacing(5),
  },
}))
