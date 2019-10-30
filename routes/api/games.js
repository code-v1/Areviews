const express = require('express')
const router = express.Router()

const gamesCtrl = require('../../controllers/gameCtrl')

function isAuthed(req, res, next) {
  if (req.user) return next()
  return res.status(401).json({ msg: 'Unauthorized ' })
}

router.get('/')
router.post('/', isAuthed, gamesCtrl.addGame)

module.exports = router
