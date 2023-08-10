import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'

// routers
import jobRouter from './routs/jobRouter.js'
import { authRouter } from './routs/authRouter.js'

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1/jobs', jobRouter)
app.use('/api/v1/auth', authRouter)

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
