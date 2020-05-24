import axios, { AxiosRequestConfig } from 'axios'

export type CreateApiHandler = {
  callApi: () => undefined
}

export type CreateApiHandlerConfig = {
  baseURL?: string
  extraHeaders?: Record<string, any>
}

export type ApiCaller = CreateApiHandler['callApi']

export function createApiHandler({ baseURL, extraHeaders = {} }: CreateApiHandlerConfig = {}) {
  const axiosInstance = axios.create({
    headers: extraHeaders,
    baseURL,
  })

  async function callApi<ReturnType>(config: AxiosRequestConfig): Promise<ReturnType> {
    // TODO: Map errors more precisely
    const response = await axiosInstance.request<ReturnType>(config)
    return response.data
  }

  return {
    callApi,
  }
}
