import { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Loading, Navbar, SmallSidebar } from '../components'
import { Outlet, redirect, useNavigate, useNavigation } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { checkDefaultTheme } from '../App'
import { useQuery } from '@tanstack/react-query'

const userQuery = {
	queryKey: ['user'],
	queryFn: async () => {
		const { data } = await customFetch('/users/current-user')
		return data
	}
}

export const loader = async queryClient => {
	try {
		return queryClient.ensureQueryData(userQuery)
	} catch (error) {
		return redirect('/')
	}
}

const DashboardLayout = ({ queryClient }) => {
	const { user } = useQuery(userQuery).data
	const navigate = useNavigate()
	const isPageLoading = useNavigation().state === 'loading'
	const [showSidebar, setShowSidebar] = useState(false)
	const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme)
	const [isAuthError, setIsAuthError] = useState(false)

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
		queryClient.invalidateQueries()
		toast.success('Logging Out')
		await customFetch('/auth/logout')
	}

	customFetch.interceptors.response.use(
		response => response,
		error => {
			if (error?.response?.status === 401) setIsAuthError(true)
			return Promise.reject(error)
		}
	)

	useEffect(() => {
		if (!isAuthError) return
		logoutUser()
	}, [isAuthError])

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
						{isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
					</div>
				</div>
			</main>
		</Wrapper>
	)
}

export default DashboardLayout
