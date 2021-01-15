import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import { userReducer } from './userReducer'
import { resourceReducer } from './resourceReducer'

// This is where we set the reducers we want to use as pieces of state
export const rootReducer = combineReducers({
    user: userReducer,
    accounts: accountReducer,
    resources: resourceReducer
})