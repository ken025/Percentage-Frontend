const API = "http://localhost:3000"

export function fetchResources() {
    return (dispatch) => {
      fetch(API + '/resources')
      .then(resp => resp.json())
      .then(resources => console.log("Action", resources))
      //   dispatch({
      //   type: 'FETCH_RESOURCES',
      //   payload: resources
      // }))
    }
  }