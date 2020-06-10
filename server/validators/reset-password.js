import * as Yup from 'yup'
import User from '@models/User'
import ForgotPassword from '@models/PasswordReset'

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6)
    .required()
})

export default async (req, res, next) => {
  const { token } = req.body

  try {
    await ResetPasswordSchema.validate(req.body)

    const existingReset = await ForgotPassword.findOne({ token })

    if (!existingReset) {
      throw new Yup.ValidationError('Invalid reset token', req.body, 'password')
    }

    const timeInMinutes = Math.ceil(
      (new Date().getTime() - new Date(existingReset.createdAt).getTime()) /
        60000
    )

    const user = await User.findOne({ email: existingReset.email })

    if (timeInMinutes > 5) {
      await ForgotPassword.findOneAndDelete({ token })

      throw new Yup.ValidationError('Token expired', req.body, 'password')
    }

    req.user = user

    return next()
  } catch (error) {
    res.status(422).json({ [error.path]: error.message })
  }
}
