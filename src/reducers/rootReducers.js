import { combineReducers } from 'redux'
import { expensesReducer } from './expensesReducer'
import { savingsReducer } from './savingsReducer'
import { userReducer } from './userReducer'


export const rootReducer = combineReducers({
    user: userReducer,
    expenses: expensesReducer,
    savings: savingsReducer
})