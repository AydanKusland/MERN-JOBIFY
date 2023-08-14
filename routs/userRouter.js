import { Router } from 'express'
import {
	getApplicationStats,
	getCurrentUser,
	updateUser
} from '../controllers/userController.js'
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js'
import { authorizePermissions } from '../middleware/authMiddleware.js'

const userRouter = new Router()

userRouter.get('/current-user', getCurrentUser)
userRouter.get(
	'/admin/app-stats',
	authorizePermissions('admin'),
	getApplicationStats
)
userRouter.patch('/update-user', validateUpdateUserInput, updateUser)

export default userRouter
