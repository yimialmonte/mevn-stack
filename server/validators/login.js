import * as Yup from 'yup'

const LogingSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .min(6)
    .required()
})

export default (req, res, next) =>
  LogingSchema.validate(req.body)
    .then(() => next())
    .catch(error => res.status(422).json({ [error.path]: error.message }))
