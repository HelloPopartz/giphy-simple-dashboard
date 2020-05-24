import { WithAppTheme, styled } from 'services/theme'

export const Title = styled('h1')(({ theme }: WithAppTheme) => ({
  fontFamily: theme.typography.family,
  fontSize: theme.typography.sizes.XL,
  fontWeight: theme.typography.weights.bold,
}))
