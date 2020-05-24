import { CSSProperties } from 'react'

export type TypographyUtils = FontStyle & {
  pxToRem: (size: number) => string
}

export type WithTypographyUtils = {
  typography: TypographyUtils
}

export type FontStyle = {
  rootSize: number
  family: CSSProperties['fontFamily']
  sizes: {
    display: number
    XL: number
    L: number
    M: number
    S: number
    XS: number
  }
  weights: {
    light: CSSProperties['fontWeight']
    regular: CSSProperties['fontWeight']
    medium: CSSProperties['fontWeight']
    bold: CSSProperties['fontWeight']
  }
}

export type FontStyleOptions = Partial<FontStyle>

const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif'

const defaultSizes = {
  display: 60,
  XL: 32,
  L: 20,
  M: 17,
  S: 14,
  XS: 12,
}

const defaultWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
}

export function createTypography({
  rootSize = 16,
  family = defaultFontFamily,
  sizes = defaultSizes,
  weights = defaultWeights,
}: FontStyleOptions = {}): TypographyUtils {
  const pxToRem = (size: number) => `${size / rootSize}rem`

  return {
    rootSize,
    family,
    sizes,
    weights,
    pxToRem,
  }
}
