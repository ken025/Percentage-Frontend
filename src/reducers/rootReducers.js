import { combineReducers } from 'redux'
import { expensesReducer } from './expensesReducer'
import { savingsReducer } from './savingsReducer'
import { usersReducer } from './userReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    expenses: expensesReducer,
    savings: savingsReducer
})