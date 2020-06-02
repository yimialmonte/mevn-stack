import User from '@models/User'

const login = (req, res) => {}

const register = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

export default {
  login,
  register
}
