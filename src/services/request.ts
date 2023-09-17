import { BASE_URL } from 'constants/system'
import { getAccessToken } from './auth-services'
import axios, { AxiosRequestConfig } from 'axios'

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAccessToken(),
      }
    : config.headers

  return axios({ ...config, baseURL: BASE_URL, headers })
}
