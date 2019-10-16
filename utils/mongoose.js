const mongoose = require('mongoose')

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})


var db = mongoose.connection

db.on('connected', () => {
  console.log(`> Connected to MongoDB at ${db.host}:${db.port}`)
})
