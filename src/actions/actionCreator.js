const API = "http://localhost:3000"

export const like = () => ({type: "ADD_LIKE"})
// thunk allows us to return a function that takes in an argument of dispatch then use it 
export const setSavings = () => {
    return dispatch => {
        fetch(API + "/savings")
        .then(resp => resp.json())
        .then(savings => dispatch({
            type: "FETCH_SAVINGS",
            payload: savings
        })
    )}
}

export const setExpenses = () => {
    return dispatch => {
        fetch(API + "/expenses")
        .then(resp => resp.json())
        .then(expenses => dispatch({
            type: "FETCH_EXPENSES",
            payload: expenses
        })
    )}
}

export const setMonthlies = () => {
    return dispatch => {
        fetch(API + "/monthlies")
        .then(resp => resp.json())
        .then(monthlies => dispatch({
            type: "FETCH_MONTHLIES",
            payload: monthlies
        })
    )}
}

export const logout = () => {
    return dispatch => {
      localStorage.clear("token")
      dispatch({type: "LOGOUT"})
    }
  }