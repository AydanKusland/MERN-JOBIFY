import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft } from 'react-icons/fa'
import Logo from './Logo'
import LogoutContainer from './LogoutContainer'
import ThemeToggle from './ThemeToggle'

const Navbar = ({
	toggleSidebar,
	user,
	toggleDarkTheme,
	logoutUser,
	isDarkTheme
}) => {
	return (
		<Wrapper>
			<div className='nav-center'>
				<button type='button' className='toggle-btn' onClick={toggleSidebar}>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h4 className='logo-text'>dashboard</h4>
				</div>

				<div className='btn-container'>
					<ThemeToggle
						toggleDarkTheme={toggleDarkTheme}
						isDarkTheme={isDarkTheme}
					/>
					<LogoutContainer user={user} logoutUser={logoutUser} />
				</div>
			</div>
		</Wrapper>
	)
}
export default Navbar