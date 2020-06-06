import { Router } from 'express'
import authController from '@controllers/v1/auth.controller'
import registerValidator from '@validators/register'
import loginValidator from '@validators/login'

const authRouter = new Router()

authRouter.post('/login', loginValidator, authController.login)

authRouter.post('/register', registerValidator, authController.register)

export default authRouter
