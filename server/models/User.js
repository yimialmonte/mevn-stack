import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,

  email: String,

  createdAt: Date,

  updateAt: Date,

  password: String,

  emailConfirmAt: Date,

  emailConfirmCode: String
})

export default new mongoose.model('User', UserSchema)
