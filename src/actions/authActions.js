import axios from 'axios'
import { SIGNUP_URL, LOGIN_URL } from '../constants/ApiConstants'

export const signup = data => dispatch => {
  axios
    .post(SIGNUP_URL, data)
    .then(res => {
      console.log('res', res.data)
    })
    .catch(err => {
      if (err.response) {
        const { msg } = err.response.data
        console.log(msg)
      }
    })
}

export const login = data => {
  return dispatch => {
    axios
      .post(LOGIN_URL, data)
      .then(res => {
        console.log('res', res.data)
      })
      .catch(err => {
        if (err.response) {
          const { msg } = err.response.data
          console.log(msg)
        }
      })
  }
}
