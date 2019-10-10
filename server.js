const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const userRouter = require('./routes/users')
const animeRouter = require('./routes/animes')
const commentRouter = require('./routes/comments')

require('./utils/mongoose')

const port = process.env.PORT || 5001

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

// Router mounts

/*
app.use('/users', userRouter)
app.use('/animes', animeRouter)
app.use('/comments', commentRouter)
*/

// Production catch all route to handle unexpected requests
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(() => console.log(`> Server is listening on port ${port}`))
