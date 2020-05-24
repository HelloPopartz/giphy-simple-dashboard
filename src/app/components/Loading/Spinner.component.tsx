import React from 'react'
import { ExtendableStyles, Testable } from 'utils/react'
import { AppTheme, useTheme } from 'services/theme'
import { default as InternalSpinner } from 'react-md-spinner'

export type SpinnerProps = ExtendableStyles &
  Testable & {
    singleColor?: string
    size?: number
    borderSize?: number
    duration?: number
    color1?: string
    color2?: string
    color3?: string
    color4?: string
  }

export function Spinner({
  size: sizeProp,
  'data-testid': dataTestid = 'loading-spinner',
  ...otherProps
}: SpinnerProps) {
  const { spacingUnit }: AppTheme = useTheme()
  const size = sizeProp || spacingUnit * 5
  return <InternalSpinner data-testid={dataTestid} size={size} {...otherProps} />
}
