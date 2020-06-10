import User from '@models/User'
import Bcrypt from 'bcryptjs'
import PasswordReset from '@models/PasswordReset'

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    if (user.comparePasswords(password)) {
      const token = user.generateToken()
      return res.json({
        user,
        token
      })
    }
  }

  return res.status(400).json({
    email: 'These credencial do not match our records'
  })
}

const register = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()

    const token = user.generateToken()

    res.status(201).json({ user, token })
  } catch (error) {
    res.status(500).send(error)
  }
}

const forgotPassword = async (req, res) => {
  await req.user.forgotPassword()

  return res.json({
    message: 'Password link sent.'
  })
}

const resetPassword = async (req, res) => {
  const user = req.user

  await User.findOneAndUpdate(
    {
      email: user.email
    },
    {
      password: Bcrypt.hashSync(req.body.password)
    }
  )

  await PasswordReset.findOneAndDelete({
    email: user.email
  })

  return res.json({ message: 'Password reset successfully' })
}

const confirmEmail = async (req, res) => {
  const user = await User.findOneAndUpdate(
    {
      email: req.user.email
    },
    {
      emailConfirmCode: null,
      emailConfirmedAt: new Date()
    },

    { new: true }
  )
}

export default {
  login,
  register,
  forgotPassword,
  resetPassword,
  confirmEmail
}
