import { GIPHY_MAIN_ENDPOINT, GIPHY_API_KEY, isProductionEnvironment, GIPHY_PROXY_ENDPOINT } from 'utils/env'
import { createApiHandler } from 'services/api'
import { WithApiData, WithApiPagination, WithApiMetadata, PaginationOptions, parsePaginationOptions } from 'utils/api'

import { GiphyData } from './giphy.types'

export const IMAGE_API_ENDPOINT = isProductionEnvironment() ? GIPHY_MAIN_ENDPOINT : GIPHY_PROXY_ENDPOINT
export const IMAGE_API_KEY = GIPHY_API_KEY

export type ApiGiphyListResponse = WithApiData<GiphyData[]> & WithApiPagination & WithApiMetadata

export function getGiphyApiHandlers(token?: string) {
  const apiKeyParams = { api_key: token || IMAGE_API_KEY }

  const { callApi } = createApiHandler({ baseURL: IMAGE_API_ENDPOINT })

  async function getTrendingGifs(pagination: PaginationOptions): Promise<ApiGiphyListResponse> {
    return callApi({
      method: 'GET',
      url: '/gifs/trending',
      params: {
        ...apiKeyParams,
        ...parsePaginationOptions(pagination),
      },
    })
  }

  return {
    getTrendingGifs,
  }
}
