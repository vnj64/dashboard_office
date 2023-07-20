import styles from './Welcome.module.scss'

const Welcome = () => {
	return (
		<main className={styles.main}>
			<div className={styles.titleBlock}>
				<h1>
					сбер
					<br />
					порт
				</h1>
				<img src='src/assets/icons/welcome/welcome-ship.svg' alt='ship' />
			</div>
			<a href='#dashboard'>
				<img
					className={styles.arrow}
					src='src/assets/icons/welcome/welcome-arrow.svg'
					alt='arrow'
				/>
			</a>
		</main>
	)
}

export default Welcome
