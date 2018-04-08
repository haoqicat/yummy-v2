import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const title = (state = 'Yummy', action) => {
  switch (action.type) {
    case types.SET_TITLE:
      return action.title
    default:
      return state
  }
}

const alert = (state = { isShown: false, msg: '' }, action) => {
  switch (action.type) {
    case types.ALERT:
      return { isShown: true, msg: action.msg }
    default:
      return state
  }
}

export default combineReducers({
  title,
  alert
})
