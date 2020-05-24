import React from 'react'
import { ExtendableStyles, Testable } from 'utils/react'

import ArrowBackIcon from 'mdi-react/ArrowBackIcon'
import clsx from 'clsx'
import { makeStyles, AppTheme } from 'services/theme'
import { UnStyledButton } from 'app/components/Buttons/UnStyledButton.component'

export type GalleryImageDetailsActionsProps = ExtendableStyles &
  Testable & {
    onClose: () => void
  }

export function GalleryImageDetailsActions({
  className,
  onClose,
  'data-testid': dataTestid,
  ...otherProps
}: GalleryImageDetailsActionsProps) {
  const classes = useStyles()
  return (
    <div className={clsx(className, classes.actionContainer)} data-testid={dataTestid} {...otherProps}>
      <UnStyledButton className={classes.backButton} onClick={onClose} data-testid={`${dataTestid}-back`}>
        <ArrowBackIcon className={classes.backButtonIcon} /> <span className={classes.backButtonLabel}>Back</span>
      </UnStyledButton>
    </div>
  )
}

const useStyles = makeStyles(({ spacing, typography }: AppTheme) => ({
  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: spacing(3),
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  backButtonLabel: {
    marginLeft: spacing(),
    fontSize: typography.sizes.display,
    fontFamily: typography.family,
    fontWeight: typography.weights.bold,
  },
  backButtonIcon: {
    width: spacing(6),
    height: spacing(6),
  },
}))
