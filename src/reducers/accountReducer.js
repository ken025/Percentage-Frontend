export default function accountReducer(state = [], action) {
    switch (action.type) {
      case 'FETCH_ACCOUNTS':
        return action.payload

      case 'ADD_ACCOUNT':
        return [...state, action.payload]

      case 'EDIT_ACCOUNT':
        let accountsThree = state.map(account => {
          if (account.id === action.payload.id) {
            return action.payload
          } else {
            return account
          }
        })
        return [...state, accountsThree]

      case 'DELETE_ACCOUNT':
        let accountsTwo = state.filter(account => 
          account.id !== action.payload) 
        return [...accountsTwo]
        
      default:
        return state
    }
  }