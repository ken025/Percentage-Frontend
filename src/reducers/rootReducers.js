import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    accounts: accountReducer
})