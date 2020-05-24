export type PaginationOptions = {
  currentPage: number
  limit: number
}

export type ApiPaginationOptions = {
  limit: number
  offset: number
}

export type ApiPagination = {
  offset: number
  total_count: number
  count: number
}

export type WithApiPagination = {
  pagination: ApiPagination
}

export function parsePaginationOptions(options?: PaginationOptions): ApiPaginationOptions | {} {
  if (!options) {
    return {}
  } else {
    const { currentPage, limit } = options
    return {
      offset: currentPage * limit,
      limit,
    }
  }
}
