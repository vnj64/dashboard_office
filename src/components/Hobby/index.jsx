import styles from './Hobby.module.scss'

const Hobby = () => {
	return (
		<a name='hobby'>
			<main className={styles.main}>
				<img
					src='src/assets/icons/hobby/blob1.svg'
					alt='blob'
					className={styles.blob1}
				/>
				<img
					src='src/assets/icons/hobby/blob2.svg'
					alt='blob'
					className={styles.blob2}
				/>
				<img
					src='src/assets/icons/hobby/blob3.svg'
					alt='blob'
					className={styles.blob3}
				/>
				<img
					src='src/assets/icons/hobby/blob4.svg'
					alt='blob'
					className={styles.blob4}
				/>
				<section className={styles.upperBlock}>
					<h1>
						хобби
						<br />
						сотрудников
					</h1>
					<img
						className={styles.arrow}
						src='src/assets/icons/hobby/arrow.svg'
						alt='arrow'
					/>
					<div className={styles.upperBlockImg}>
						Парусный
						<br />
						спорт
					</div>
				</section>
				<section className={styles.lowerBlock}>
					<div className={styles.greenBlock}></div>
					<div className={styles.lowerBlockBigImg}>Походы</div>
					<div className={styles.sliders}>
						<div className={styles.slider}>
							<div className={styles.slider1_1}>
								<span>Кроссфит</span>
							</div>
							<div className={styles.slider1_2}>
								<span>Бег</span>
							</div>
						</div>
						<div className={styles.slider}>
							<div className={styles.slider2_1}>
								<span>Серфинг</span>
							</div>
							<div className={styles.slider2_2}>
								<span>
									Настольные
									<br />
									игры
								</span>
							</div>
						</div>
					</div>
				</section>
			</main>
		</a>
	)
}

export default Hobby
