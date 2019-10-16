const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
  body: { type: String, required: true },
  user: { type: Schema.Types.ObjectId },
  gameID: { type: Schema.Types.ObjectId, ref: 'Game' },
  comments: { type: Schema.Types.ObjectId, ref: 'Comment' },
  date: new Date.now()
})

module.exports = mongoose.model('Comment', commentSchema)
