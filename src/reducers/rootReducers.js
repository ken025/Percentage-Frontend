import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import { userReducer } from './userReducer'
import { resourceReducer } from './resourceReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    accounts: accountReducer,
    resources: resourceReducer
})