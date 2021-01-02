export const savingsReducer = (state = [], action ) => {
        switch(action.type){
            case 'FETCH_SAVINGS':
                return action.payload;
            default:
                return state
        }
    
}