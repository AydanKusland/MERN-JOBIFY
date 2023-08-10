import { Router } from 'express'
import { login, register } from '../controllers/authController.js'
import { validateRegisterInput } from '../middleware/validationMiddleware.js'

export const authRouter = new Router()

authRouter.post('/register', validateRegisterInput, register)
authRouter.post('/login', login)
