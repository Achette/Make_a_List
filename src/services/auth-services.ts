import axios from 'axios'
import { BASE_URL } from 'constants/system'
import * as accessTokenRepository from 'hooks'
import { NewUserProps, UserProps } from 'routes'

export const UserApi = {
  newUser: async (data: NewUserProps) => {
    const response = await axios.post(`${BASE_URL}/singup`, data)
    return response.data
  },
  login: async (data: UserProps) => {
    const response = await axios.post(`${BASE_URL}/singin`, data)
    return response.data
  },
}

export const getAccessToken = () => {
  return accessTokenRepository.getToken()
}
