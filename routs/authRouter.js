import { Router } from 'express'
import { login, logout, register } from '../controllers/authController.js'
import {
	validateLoginInput,
	validateRegisterInput
} from '../middleware/validationMiddleware.js'

export const authRouter = new Router()

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
	windowMs: 15 * 60 * 1000,
	max: 15,
	message: {
		msg: 'Relax! Cool down! IP rate limit exceeded. Come back in 15 minutes.'
	}
})

authRouter.post('/register', apiLimiter, validateRegisterInput, register)
authRouter.post('/login', apiLimiter, validateLoginInput, login)
authRouter.get('/logout', logout)
