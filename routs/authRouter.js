import { Router } from 'express'
import { login, logout, register } from '../controllers/authController.js'
import {
	validateLoginInput,
	validateRegisterInput
} from '../middleware/validationMiddleware.js'

export const authRouter = new Router()

authRouter.post('/register', validateRegisterInput, register)
authRouter.post('/login', validateLoginInput, login)
authRouter.get('/logout', logout)
