import { requestBackend } from './request'
import { BASE_URL } from 'constants/system'
import * as accessTokenRepository from 'hooks'
import { NewUserProps, UserProps } from 'routes'
import axios, { AxiosRequestConfig } from 'axios'

export const UserApi = {
  newUser: async (data: NewUserProps) => {
    const response = await axios.post(`${BASE_URL}/signup`, data)
    return response.data
  },
  login: async (data: UserProps) => {
    const response = await axios.post(`${BASE_URL}/signin`, data)
    return response.data
  },
  findMe: async () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/users',
      signal: AbortSignal.timeout(5000),
    }
  
    return requestBackend(config)
  },
}

export const getAccessToken = () => {
  return accessTokenRepository.getToken()
}
