import { useState } from 'react'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { Outlet } from 'react-router-dom'

const DashboardLayout = ({ isDarkThemeEnabled }) => {
	// temp
	const user = { name: 'John' }
	const [showSidebar, setShowSidebar] = useState(false)
	const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled)

	const toggleDarkTheme = () => {
		const newDarkTheme = !isDarkTheme
		setIsDarkTheme(newDarkTheme)
		document.body.classList.toggle('dark-theme', newDarkTheme)
		localStorage.setItem('darkTheme', newDarkTheme)
	}

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	const logoutUser = async () => {
		console.log('logout user')
	}

	return (
		<Wrapper>
			<main className='dashboard'>
				<SmallSidebar
					showSidebar={showSidebar}
					toggleSidebar={toggleSidebar}
					user={user}
				/>
				<BigSidebar showSidebar={showSidebar} user={user} />
				<div>
					<Navbar
						toggleSidebar={toggleSidebar}
						user={user}
						logoutUser={logoutUser}
						toggleDarkTheme={toggleDarkTheme}
						isDarkTheme={isDarkTheme}
					/>
					<div className='dashboard-page'>
						<Outlet />
					</div>
				</div>
			</main>
		</Wrapper>
	)
}

export default DashboardLayout
