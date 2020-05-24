import { MemoryHistory } from 'history'
import { last } from 'utils/arrays'

export function getLastRoutePathname({ entries }: MemoryHistory) {
  const lastEntry = last(entries)
  return lastEntry ? `${lastEntry.pathname}${lastEntry.search}` : ''
}
