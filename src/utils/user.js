import tokenUtils from './token'
import axios from 'axios'

function signup(user) {
  return axios
    .post('/api/users/signup', user)
    .then(res => {
      let token = res.data.token
      tokenUtils.setToken(token)
      // else return new Error('Email already taken')
    })
    .catch(err => console.log(err))
}

function getUser() {
  return tokenUtils.getUserFromToken()
}

function logout() {
  tokenUtils.removeToken()
}

function login(creds) {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(creds)
  })
    .then(res => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json()
      throw new Error('Bad Credentials!')
    })
    .then(({ token }) => tokenUtils.setToken(token))
}
export default {
  login,
  signup,
  getUser,
  logout
}
