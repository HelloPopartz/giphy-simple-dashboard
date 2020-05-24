export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type BreakpointOptions = { [key in BreakpointKeys]: Breakpoint }
export type Breakpoint = string

export interface BreakpointUtils {
  values: BreakpointOptions
  up: (breakpoint: Breakpoint) => string
  down: (breakpoint: Breakpoint) => string
  between: (breakpoint: Breakpoint, end: Breakpoint) => string
  only: (breakpoint: Breakpoint) => string
}

export type WithBreakpointUtils = {
  breakpoints: BreakpointUtils
}

export const defaultBreakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
}

function up(breakpoint: Breakpoint) {
  return `@media (min-width:${breakpoint})`
}

function down(breakpoint: Breakpoint) {
  return `@media (max-width:${breakpoint})`
}

function between(start: Breakpoint, end: Breakpoint) {
  return `@media (min-width:${start}) and (max-width:${end})`
}

function only(breakpoint: Breakpoint) {
  return between(breakpoint, breakpoint)
}

export function createBreakpoints(breakpoints?: BreakpointOptions): BreakpointUtils {
  const values = {
    ...defaultBreakpoints,
    ...breakpoints,
  } as BreakpointOptions
  return {
    values,
    up,
    down,
    between,
    only,
  }
}
