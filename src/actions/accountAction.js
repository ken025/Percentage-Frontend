const API = "http://localhost:3000"

export const addAccount = (data) => {
    return (dispatch) => {
      fetch(API + '/accounts', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(account => dispatch({type: 'ADD_ACCOUNT',
       payload: account}))
    }
  }

  export const editAccount = (data) => {
    return (dispatch) => {
      fetch(API + `/accounts/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(account => dispatch({type: 'EDIT_ACCOUNT', 
      payload: account}))
    }
  }

  export function fetchAccounts() {
    return (dispatch) => {
      fetch(API + '/accounts')
      .then(resp => resp.json())
      .then(accounts => dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: accounts
      }))
    }
  }