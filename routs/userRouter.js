import { Router } from 'express'
import {
	getApplicationStats,
	getCurrentUser,
	updateUser
} from '../controllers/userController.js'
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js'
import { authorizePermissions } from '../middleware/authMiddleware.js'
import upload from '../middleware/multerMiddleware.js'

const userRouter = new Router()

userRouter.get('/current-user', getCurrentUser)
userRouter.get(
	'/admin/app-stats',
	authorizePermissions('admin'),
	getApplicationStats
)
userRouter.patch(
	'/update-user',
	upload.single('avatar'),
	validateUpdateUserInput,
	updateUser
)

export default userRouter
