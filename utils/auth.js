const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

module.exports = function(req, res, next) {
  let token = req.get('Authorization') || req.query.token || req.body.token
  if (token) {
    token = token.replacer('Bearer ', '')
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        next(err)
      } else {
        req.user = decoded.user
      }
    })
  } else {
    next()
  }
}
