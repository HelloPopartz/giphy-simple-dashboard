import { useLocation } from 'react-router'
import queryString from 'query-string'

export function useQueryParams<T extends Record<string, any>>() {
  const { search } = useLocation()
  return queryString.parse(search) as T
}
