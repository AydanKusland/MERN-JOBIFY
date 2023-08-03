import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import Wrapper from '../assets/wrappers/ThemeToggle'

const ThemeToggle = ({ isDarkTheme, toggleDarkTheme }) => {
	return (
		<Wrapper onClick={toggleDarkTheme}>
			{isDarkTheme ? (
				<BsFillSunFill className='toggle-icon' />
			) : (
				<BsFillMoonFill />
			)}
		</Wrapper>
	)
}
export default ThemeToggle
