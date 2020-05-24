import { WithAppTheme, styled } from 'services/theme'

export const Subtitle = styled('h2')(({ theme }: WithAppTheme) => ({
  fontFamily: theme.typography.family,
  fontSize: theme.typography.sizes.L,
  fontWeight: theme.typography.weights.light,
}))
