import * as Yup from 'yup'
import User from '@models/User'

const EmailConfirmSchema = Yup.object().shape({
  token: Yup.string()
    .required()
})

export default (req, res, next) => {
  try {
    await EmailConfirmSchema.validate(req.body)

    const user = await User.findOne({ emailConfirmCode: req.body.token })
    if(!user) {
      throw new Yup.ValidationError(
        'Invalid Confirm code',
        req.body,
        'token'
      )
    }

    req.user = user
    return next()
  }
  catch (error) {
    return res.status(422).json({
      [error.type]: error.message
    })
  }
}
