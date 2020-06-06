import User from '@models/User'

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

export default {
  login,
  register
}
