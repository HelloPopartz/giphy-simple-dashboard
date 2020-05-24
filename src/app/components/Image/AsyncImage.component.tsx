import { makeStyles } from '@material-ui/styles'
import React, { Suspense } from 'react'
import { useImage } from 'react-image'
import { AppTheme } from 'services/theme'

import clsx from 'clsx'

import { Spinner } from '../Loading'

export type AsyncImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  spinnerColor?: string
}

function AsyncImageInternal({ src, srcSet, alt = '', ...otherProps }: AsyncImageProps) {
  const { src: processedSrc } = useImage({
    srcList: src || srcSet || '',
  })
  return <img src={processedSrc} alt={alt} {...otherProps} />
}

export function AsyncImage({ className, spinnerColor, style, ...otherProps }: AsyncImageProps) {
  const classes = useStyles()
  const spinnerComponent = (
    <div className={clsx(className, classes.spinnerContainer)} style={style}>
      <Spinner size={30} singleColor={spinnerColor} />
    </div>
  )
  return (
    <Suspense fallback={spinnerComponent}>
      <AsyncImageInternal className={className} style={style} {...otherProps} />
    </Suspense>
  )
}

const useStyles = makeStyles(({ spacing }: AppTheme) => ({
  spinnerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing(3),
  },
}))
