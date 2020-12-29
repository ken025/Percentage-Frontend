export const monthliesReducer = (state = [ ], action ) => {
    switch(action.type){
        case 'FETCH_MONTHLIES':
            return action.payload
        default:
            return state
    }
}