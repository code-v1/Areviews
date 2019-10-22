const express = require('express')
const morgan = require('morgan')
const path = require('path')
const favicon = require('serve-favicon')

require('dotenv').config()
require('./utils/mongoose')

const port = process.env.PORT || 5001
const app = express()

app.use(morgan('dev'))
app.use(express.json())
// extended false lets us get data from req.body

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/users', require('./routes/api/users'))
app.use(require('./utils/auth'))
app.use('/api/games', require('./routes/api/games'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
})
