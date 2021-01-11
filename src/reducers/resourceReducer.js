export const resourceReducer = (state = [ ], action ) => {
    switch(action.type){
        case 'FETCH_RESOURCES':
            return action.payload;
        default:
            return state
    }
}