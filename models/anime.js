const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animeSchema = new Schema(
  {
    title: { type: String, required: true },
    malId: { type: Number, required: true, unique: true },
    imageUrl: { type: String, required: true },
    synopsis: { type: String, required: true },
    premiere: { type: String, required: true },
    status: { type: String, required: true },
    score: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.models('Anime', animeSchema)
