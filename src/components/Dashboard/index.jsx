import Board from './Board'
import Navigation from './Navigation'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
	return (
		<main className={styles.main}>
			<Navigation />
			<Board />
		</main>
	)
}

export default Dashboard
