import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks'
import Logo from './Logo'

const BidSidebar = ({ showSidebar, user }) => {
	return (
		<Wrapper>
			<div
				className={
					showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
				}
			>
				<div className='content'>
					<header>
						<Logo />
					</header>
					<NavLinks showSidebar={showSidebar} user={user} isBigSidebar />
				</div>
			</div>
		</Wrapper>
	)
}

export default BidSidebar
