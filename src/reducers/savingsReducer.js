const initialSavingsState = {
   savings: []
}

export const savingsReducer = (state = initialSavingsState, action ) => {
        switch(action.type){
            case 'FETCH_SAVINGS':
                return {...state, savings: action.payload };
            default:
                return state
        }
    
}