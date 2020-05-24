import React from 'react'
import clsx from 'clsx'
import { makeStyles, AppTheme } from 'services/theme'

import Color from 'color'

import { UnStyledButton } from './UnStyledButton.component'

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
export function IconButton({ className, ...otherProps }: IconButtonProps) {
  const classes = useStyles()
  return <UnStyledButton className={clsx(className, classes.iconButton)} {...otherProps} />
}

const useStyles = makeStyles(({ spacing, palette }: AppTheme) => ({
  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing(),
    borderRadius: '50%',
    cursor: 'pointer',
    ['&:hover']: {
      backgroundColor: Color(palette.greyScale.black).alpha(0.1).toString(),
    },
  },
}))
