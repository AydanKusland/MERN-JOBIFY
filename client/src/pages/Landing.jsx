import { Link } from 'react-router-dom'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque
						rerum doloribus explicabo numquam repellendus maxime, illo
						consectetur saepe, ratione quo debitis earum facere nihil, similique
						ab porro? Animi, id.
					</p>
					<Link to='/register' className='btn register-link'>
						Register
					</Link>
					<Link to='/login' className='btn'>
						Login / Demo User
					</Link>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	)
}

export default Landing
