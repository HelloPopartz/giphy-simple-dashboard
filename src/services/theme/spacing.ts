export type WithSpacingUtils = {
  spacing: (n1?: number, n2?: number, n3?: number, n4?: number) => string
  spacingUnit: number
}

export type SpacingUnit = number

export function isUndefined(x: any) {
  return x === undefined
}

export function createSpacing(spacingUnit: SpacingUnit = 8) {
  function transformSpacingValue(n: number) {
    return n * spacingUnit
  }

  function parseCssSize(input: number | string) {
    return typeof input === 'number' && input !== 0 ? `${input}px` : `${input}`
  }

  function spacing(n1?: number, n2?: number, n3?: number, n4?: number) {
    if (isUndefined(n2) && isUndefined(n3) && isUndefined(n4)) {
      const factor = (!isUndefined(n1) ? n1 : 1) as number
      const output = transformSpacingValue(factor)
      return parseCssSize(output)
    }

    const validNumbers = [n1, n2, n3, n4].filter(n => !isUndefined(n)) as number[]
    return validNumbers
      .map(factor => {
        const output = transformSpacingValue(factor)
        return parseCssSize(output)
      })
      .join(' ')
  }
  return {
    spacing,
    spacingUnit,
  }
}
