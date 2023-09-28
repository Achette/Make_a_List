import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'

export const getLists = {
  getAll: async () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/purchase-list',
      signal: AbortSignal.timeout(5000),
    }

    return requestBackend(config)
  },
}
