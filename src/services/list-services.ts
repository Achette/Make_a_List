import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'

export const getLists = {
  getAll: async () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/purchase-list',

    }

    return requestBackend(config)
  },
}
