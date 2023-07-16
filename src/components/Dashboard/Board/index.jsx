import styles from './Board.module.scss'

const Board = () => {
	return (
		<section className={styles.board}>
			<div className={styles.titleBlock}>
				<a name='dashboard'>
					<span>Сбер КИБ</span>
				</a>
			</div>
			<div className={styles.gridCards}>
				<div className={styles.gridCard + ' ' + styles.events}>
					<section>Мероприятия</section>
					<span>/2023</span>
					<div>
						Посмотреть все{' '}
						<img src='src/assets/icons/dashboard/eventsMore.svg' alt='arrow' />
					</div>
				</div>
				<div className={styles.gridCard}>two</div>
				<div className={styles.gridCard + ' ' + styles.workplaces}>
					<img
						className={styles.workplacesArrow}
						src='src/assets/icons/dashboard/aboutArrow.svg'
						alt='arrow'
					/>
					<div className={styles.workplacesBlockFirst}>200</div>
					<div className={styles.workplacesBlockSecond}>22</div>
					<span className={styles.workplacesSpanFirst}>222</span>
					<img
						className={styles.workplacesLine}
						src='src/assets/icons/dashboard/aboutLine.svg'
						alt='line'
					/>
					<span className={styles.workplacesSpanSecond}>рабочих места</span>
				</div>
				<div className={styles.gridCard + ' ' + styles.geography}>
					<span>Детали</span>
					<img
						className={styles.geographyPath}
						src='src/assets/icons/dashboard/geographyPath.svg'
						alt='path'
					/>
					<img
						className={styles.geographyPlace}
						src='src/assets/icons/dashboard/geographyPlace.svg'
						alt='place'
					/>
					<div></div>
				</div>
				<div className={styles.gridCard + ' ' + styles.portrait}>
					<img
						className={styles.portraitImage}
						src='src/assets/photos/portraitDashboard.png'
						alt='portrait'
					/>
					<img
						className={styles.portraitArrow}
						src='src/assets/icons/dashboard/portraitArrow.svg'
						alt='arrow'
					/>
					<div>Изучить портрет</div>
				</div>
				<div className={styles.gridCard + ' ' + styles.slider}>
					<img src='src/assets/photos/dashboardSliderFirst.jpg' alt='first' />
					<img src='src/assets/photos/dashboardSliderSecond.jpg' alt='second' />
					<img src='src/assets/photos/dashboardSliderThird.jpg' alt='third' />
				</div>
			</div>
		</section>
	)
}

export default Board
