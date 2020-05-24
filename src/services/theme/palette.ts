export type Palette = {
  greyScale: {
    black: string
    dark: string
    grey: string
    metal: string
    lightGrey: string
    frost: string
    white: string
  }
}

export type PaletteOptions = Partial<Palette>

export type WithPalette = {
  palette: Palette
}

export function createPalette(paletteOptions: PaletteOptions = {}): Palette {
  return {
    ...defaultPalette,
    ...paletteOptions,
  }
}

const defaultPalette = {
  // TODO: Add more colors if necessary
  greyScale: {
    black: '#000',
    dark: '#333',
    grey: '#777',
    metal: '#BBB',
    lightGrey: '#d8d6d8',
    frost: '#f0f0f0',
    white: '#FFF',
  },
}
