import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import Bycrypt from 'bcryptjs'
import RandomString from 'randomstring'
import Mail from '@fullstackjs/mail'
import config from '@config'
import PasswordReset from '@models/PasswordReset'
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

UserSchema.post('save', async function() {
  await new Mail('confirm-account')
    .to(this.email, this.name)
    .subject('Please confirm your email')
    .data({
      name: this.name,
      url: `${config.url}/auth/emails/confirm/${this.emailConfirmCode}`
    })
    .send()
})

UserSchema.methods.generateToken = function() {
  return jwt.sign({ id: this._id }, config.jwtSecret)
}

UserSchema.methods.comparePasswords = function(plainPassword) {
  return Bycrypt.compareSync(plainPassword, this.password)
}

UserSchema.methods.forgotPassword = async function() {
  const token = RandomString.generate(72)

  await PasswordReset.create({
    token,
    email: this.email,
    createdAt: new Date()
  })

  await new Mail('forgot-password')
    .to(this.email, this.name)
    .subject('Password Reset')
    .data({
      url: `${config.url}/auth/passwords/reset/${token}`,
      name: this.name
    })
    .send()
}

export default new mongoose.model('User', UserSchema)
