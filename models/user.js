const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    favGames: { type: Schema.Types.ObjectId, ref: 'Game' },
    comments: { type: Schema.Types.ObjectId, ref: 'Comment' }
  },
  {
    timestamps: true
  }
)

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password
    return ret
  }
})

userSchema.pre('save', function(next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next()
    user.password = hash
    next()
  })
})

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb)
}

module.exports = mongoose.model('User', userSchema)
