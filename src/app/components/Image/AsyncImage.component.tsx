import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Img } from 'react-image'
import { AppTheme } from 'services/theme'

import clsx from 'clsx'

import { isInternetExplorer } from 'utils/browser'

import { Spinner } from '../Loading'

// React-image documentation -> https://github.com/mbrevda/react-image#readme
// Using legacy component to give support to Edge

export type AsyncImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string | string[]
  spinnerColor?: string
}

export function AsyncImage({ className, src, srcSet, alt = '', spinnerColor, style, ...otherProps }: AsyncImageProps) {
  const classes = useStyles()
  const spinnerComponent = (
    <div className={clsx(className, classes.spinnerContainer)} style={style}>
      <Spinner size={30} singleColor={spinnerColor} />
    </div>
  )
  const processedSrc = src || srcSet || ''
  return (
    <Img
      className={className}
      src={processedSrc}
      loader={spinnerComponent}
      alt={alt}
      style={style}
      decode={!isInternetExplorer()}
      {...otherProps}
    />
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
