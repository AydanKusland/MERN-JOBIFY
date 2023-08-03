import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import NavLinks from './NavLinks'

const SmallSidebar = ({ showSidebar, toggleSidebar, user }) => {
	return (
		<Wrapper>
			<div
				className={
					showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
				}
			>
				<div className='content'>
					<button type='button' className='close-btn' onClick={toggleSidebar}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggleSidebar={toggleSidebar} user={user} />
				</div>
			</div>
		</Wrapper>
	)
}
export default SmallSidebar