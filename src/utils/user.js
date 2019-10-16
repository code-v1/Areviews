import tokenUtils from './token'
import axios from 'axios'

function signup(user) {
  return axios
    .post('/api/users/signup', user)
    .then(res => tokenUtils.setToken(res.data.token))
    .catch(err => {
      console.log(err)
      new Error('Email already taken')
    })
}

function login(creds) {
  return axios
    .post('/api/users/login', creds)
    .then(res => tokenUtils.setToken(res.data.token))
    .catch(err => {
      console.log(err)
      new Error('Email already taken')
    })
}

function getUser() {
  return tokenUtils.getUserFromToken()
}

function logout() {
  tokenUtils.removeToken()
}

export default {
  login,
  signup,
  getUser,
  logout
}
