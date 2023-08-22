import customFetch from '../utils/customFetch'
import { ChartsContainer, StatsContainer } from '../components'
import { useQuery } from '@tanstack/react-query'

const statsQuery = {
	queryKey: ['stats'],
	queryFn: async () => {
		const response = await customFetch('/jobs/stats')
		return response.data
	}
}

export const loader = async queryClient => {
	await queryClient.ensureQueryData(statsQuery)
	return null
}

const Stats = () => {
	const {
		data: { defaultStats, monthlyApplications }
	} = useQuery(statsQuery)

	return (
		<>
			<StatsContainer defaultStats={defaultStats} />
			{monthlyApplications && <ChartsContainer data={monthlyApplications} />}
		</>
	)
}

export default Stats
