import { AsyncImage } from 'app/components'
import { GiphyData, GiphyDataLivePreview, getGiphyProportions, getGiphyLivePreviewUrl } from 'app/entities/giphy'
import React, { useRef, useLayoutEffect, useCallback } from 'react'
import { ExtendableStyles, Testable } from 'utils/react'
import { makeStyles, AppTheme } from 'services/theme'
import clsx from 'clsx'

import { GalleryImageInformation } from './GalleryImageInformation.component'

export type GalleryImageProps = ExtendableStyles &
  Testable & {
    data: GiphyData
    onClick: (data: GiphyData) => void
  }

export function GalleryImage({ className, data, onClick, ...otherProps }: GalleryImageProps) {
  const { title: alt } = data
  const { width, height } = getGiphyProportions(data)
  const src = getGiphyLivePreviewUrl(data)
  const classes = useStyles()
  const backgroundColor = getRandomBackgroundColor()
  const containerRef = useSizeComputation({ width, height })
  const handleClick = useCallback(() => {
    onClick(data)
  }, [data, onClick])

  return (
    <div
      className={clsx(className, classes.galleryImage)}
      ref={containerRef}
      style={{ backgroundColor }}
      onClick={handleClick}
      {...otherProps}
    >
      <GalleryImageInformation className={classes.galleryInformation} data={data} />
      <AsyncImage className={classes.image} src={src} alt={alt} spinnerColor="white" />
    </div>
  )
}

function useSizeComputation({ width, height }: Pick<GiphyDataLivePreview, 'width' | 'height'>) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    ref.current.style.height = computeHeightFromRealWidth(ref.current, { width, height })
  }, [width, height])

  return ref
}

function computeHeightFromRealWidth(
  element: HTMLDivElement | null,
  previewData: Pick<GiphyDataLivePreview, 'width' | 'height'>
) {
  if (!element) {
    return 'auto'
  }
  const aspectRatio = Number(previewData.height) / Number(previewData.width)
  const { width } = element.getBoundingClientRect()
  return `${width * aspectRatio}px`
}

function getRandomBackgroundColor() {
  const colors = ['#DC143C', '#66CDAA', '#FFD700']
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

const useStyles = makeStyles(({ spacing }: AppTheme) => ({
  galleryInformation: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
    ['&:hover']: {
      opacity: 1,
    },
  },
  galleryImage: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing(1),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
}))
