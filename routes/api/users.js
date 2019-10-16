const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/userCtrl')

/**
 * POST to api/users
 * login new users to site
 * publicly accessible
 */

router.post('/signup', usersCtrl.signup)

router.post('/login', usersCtrl.login)

module.exports = router
