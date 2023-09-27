import { AxiosRequestConfig } from 'axios'
import { requestBackend } from './request'

function fetchWithTimeout(timeoutMs: number) {
  const abortController = new AbortController()
  setTimeout(() => abortController.abort(), timeoutMs || 0)

  return abortController.signal
}

export const getLists = {
  getAll: async () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/purchase-list',
      signal: fetchWithTimeout(5000),
    }

    return requestBackend(config)
  },
}
