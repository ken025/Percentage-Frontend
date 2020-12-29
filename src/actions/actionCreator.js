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