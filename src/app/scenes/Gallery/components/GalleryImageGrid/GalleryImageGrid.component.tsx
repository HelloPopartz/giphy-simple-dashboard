import React from 'react'
import { motion, AnimateSharedLayout } from 'services/animations'

import Masonry from 'react-masonry-css'

import { GiphyData } from 'app/entities/giphy'
import { ExtendableStyles, Testable } from 'utils/react'
import { AsyncContainer } from 'app/components/Loading'

import { makeStyles, AppTheme } from 'services/theme'

import { GalleryImage } from './components'

export type GalleryImageGridProps = ExtendableStyles &
  Testable & {
    loading: boolean
    data: GiphyData[]
    onClickImage: (data: GiphyData) => void
  }

export function GalleryImageGrid({ loading, data, onClickImage, ...otherProps }: GalleryImageGridProps) {
  const classes = useStyles()
  return (
    <AnimateSharedLayout>
      <motion.div animate {...otherProps}>
        <AsyncContainer alwaysShowContent loading={loading}>
          <Masonry breakpointCols={4} className={classes.gridContainer} columnClassName={classes.gridColumn}>
            {data.map((image, index) => {
              return (
                <motion.div animate key={`image-${index}`}>
                  <GalleryImage className={classes.galleryImage} data={image} onClick={onClickImage} />
                </motion.div>
              )
            })}
          </Masonry>
        </AsyncContainer>
      </motion.div>
    </AnimateSharedLayout>
  )
}

const useStyles = makeStyles(({ spacing }: AppTheme) => {
  const gridGap = spacing(2)
  return {
    container: {
      overflow: 'hidden',
    },
    gridContainer: {
      display: 'flex',
      marginLeft: `-${gridGap}`,
      width: 'auto',
    },
    gridColumn: {
      marginLeft: gridGap,
    },
    galleryImage: {
      display: 'block',
      marginBottom: gridGap,
      width: '100%',
    },
  }
})
