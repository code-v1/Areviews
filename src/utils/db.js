import axios from 'axios'
import tokenUtils from '../utils/token'

const config = {
  headers: { Authorization: `bearer ${tokenUtils.getToken()}` }
}

export default {
  addGame: function(game) {
    return axios.post('/api/games', game, config)
  }
}
