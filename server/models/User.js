import mongoose from 'mongoose'
import Bycrypt from 'bcryptjs'
import RandomString from 'randomstring'

const UserSchema = new mongoose.Schema({
  name: String,

  email: String,

  createdAt: Date,

  updateAt: Date,

  password: String,

  emailConfirmAt: Date,

  emailConfirmCode: String
})

UserSchema.pre('save', function() {
  this.password = Bycrypt.hashSync(this.password)

  this.emailConfirmCode = RandomString.generate(72)

  this.createdAt = new Date()
})

export default new mongoose.model('User', UserSchema)
