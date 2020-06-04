import User from '@models/User'

const login = (req, res) => {}

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
