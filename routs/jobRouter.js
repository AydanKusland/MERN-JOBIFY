import { Router } from 'express'
import {
	validateJobInput,
	validateIdParam
} from '../middleware/validationMiddleware.js'
import { checkForTestUser } from '../middleware/authMiddleware.js'

import {
	getAllJobs,
	getJob,
	createJob,
	deleteJob,
	updateJob,
	showStats
} from '../controllers/jobController.js'

const router = Router()

router
	.route('/')
	.get(getAllJobs)
	.post(checkForTestUser, validateJobInput, createJob)

router.route('/stats').get(showStats)

router
	.route('/:id')
	.get(validateIdParam, getJob)
	.patch(checkForTestUser, validateIdParam, validateJobInput, updateJob)
	.delete(checkForTestUser, validateIdParam, deleteJob)

export default router
