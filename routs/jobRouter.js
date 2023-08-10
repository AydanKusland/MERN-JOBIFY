import { Router } from 'express'
import {
	validateJobInput,
	validateIdParam
} from '../middleware/validationMiddleware.js'
const router = Router()

import {
	getAllJobs,
	getJob,
	createJob,
	deleteJob,
	updateJob
} from '../controllers/jobController.js'

router.route('/').get(getAllJobs).post(validateJobInput, createJob)
router
	.route('/:id')
	.get(validateIdParam, getJob)
	.patch(validateIdParam, validateJobInput, updateJob)
	.delete(validateIdParam, deleteJob)

export default router
