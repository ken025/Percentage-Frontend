const API = "http://localhost:3000"

export const fetchExpenses = () => {
    return dispatch => {
        fetch(API + "/expenses")
        .then(resp => resp.json())
        .then(expenses => dispatch({ 
            type: 'FETCH_EXPENSES', 
            payload: expenses
        }))
    }
}

export const addExpense = expense => {
    return dispatch => {
        fetch(API + "/expenses", {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
            'Content-Type': 'application/json' 
            }
        })
        .then(resp => resp.json())
        .then(expense => dispatch({ 
            type: 'ADD_EXPENSE', 
            payload: expense}
        ))
    }
}