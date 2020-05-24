import React from 'react'
import { ExtendableStyles, WithChildren } from 'utils/react'

import clsx from 'clsx'

import { makeStyles, AppTheme } from 'services/theme'

import { FullHeightContainer } from './FullHeightContainer.component'

export type MainProps = ExtendableStyles & WithChildren

const mainStyles = {
  minHeight: '100rvh',
}

export function Main({ className, ...props }: MainProps) {
  const classes = useStyles()
  return (
    <FullHeightContainer as="main" className={clsx(className, classes.mainSection)} style={mainStyles} {...props} />
  )
}

const useStyles = makeStyles(({ spacing, palette }: AppTheme) => ({
  mainSection: {
    position: 'relative',
    backgroundColor: palette.greyScale.frost,
    padding: spacing(2),
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))
