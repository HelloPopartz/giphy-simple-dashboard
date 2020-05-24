import { WithAppTheme, styled } from 'services/theme'

export const Body = styled('p')(({ theme }: WithAppTheme) => ({
  fontFamily: theme.typography.family,
  fontSize: theme.typography.sizes.M,
  margin: 0,
}))
