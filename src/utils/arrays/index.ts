import { isArray } from 'util'

export { last, compact } from 'lodash'

export function toArray<T>(data: T | T[]): T[] {
  return isArray(data) ? data : [data]
}
