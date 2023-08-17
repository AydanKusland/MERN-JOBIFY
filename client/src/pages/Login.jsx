import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow, SubmitBtn } from '../components'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'

export const action = async ({ request }) => {
	const formData = await request.formData()
	const data = Object.fromEntries(formData)
	try {
		await customFetch.post('/auth/login', data)
		toast.success('Logged In Successfully!')
		return redirect('/dashboard')
	} catch (error) {
		toast.error(error?.response?.data?.msg)
		return error
	}
}

const Login = () => {
	const navigate = useNavigate()

	const loginTestUser = async () => {
		const data = {
			email: 'test@gmail.com',
			password: 'secret123'
		}
		try {
			await customFetch.post('/auth/login', data)
			toast.success('Take a Test Drive!')
			navigate('/dashboard')
		} catch (error) {
			toast.error(error?.response?.data?.msg)
		}
	}
	return (
		<Wrapper>
			<Form method='post' className='form'>
				<Logo />
				<h4>login</h4>
				<FormRow type='email' name='email' defaultValue='test@test.com' />
				<FormRow type='password' name='password' defaultValue='secret123' />
				<SubmitBtn />
				<button type='button' className='btn btn-block' onClick={loginTestUser}>
					explore the app
				</button>
				<p>
					Not a member yet?
					<Link to='/register' className='member-btn'>
						Register
					</Link>
				</p>
			</Form>
		</Wrapper>
	)
}

export default Login
