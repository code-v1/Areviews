const mongoose = require('mongoose')

const Schema = mongoose.Schema

let gameSchema = new Schema({
  name: { type: String, required: true },
  boxArtUrl: { type: String, required: true },
  twitchID: { type: String, required: true },
  comments: { type: Schema.Types.ObjectId, ref: "Comment"}
})

module.exports = mongoose.model('Game', gameSchema)
