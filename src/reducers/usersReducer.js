const initialUsersState = {
    users: []
}

export const usersReducer = (state = initialUsersState, action ) => {
        switch(action.type){
            case 'FETCH_USERS':
                return {...state, users: action.payload };
            default:
                return state
        }
    
}