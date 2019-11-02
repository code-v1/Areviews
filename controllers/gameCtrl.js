const User = require('../models/user')
const Game = require('../models/Game')

async function getGames(req, res) {
  try {
    const games = await User.findById(req.user._id)
      .populate('favGames')
      .exec()
    return res.status(200).json(games)
  } catch (err) {
    console.log(err)
  }
}

async function addGame(req, res) {
  try {
    let game = await Game.create({
      name: req.body.name,
      twitchID: req.body.id,
      boxArtUrl: req.body.box_art_url
    })

    let user = await User.findById(req.user._id)

    if (user) {
      user.favGames.push(game)
      await user.save()
      res.status(200).send(user)
    } else {
      console.log('user not found')
      res.status(404).send('user cannot found')
    }
  } catch (err) {
    console.log('Error: ', err)
    res.status(500).send('Something happened while adding your game')
  }
}

module.exports = {
  addGame,
  getGames
}
