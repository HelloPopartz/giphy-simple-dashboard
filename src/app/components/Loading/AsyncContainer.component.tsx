import React from 'react'

import clsx from 'clsx'
import { WithChildren, ExtendableStyles, Testable } from 'utils/react'

import { AppTheme, makeStyles } from 'services/theme'

import Color from 'color'

import { Spinner } from './Spinner.component'

export type AsyncContainerProps = WithChildren &
  ExtendableStyles &
  Testable & {
    loading: boolean
    alwaysShowContent?: boolean
    as?: keyof JSX.IntrinsicElements
  }

export function AsyncContainer({
  className,
  loading,
  as = 'div' as any,
  children,
  alwaysShowContent = false,
  ...otherProps
}: AsyncContainerProps) {
  const Component = as
  const classes = useStyles()
  const shouldShowContent = alwaysShowContent || !loading
  return (
    <Component className={clsx(className, classes.asyncContainer)} {...otherProps}>
      {loading && (
        <div className={clsx(classes.loadingContainer, shouldShowContent && classes.floatingSpinner)}>
          <Spinner />
        </div>
      )}
      {shouldShowContent && children}
    </Component>
  )
}

const useStyles = makeStyles(({ spacing, palette }: AppTheme) => ({
  asyncContainer: {
    position: 'relative',
  },
  loadingContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing(2),
  },
  floatingSpinner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: Color(palette.greyScale.white).alpha(0.7).toString(),
    zIndex: 2,
  },
}))
