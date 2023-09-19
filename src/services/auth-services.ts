import axios from 'axios'
import { NewUserProps } from 'routes'
import { BASE_URL } from 'constants/system'
import * as accessTokenRepository from 'hooks'

export const UserApi = {
  newUser: async (data: NewUserProps) => {
    const response = await axios.post(`${BASE_URL}/singup`, data )
    return response
  },
}

export const getAccessToken = () => {
  return accessTokenRepository.getToken()
}
