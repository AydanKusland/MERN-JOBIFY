import { useLoaderData } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { ChartsContainer, StatsContainer } from '../components'

export const loader = async () => {
	try {
		const response = await customFetch('/jobs/stats')
		return response.data
	} catch (error) {
		return error
	}
}

const Stats = () => {
	const { defaultStats, monthlyApplications } = useLoaderData()
	return (
		<>
			<StatsContainer defaultStats={defaultStats} />
			{monthlyApplications && <ChartsContainer data={monthlyApplications} />}
		</>
	)
}

export default Stats
