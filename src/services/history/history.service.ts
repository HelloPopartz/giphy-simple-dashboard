import { createBrowserHistory } from 'history'
import queryString from 'query-string'

import { toArray } from 'utils/arrays'

import { isWebpage } from './history.helpers'

export const historyManager = createBrowserHistory()

export function goToRoute(path: string, queryParams: Record<string, any> = {}) {
  const parsedQueryParams = queryString.stringify(queryParams)
  const nextPath = `${path}${parsedQueryParams ? `?${parsedQueryParams}` : ''}`
  if (isWebpage(nextPath)) {
    window.location.href = nextPath
  } else {
    return historyManager.push(nextPath)
  }
}

export const goBack = historyManager.goBack

export function replaceRouteQueryParam(query: Record<string, any>) {
  const { location } = historyManager
  const currentParams = queryString.parse(location.search)
  const newQueryParams = { ...currentParams, ...query }
  goToRoute(location.pathname, newQueryParams)
}

export function removeRouteQueryParam(queryParam: string | string[]) {
  const paramsToRemove = toArray(queryParam)
  const { location } = historyManager
  const newParams = queryString.parse(location.search)
  paramsToRemove.forEach(param => {
    delete newParams[param]
  })
  goToRoute(location.pathname, newParams)
}
