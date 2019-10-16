const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: '24h' })
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(401).json({ err: 'bad credentials' })
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user)
        res.json({ token })
      } else {
        return res.status(401).json({ err: 'bad credentials' })
      }
    })
  } catch (err) {
    return res.status(401).json(err)
  }
}

async function signup(req, res) {
  const parsedUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  const user = new User(parsedUser)
  try {
    await user.save()
    const token = createJWT(user)
    res.json({ token })
  } catch (err) {
    res.status(400).json(err)
  }
}

module.exports = {
  login,
  signup
}
