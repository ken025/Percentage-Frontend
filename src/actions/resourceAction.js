const API = "http://localhost:3000"

export const fetchResources = () => {
    return dispatch => {
      fetch(API + '/resources')
      .then(resp => resp.json())
      .then(resources => dispatch({
        type: 'FETCH_RESOURCES',
        payload: resources
      }))
    }
  }


  // console.log("Action", resources))