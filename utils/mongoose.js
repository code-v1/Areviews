const mongoose = require('mongoose')

const uri =
  'mongodb+srv://sargtier1:123455687@cluster0-6ujmp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

var db = mongoose.connection

db.on('connected', () => {
  console.log(`> Connected to MongoDB at ${db.host}:${db.port}`)
})
