import { styled, WithAppTheme } from 'services/theme'
import Color from 'color'

export const Section = styled('section')(({ theme: { spacing, breakpoints, palette } }: WithAppTheme) => ({
  minWidth: spacing(80),
  maxWidth: spacing(120),
  padding: spacing(2, 4),
  borderRadius: spacing(),
  backgroundColor: palette.greyScale.white,
  boxShadow: `${Color(palette.greyScale.black).alpha(0.3).toString()} ${spacing(0, 0, 1.5, 0)}`,
  [breakpoints.down(breakpoints.values.md)]: {
    padding: spacing(2),
    minWidth: 0,
    maxWidth: '100vw',
  },
}))
