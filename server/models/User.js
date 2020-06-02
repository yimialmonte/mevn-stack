import mongoose from 'mongoose'
import Bycrypt from 'bcryptjs'
import RandomString from 'randomstring'
import Mail from '@fullstackjs/mail'
import config from '@config'

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

export default new mongoose.model('User', UserSchema)
