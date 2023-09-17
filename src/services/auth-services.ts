import * as accessTokenRepository from 'hooks'

export const getAccessToken = () => {
    return accessTokenRepository.getToken()
  }