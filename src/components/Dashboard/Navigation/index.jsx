import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<a href='#about'>
				<div className={styles.navBlock}>
					<div>
						<img src='src/assets/icons/dashboard/about.svg' alt='about' />
					</div>
					<span>Об офисе</span>
				</div>
			</a>
			<a href='#events'>
				<div className={styles.navBlock}>
					<div>
						<img src='src/assets/icons/dashboard/events.svg' alt='events' />
					</div>
					<span>Мероприятия</span>
				</div>
			</a>
			<a href='#portrait'>
				<div className={styles.navBlock}>
					<div>
						<img src='src/assets/icons/dashboard/portrait.svg' alt='portrait' />
					</div>
					<span>Портрет кандидата</span>
				</div>
			</a>
			<a href='#geography'>
				<div className={styles.navBlock}>
					<div>
						<img
							src='src/assets/icons/dashboard/geography.svg'
							alt='geography'
						/>
					</div>
					<span>География</span>
				</div>
			</a>
			<a href='#hobby'>
				<div className={styles.navBlock}>
					<div>
						<img src='src/assets/icons/dashboard/hobby.svg' alt='hobby' />
					</div>
					<span>Хобби</span>
				</div>
			</a>
		</nav>
	)
}

export default Navigation
