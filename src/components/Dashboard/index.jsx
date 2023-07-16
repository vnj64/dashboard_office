import React from 'react'
import styles from './Dashboard.module.scss'
import Navigation from './Navigation'
import Board from './Board'

const Dashboard = () => {
	return (
		<main className={styles.main}>
			<Navigation />
			<Board />
		</main>
	)
}

export default Dashboard
