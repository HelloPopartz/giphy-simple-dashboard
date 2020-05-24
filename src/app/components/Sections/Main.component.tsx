import { ExtendableStyles, WithChildren } from 'utils/react'
import { styled, WithAppTheme } from 'services/theme'

export type MainProps = ExtendableStyles & WithChildren

export const Main = styled('main')(({ theme: { palette, spacing } }: WithAppTheme) => ({
  position: 'relative',
  backgroundColor: palette.greyScale.frost,
  padding: spacing(2),
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))
