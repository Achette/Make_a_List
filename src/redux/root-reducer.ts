import { combineReducers } from 'redux'
import lists from './reducers/lists'
import user from './reducers/user'

export const rootReducer = combineReducers({ lists, user })
