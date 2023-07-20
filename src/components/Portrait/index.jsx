import styles from './Portrait.module.scss'

const Portrait = () => {
	return (
		<a name='portrait'>
			<main className={styles.main}>
				<img
					src='src/assets/icons/events/blob1.svg'
					alt='blob'
					className={styles.blob1}
				/>
				<img
					src='src/assets/icons/events/blob2.svg'
					alt='blob'
					className={styles.blob2}
				/>
				<img
					src='src/assets/icons/events/blob3.svg'
					alt='blob'
					className={styles.blob3}
				/>

				<div className={styles.titleBlock}>
					<img src='src/assets/icons/portrait/titleGuy.svg' alt='guy' />
					<span>Портрет кандидата</span>
				</div>
				<section className={styles.stats}>
					<div className={styles.femaleStat}></div>
					<div className={styles.maleStat}></div>
					<div className={styles.ageStat}>
						<span className={styles.low}>
							<b>25</b>лет
						</span>
						<span className={styles.high}>
							<b>37</b>лет
						</span>
						<img src='src/assets/icons/portrait/path.svg' alt='path' />
					</div>
					<div className={styles.residentStat}>
						<span>
							<b>91</b>
							<br />
							новых сотрудников
						</span>
						<span>
							<b>51</b>
							<br />
							релокация в Сбер Порт
						</span>
					</div>

					<div className={styles.gradientPhotoBlock}>
						<img
							className={styles.arrow}
							src='src/assets/icons/portrait/arrow.svg'
							alt='arrow'
						/>
						<img
							className={styles.photo}
							src='src/assets/photos/portraitGuy.png'
							alt='guy'
						/>
					</div>
				</section>
			</main>
		</a>
	)
}

export default Portrait
