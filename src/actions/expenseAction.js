const API = "http://localhost:3000"

export const fetchExpenses = () => {
    return (dispatch) => {
        fetch(API + "/expenses")
        .then(resp => resp.json())
        .then(expenses => dispatch({ 
            type: 'FETCH_EXPENSES', 
            payload: expenses
        }))
    }
}

export const addExpense = (expense, accountId) => {
  return (dispatch) => {
    fetch(API + `/${accountId}/expenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
    .then(response => response.json())
    .then(account => {
        if (account.error) {
          alert(account.error)
        } else {
          dispatch({type: 'ADD_EXPENSE',
           payload: account})
        }
      }
    )
  }
}

      export const deleteExpense = (expenseId, accountId) => {
        return (dispatch) => {
          return fetch(API + `/${accountId}/expenses/${expenseId}`, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(account => dispatch({type: 'DELETE_EXPENSE', 
          payload: account}))
        }
      }