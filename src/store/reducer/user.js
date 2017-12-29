import fetch from 'isomorphic-fetch'
const FETCH_USER = 'FETCH_USER'
const url = 'http://localhost:3000/api/data'

export const fetchUser = () => async dispatch => {
  let data = await (await fetch(url)).json()
  dispatch({ type: FETCH_USER, payload: data })
}

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload
    default:
      return state
  }
}
