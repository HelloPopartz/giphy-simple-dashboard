import { styled } from 'services/theme'

// Buttons are a tricky tag, they always have inherited styles
// Migrated styles from this https://gist.github.com/MoOx/9137295

export const UnStyledButton = styled('button')({
  border: 'none',
  margin: 0,
  padding: 0,
  width: 'auto',
  overflow: 'visible',

  background: 'transparent',

  /* inherit font & color from ancestor */
  color: 'inherit',
  font: 'inherit',

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  lineHeight: 'normal',

  /* Corrects font smoothing for webkit */
  ['-webkit-font-smoothing']: 'inherit',
  ['-moz-osx-font-smoothing']: 'inherit',

  /* Corrects inability to style clickable `input` types in iOS */
  ['-webkit-appearance']: 'none',

  ['&::-moz-focus-inner']: {
    border: 0,
    padding: 0,
  },
})
