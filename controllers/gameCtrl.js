const User = require('../models/user')
const Game = require('../models/Game')

async function addGame(req, res) {
  let game = await User.findById(req.user._id)
}

module.exports = {
  addGame
}
