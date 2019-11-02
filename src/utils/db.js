import tokenUtils from '../utils/token'

let token = tokenUtils.getToken()

let config = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
}

export default config
