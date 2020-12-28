import { combineReducers } from 'redux'
import { expensessReducer } from './expensesReducer'
import { monthliesReducer } from './monthliesReducer'
import { savingsReducer } from './savingsReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    monthlies: monthliesReducer, 
    expenses: expensessReducer,
    savings: savingsReducer
})