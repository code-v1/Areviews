const User = require('../models/user')
const Game = require('../models/Game')

async function addGame(req, res) {
  let user = User.findById({ email: req.user.email })
}

module.exports = {
  addGame
}
