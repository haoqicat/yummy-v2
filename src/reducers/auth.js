import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
      return true
    case types.RECEIVE_CURRENT_USER:
      return true
    case types.LOGOUT:
      return false
    default:
      return state
  }
}

const currentUserId = (state = '', action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
    case types.RECEIVE_CURRENT_USER:
      return action.user._id
    default:
      return state
  }
}
export default combineReducers({
  isAuthenticated,
  currentUserId
})
