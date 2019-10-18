const express = require('express')
const router = express.Router()

const gamesCtrl = require('../../controllers/gameCtrl')

function checkAuth(req, res, next) {
  if (req.user) return next()
  return res.status(401).json({ msg: 'Unauthorized ' })
}

router.get('/')
router.post('/', checkAuth, gamesCtrl.addGame)

module.exports = router
