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
      // case 'DELETE_ACCOUNT':
      //   let accountsTwo = state.accounts.map(account => {
      //     if (account.id === action.payload.id) {
      //       return action.payload
      //     } else {
      //       return account {{...state, accounts: accountsTwo}}
      //     }
      //   })
      default:
        return state
    }
  }

  // export default function accountReducer(state = {accounts: []}, action) {
  //   switch (action.type) {
  //     case 'FETCH_ACCOUNTS':
  //       return {accounts: action.payload}
  //     case 'ADD_ACCOUNT':
  //       return {...state, accounts: [...state.accounts, action.payload]}
  //     case 'EDIT_ACCOUNT':
  //       let accountsThree = state.accounts.map(account => {
  //         if (account.id === action.payload.id) {
  //           return action.payload
  //         } else {
  //           return account
  //         }
  //       })
  //       return {...state, accounts: accountsThree}
  //     // case 'DELETE_ACCOUNT':
  //     //   let accountsTwo = state.accounts.map(account => {
  //     //     if (account.id === action.payload.id) {
  //     //       return action.payload
  //     //     } else {
  //     //       return account {{...state, accounts: accountsTwo}}
  //     //     }
  //     //   })
  //     default:
  //       return state
  //   }
  // }