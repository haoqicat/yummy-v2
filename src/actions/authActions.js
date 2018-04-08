import axios from 'axios'
import { SIGNUP_URL, LOGIN_URL } from '../constants/ApiConstants'
import { history } from '../utils/routerUtils'
import { alert } from './index'
import * as types from '../constants/ActionTypes'

export const signup = data => dispatch => {
  axios
    .post(SIGNUP_URL, data)
    .then(res => {
      dispatch({ type: types.SIGNUP_SUCCESS, user: res.data.user })
      history.push('/dashboard')
    })
    .catch(err => {
      if (err.response) {
        const { msg } = err.response.data
        console.log(msg)
        dispatch(alert(msg))
      }
    })
}

export const login = data => {
  return dispatch => {
    axios
      .post(LOGIN_URL, data)
      .then(res => {
        dispatch({ type: types.LOGIN_SUCCESS, user: res.data.user })
        history.push('/dashboard')
      })
      .catch(err => {
        if (err.response) {
          const { msg } = err.response.data
          console.log(msg)
          dispatch(alert(msg))
        }
      })
  }
}

export const logout = () => {
  history.push('/')
  return dispatch => dispatch({ type: types.LOGOUT })
}
