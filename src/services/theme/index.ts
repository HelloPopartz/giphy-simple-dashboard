import { WithSpacingUtils, SpacingUnit, createSpacing } from './spacing'
import { WithTypographyUtils, FontStyleOptions, createTypography } from './typography'
import { WithPalette, PaletteOptions, createPalette } from './palette'
import { BreakpointOptions, createBreakpoints, WithBreakpointUtils } from './breakpoints'

// Design system inspired in @material-ui

export type AppTheme = WithSpacingUtils & WithTypographyUtils & WithPalette & WithBreakpointUtils

export type WithAppTheme = {
  theme: AppTheme
}

export type ThemeOptions = {
  spacingUnit?: SpacingUnit
  palette?: PaletteOptions
  typography?: FontStyleOptions
  breakpoints?: BreakpointOptions
}

export function createTheme({ spacingUnit, palette, typography, breakpoints }: ThemeOptions = {}): AppTheme {
  const spacingUtils = createSpacing(spacingUnit)
  const paletteUtils = createPalette(palette)
  const typographyUtils = createTypography(typography)
  const breakpointUtils = createBreakpoints(breakpoints)
  return {
    palette: paletteUtils,
    typography: typographyUtils,
    breakpoints: breakpointUtils,
    ...spacingUtils,
  }
}

export * from '@material-ui/styles'
