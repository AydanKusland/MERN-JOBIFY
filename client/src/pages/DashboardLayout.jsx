import { useState } from 'react'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'

export const loader = async () => {
	try {
		const { data } = await customFetch('/users/current-user')
		return data
	} catch (error) {
		return redirect('/')
	}
}

const DashboardLayout = ({ isDarkThemeEnabled }) => {
	const { user } = useLoaderData()
	const navigate = useNavigate()

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
		navigate('/')
		await customFetch('/auth/logout')
		toast.success('Logging Out')
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
						<Outlet context={{ user }} />
					</div>
				</div>
			</main>
		</Wrapper>
	)
}

export default DashboardLayout
