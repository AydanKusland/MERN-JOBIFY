import { useState } from 'react'
import Wrapper from '../assets/wrappers/LogoutContainer'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'

const LogoutContainer = ({ user, logoutUser }) => {
	const [showLogout, setShowLogout] = useState(false)

	return (
		<Wrapper>
			<button
				type='button'
				className='btn logout-btn'
				onClick={() => setShowLogout(!showLogout)}
			>
				{user.avatar ? (
					<img src={user.avatar} alt='avatar' className='img' />
				) : (
					<FaUserCircle />
				)}

				{user?.name}
				<FaCaretDown />
			</button>
			<div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
				<button type='button' className='dropdown-btn' onClick={logoutUser}>
					logout
				</button>
			</div>
		</Wrapper>
	)
}
export default LogoutContainer
