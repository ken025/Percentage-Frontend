import { combineReducers } from 'redux'
import { expensesReducer } from './expensesReducer'
import { monthliesReducer } from './monthliesReducer'
import { savingsReducer } from './savingsReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    monthlies: monthliesReducer, 
    expenses: expensesReducer,
    savings: savingsReducer
})