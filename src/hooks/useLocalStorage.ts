import { TOKEN_KEY, USER_KEY } from 'constants/system'
/* 
    TOKEN
*/

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

/*
    USER
*/

export const saveUser = (token: string) => {
  localStorage.setItem(USER_KEY, token)
}

export const getUser = (): string | null => {
  return localStorage.getItem(USER_KEY)
}
