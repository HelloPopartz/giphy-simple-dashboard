import React from 'react'

import { AppTheme, makeStyles } from 'services/theme'
import { Section, SlideIn } from 'app/components'

import { AnimatePresence } from 'services/animations'

import { GalleryTitle, GalleryImageGrid, GalleryActions, GalleryImageDetails } from './components'
import { useGalleryActions, useGalleryEffects, useGalleryData } from './Gallery.container'

export function Gallery() {
  const classes = useStyles()
  const { detailImageData, currentPage, limit, galleryData, totalCount, isLoading } = useGalleryData()
  const { handlePageChange, openGalleryDetails, closeGalleryDetails } = useGalleryActions()
  useGalleryEffects({ currentPage, limit })
  return (
    <Section className={classes.gallery}>
      <AnimatePresence exitBeforeEnter initial={false}>
        {detailImageData && (
          <SlideIn className={classes.galleryDetails}>
            <GalleryImageDetails
              className={classes.galleryDetailsContent}
              data={detailImageData}
              onClose={closeGalleryDetails}
            />
          </SlideIn>
        )}
      </AnimatePresence>

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

const useStyles = makeStyles(({ spacing, palette }: AppTheme) => ({
  gallery: {
    width: '100%',
  },
  galleryDetails: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  galleryDetailsContent: {
    width: '100%',
    height: '100%',
    backgroundColor: palette.greyScale.white,
  },
  titleContainer: {
    marginBottom: spacing(5),
  },
  imageGrid: {
    width: '100%',
    marginBottom: spacing(5),
  },
}))
