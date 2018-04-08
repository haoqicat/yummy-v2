import * as types from '../constants/ActionTypes'

export const setTitle = title => dispatch => {
  dispatch({ type: types.SET_TITLE, title })
}

export const alert = msg => ({
  type: types.ALERT,
  msg
})
