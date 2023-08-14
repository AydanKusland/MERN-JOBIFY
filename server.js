import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

// routers
import jobRouter from './routs/jobRouter.js'
import { authRouter } from './routs/authRouter.js'
import userRouter from './routs/userRouter.js'

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
import { authenticateUser } from './middleware/authMiddleware.js'

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.get('/api/v1/test', (req, res) => {
	res.json({ msg: 'test route' })
})

app.use('/api/v1/jobs', authenticateUser, jobRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', authenticateUser, userRouter)

app.use('*', (req, res) => {
	res.status(404).json({ msg: 'page not found' })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5100

try {
	await mongoose.connect(process.env.MONGO_URL)
	app.listen(port, () => {
		console.log(`server is listening on port ${port}`)
	})
} catch (error) {
	console.log(error)
	process.exit(1)
}
