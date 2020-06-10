import { Router } from 'express'
import authController from '@controllers/v1/auth.controller'
import registerValidator from '@validators/register'
import loginValidator from '@validators/login'
import forgotPasswordValidator from '@validators/forgot-password'
import resetPasswordValidator from '@validators/reset-password'
import emailConfirmValidator from '@validators/email-confirm'

const authRouter = new Router()

authRouter.post('/login', loginValidator, authController.login)

authRouter.post('/register', registerValidator, authController.register)

authRouter.post(
  '/passwords/email',
  forgotPasswordValidator,
  authController.forgotPassword
)

authRouter.post(
  '/passwords/reset',
  resetPasswordValidator,
  authController.resetPassword
)

authRouter.post(
  '/emails/confirm',
  emailConfirmValidator,
  authController.confirmEmail
)

export default authRouter
