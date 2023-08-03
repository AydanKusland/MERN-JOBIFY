import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../components'

const Register = () => {
	return (
		<Wrapper>
			<form className='form'>
				<Logo />
				<h4>Register</h4>

				<FormRow type='text' name='name' defaultValue='John' />
				<FormRow
					type='text'
					name='lastName'
					defaultValue='Tugov'
					labelText='Last Name'
				/>
				<FormRow type='text' name='location' defaultValue='Paris' />
				<FormRow type='email' name='email' defaultValue='test@test.com' />
				<FormRow type='password' name='password' defaultValue='secret!' />
				<button type='submit' className='btn btn-block'>
					submit
				</button>
				<p>
					Already a member?
					<Link to='/login' className='member-btn'>
						Login
					</Link>
				</p>
			</form>
		</Wrapper>
	)
}

export default Register
