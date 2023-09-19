import { BASE_URL } from 'constants/system'

import axios, { AxiosRequestConfig } from 'axios'

export const requestBackend = (config: AxiosRequestConfig) => {
  return axios({ ...config, baseURL: BASE_URL })
}
