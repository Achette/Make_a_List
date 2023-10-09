import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'

export const getAll = async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/groups',
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}

export const getGroupById = async (id?: string) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/groups?id=${id}`,
    signal: AbortSignal.timeout(5000),
  }

  return requestBackend(config)
}
