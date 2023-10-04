import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'

export const getAll = async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/purchase-list',
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}

export const getListById = async (id?: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/purchase-list/products?id=${id}`,
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}
