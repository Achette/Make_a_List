import { BASE_URL } from 'constants/system'
import { getAccessToken } from './auth-services'
import axios, { AxiosRequestConfig } from 'axios'

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = {
    authorization: getAccessToken(),
  }

  return axios({ ...config, baseURL: BASE_URL, headers })
}
